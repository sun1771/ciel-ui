#!/usr/bin/env node
/**
 * Capture reference screenshots of stories from a static Storybook build, in
 * the light and dark themes. Used to keep a visual record of design changes
 * (see packages/ui/DESIGN-CHANGES.md).
 *
 * Usage:
 *   node scripts/design-screenshots.mjs <storybook-static dir> <output dir>
 *
 * Build Storybook first: pnpm --filter @acme/ui build-storybook
 */
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import { createRequire } from 'node:module'

const root = path.resolve(import.meta.dirname, '..')
const require = createRequire(path.join(root, 'packages/ui/package.json'))
const { chromium } = require('playwright')

const [staticDir, outDir] = process.argv.slice(2).map((p) => path.resolve(p))
if (!staticDir || !outDir) {
  console.error('usage: design-screenshots.mjs <storybook-static> <out-dir>')
  process.exit(1)
}

/** Stories whose look changed in the accessibility work. */
export const STORIES = [
  'primitives-input--default',
  'primitives-input--error',
  'primitives-textarea--error',
  'primitives-searchbox--custom-icon',
  'primitives-fieldpicker--placeholder',
  'primitives-checkbox--checked',
  'primitives-checkbox--error',
  'primitives-radiobutton--group',
  'primitives-switch--disabled',
  'primitives-badge--variants',
  'primitives-chip--colors',
  'primitives-tag--disabled',
  'primitives-link--default',
  'primitives-daterangecalendar--single-month',
  'feedback-snackbar--variants',
  'feedback-snackbar--with-progress',
]
const THEMES = ['light', 'dark']

const TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
}
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x')
  const file = path.join(staticDir, decodeURIComponent(url.pathname))
  if (!file.startsWith(staticDir) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404).end()
    return
  }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream' })
  fs.createReadStream(file).pipe(res)
})
await new Promise((r) => server.listen(0, r))
const base = `http://127.0.0.1:${server.address().port}`

fs.mkdirSync(outDir, { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 900, height: 700 }, deviceScaleFactor: 1 })
let count = 0
try {
  for (const id of STORIES) {
    for (const theme of THEMES) {
      // Story args/play run as normal; the theme comes from the toolbar global.
      await page.goto(`${base}/iframe.html?id=${id}&viewMode=story&globals=theme:${theme}`)
      await page.waitForSelector('#storybook-root > *', { timeout: 15000 })
      await page.evaluate((t) => (document.documentElement.dataset.theme = t), theme)
      await page.waitForTimeout(400) // let play functions and transitions settle
      const root = page.locator('#storybook-root')
      await root.screenshot({ path: path.join(outDir, `${id}--${theme}.png`) })
      count++
    }
  }
} finally {
  await browser.close()
  server.close()
}
console.log(`saved ${count} screenshots to ${path.relative(process.cwd(), outDir)}`)
