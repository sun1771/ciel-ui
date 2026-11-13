#!/usr/bin/env node
/**
 * Accessibility audit of the docs site: every route, light and dark theme,
 * axe-core (WCAG 2.2 A/AA rules) in real Chromium. Also expands every
 * "Show code" panel so highlighted code is checked too.
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

const browser = await chromium.launch()
let failures = 0
for (const theme of ['light', 'dark']) {
  const context = await browser.newContext({ colorScheme: theme })
  const page = await context.newPage()
  for (const route of routes) {
    await page.goto(base + route, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.querySelectorAll('details').forEach((d) => (d.open = true)))
    await page.addScriptTag({ content: axeSource })
    const { violations } = await page.evaluate(() =>
      window.axe.run(document, {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'],
        },
      })
    )
    for (const v of violations) {
      failures++
      console.log(`✗ [${theme}] ${route} — ${v.id}: ${v.help}`)
      for (const n of v.nodes.slice(0, 3)) {
        console.log(`    ${n.target.join(' ')}  ${n.failureSummary?.split('\n')[1]?.trim() ?? ''}`)
      }
    }
  }
  await context.close()
}
await browser.close()
console.log(
  failures
    ? `\n${failures} violation(s) across ${routes.length} routes × 2 themes`
    : `\n✓ no axe violations: ${routes.length} routes × 2 themes`
)
process.exit(failures ? 1 : 0)
