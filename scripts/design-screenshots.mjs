#!/usr/bin/env node
/**
 * Capture reference screenshots of stories from a static Storybook build, in
 * the light and dark themes. Used to keep a visual record of design changes
 * (see packages/ui/DESIGN-CHANGES.md).
 *
 * Usage:
 *   node scripts/design-screenshots.mjs <storybook-static dir> <output dir> [story-id,story-id]
 *
 * The optional third argument captures only those shots (story id, or
 * `<story id>--hover` for a hover shot), so earlier "before" shots aren't
 * overwritten when you record a new change.
 *
 * Build Storybook first: pnpm --filter @acme/ui build-storybook
 */
import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { serveStatic } from './lib/serve-static.mjs'

const root = path.resolve(import.meta.dirname, '..')
const require = createRequire(path.join(root, 'packages/ui/package.json'))
const { chromium } = require('playwright')

const [staticDir, outDir] = process.argv.slice(2, 4).map((p) => path.resolve(p))
const only = process.argv[4]?.split(',').filter(Boolean)
if (!staticDir || !outDir) {
  console.error('usage: design-screenshots.mjs <storybook-static> <out-dir>')
  process.exit(1)
}

/** Stories whose look changed (accessibility work, then the polish pass). */
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
  'navigation-pagination--default',
  'layout-card--media-carousel',
  // Polish pass (see DESIGN-CHANGES.md "Polish pass")
  'primitives-button--icon-only',
  'feedback-progressbar--circle',
  'primitives-textarea--default',
  'layout-table--default',
  'navigation-carousel--default',
]

/** Hover states that changed: the real mouse rests on `hover` while capturing. */
export const HOVER_SHOTS = [
  { id: 'primitives-button--variants', hover: 'button:has-text("Default")' },
  { id: 'primitives-menu--default', hover: '[role="menuitem"]:has-text("Settings")' },
  { id: 'primitives-selectbutton--selected', hover: 'button' },
  { id: 'primitives-radiobutton--group', hover: 'label:has(input:checked)' },
  { id: 'primitives-switch--on', hover: '[role="switch"]' },
  { id: 'primitives-input--default', hover: 'input' },
  { id: 'layout-navigationpanel--default', hover: 'button:has-text("Explore")' },
  // The dialog is in a portal outside #storybook-root, so capture the page.
  {
    id: 'layout-dialogbox--open',
    hover: 'button:has-text("Cancel booking")',
    page: true,
    ready: '[role="dialog"]',
  },
]
const THEMES = ['light', 'dark']
const SHOTS = [
  ...STORIES.map((id) => ({ id, name: id })),
  ...HOVER_SHOTS.map((s) => ({ ...s, name: `${s.id}--hover` })),
]

const server = await serveStatic(staticDir)
const base = server.url

fs.mkdirSync(outDir, { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 900, height: 700 }, deviceScaleFactor: 1 })
let count = 0
try {
  for (const { id, name, hover, page: wholePage, ready } of SHOTS.filter(
    (s) => !only || only.includes(s.name)
  )) {
    for (const theme of THEMES) {
      // Story args/play run as normal; the theme comes from the toolbar global.
      await page.goto(`${base}/iframe.html?id=${id}&viewMode=story&globals=theme:${theme}`)
      await page.waitForSelector(ready ?? '#storybook-root > *', { timeout: 15000 })
      await page.evaluate((t) => (document.documentElement.dataset.theme = t), theme)
      await page.waitForTimeout(400) // let play functions and transitions settle
      const root = page.locator('#storybook-root')
      await page.mouse.move(0, 0)
      if (hover) {
        await (wholePage ? page : root).locator(hover).first().hover()
        await page.waitForTimeout(250) // hover transitions
      }
      const file = path.join(outDir, `${name}--${theme}.png`)
      await (wholePage ? page.screenshot({ path: file }) : root.screenshot({ path: file }))
      count++
    }
  }
} finally {
  await browser.close()
  server.close()
}
console.log(`saved ${count} screenshots to ${path.relative(process.cwd(), outDir)}`)
