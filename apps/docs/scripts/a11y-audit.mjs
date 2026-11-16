#!/usr/bin/env node
/**
 * Accessibility audit of the docs site: every route, light and dark theme,
 * axe-core (WCAG 2.2 A/AA rules) in real Chromium. Also expands every
 * "Show code" panel so highlighted code is checked too, and fails if a page
 * doesn't load: axe would happily pass a 404 page. The not-found page is
 * audited on purpose, at an unknown URL.
 *
 * Runs at desktop width and again at phone width (390px), where it also
 * fails if a page scrolls sideways, and audits the open navigation drawer.
 *
 * Usage: start the site (`pnpm build && pnpm start`), then
 *   node scripts/a11y-audit.mjs [baseUrl=http://localhost:3000]
 */
import fs from 'node:fs'
import { createRequire } from 'node:module'
import { chromium } from 'playwright'

const require = createRequire(import.meta.url)
const axeSource = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8')
const base = process.argv[2] ?? 'http://localhost:3000'

// Routes come from the registry so new component pages are audited automatically.
const { COMPONENTS } = await import('../content/registry.ts')
const routes = [
  '/',
  '/docs',
  '/docs/getting-started',
  '/docs/theming',
  '/docs/accessibility',
  '/docs/tokens',
  '/docs/icons',
  '/docs/recipes/travel',
  ...COMPONENTS.map((c) => `/docs/components/${c.slug}`),
]
const NOT_FOUND = '/docs/this-page-does-not-exist'
routes.push(NOT_FOUND)

const VIEWPORTS = {
  desktop: { width: 1280, height: 800 },
  phone: { width: 390, height: 844 },
}
const RULES = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']

const browser = await chromium.launch()
let failures = 0

async function runAxe(page, label) {
  await page.addScriptTag({ content: axeSource })
  const { violations } = await page.evaluate(
    (values) => window.axe.run(document, { runOnly: { type: 'tag', values } }),
    RULES
  )
  for (const v of violations) {
    failures++
    console.log(`✗ ${label} — ${v.id}: ${v.help}`)
    for (const n of v.nodes.slice(0, 3)) {
      console.log(`    ${n.target.join(' ')}  ${n.failureSummary?.split('\n')[1]?.trim() ?? ''}`)
    }
  }
}

for (const [viewportName, viewport] of Object.entries(VIEWPORTS))
  for (const theme of ['light', 'dark']) {
    const context = await browser.newContext({ colorScheme: theme, viewport })
    const page = await context.newPage()
    const tag = `[${theme}, ${viewportName}]`
    for (const route of routes) {
      const response = await page.goto(base + route, { waitUntil: 'networkidle' })
      const status = response?.status()
      const expected = route === NOT_FOUND ? 404 : 200
      if (status !== expected) {
        failures++
        console.log(`✗ ${tag} ${route} — HTTP ${status}, expected ${expected}`)
        continue
      }
      await page.evaluate(() =>
        document.querySelectorAll('details').forEach((d) => (d.open = true))
      )
      // WCAG 1.4.10 Reflow: no sideways page scroll at phone width.
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
      if (scrollWidth > viewport.width) {
        failures++
        console.log(`✗ ${tag} ${route} — page is ${scrollWidth}px wide, scrolls sideways`)
      }
      await runAxe(page, `${tag} ${route}`)
    }
    // The navigation drawer (phone width only).
    if (viewportName === 'phone') {
      await page.goto(base + '/docs/getting-started', { waitUntil: 'networkidle' })
      await page.getByRole('button', { name: 'Menu' }).click()
      await page.waitForSelector('dialog[open]')
      await runAxe(page, `${tag} navigation drawer`)
    }
    await context.close()
  }
await browser.close()
console.log(
  failures
    ? `\n${failures} failure(s) across ${routes.length} routes × 2 themes × 2 widths`
    : `\n✓ no axe violations or sideways scroll: ${routes.length} routes × 2 themes × desktop and phone widths, plus the navigation drawer`
)
process.exit(failures ? 1 : 0)
