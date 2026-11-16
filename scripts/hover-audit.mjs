#!/usr/bin/env node
/**
 * Hover-state contrast audit.
 *
 * The story tests can't check hover colours: storybook/test's userEvent.hover
 * only fires simulated events, which never trigger CSS :hover. This script
 * moves the real mouse over every interactive element of every story in a
 * static Storybook build, in the light and dark themes, and checks:
 *   - text, with axe-core's color-contrast rule: 4.5:1, or 3:1 for large text
 *     (WCAG 1.4.3)
 *   - icons of icon-only controls against their background: 3:1 (WCAG 1.4.11)
 * Disabled elements are skipped (WCAG exempts them).
 *
 * Usage:
 *   pnpm --filter @cielui/react build-storybook
 *   node scripts/hover-audit.mjs packages/ui/storybook-static [story-id-prefix,...]
 */
import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { serveStatic } from './lib/serve-static.mjs'

const root = path.resolve(import.meta.dirname, '..')
const require = createRequire(path.join(root, 'packages/ui/package.json'))
const { chromium } = require('playwright')
const axeSource = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8')

const staticDir = process.argv[2] && path.resolve(process.argv[2])
const filters = process.argv[3]?.split(',').filter(Boolean)
if (!staticDir || !fs.existsSync(path.join(staticDir, 'index.json'))) {
  console.error('usage: hover-audit.mjs <storybook-static dir> [story-id-prefix,...]')
  console.error('Build Storybook first: pnpm --filter @cielui/react build-storybook')
  process.exit(1)
}

const { entries } = JSON.parse(fs.readFileSync(path.join(staticDir, 'index.json'), 'utf8'))
const stories = Object.values(entries)
  .filter((e) => e.type === 'story')
  .map((e) => e.id)
  .filter((id) => !filters || filters.some((f) => id.startsWith(f)))

const INTERACTIVE = [
  'button',
  'a[href]',
  'label',
  'summary',
  '[role="button"]',
  '[role="tab"]',
  '[role="menuitem"]',
  '[role="option"]',
  '[role="switch"]',
  '[role="checkbox"]',
  '[role="radio"]',
  '[tabindex="0"]',
].join(',')

// Runs in the page: marks hoverable elements and returns how many there are.
function markTargets(selector) {
  const isDisabled = (el) =>
    el.closest('[disabled], [aria-disabled="true"], fieldset:disabled') !== null ||
    (el.tagName === 'LABEL' && el.control?.disabled)
  // The whole body, not just #storybook-root: DialogBox renders in a portal.
  const targets = [...document.body.querySelectorAll(selector)].filter((el) => {
    if (el.closest('#storybook-docs, .sb-wrapper, .sb-errordisplay')) return false
    const r = el.getBoundingClientRect()
    return r.width > 0 && r.height > 0 && !isDisabled(el)
  })
  targets.forEach((el, i) => el.setAttribute('data-hover-audit', String(i)))
  return targets.length
}

// Runs in the page: contrast of an icon-only control's icon against the
// colour behind it (semi-transparent fills are blended down to the page).
function iconContrast(index) {
  const el = document.querySelector(`[data-hover-audit="${index}"]`)
  if (!el || el.innerText.trim() !== '') return null
  const svg = el.querySelector('svg')
  if (!svg) return null
  const parse = (c) => {
    const m = c.match(/rgba?\(([^)]+)\)/)
    if (!m) return null
    const [r, g, b, a = 1] = m[1]
      .split(/[ ,/]+/)
      .filter(Boolean)
      .map(Number)
    return { r, g, b, a }
  }
  const over = (top, under) => ({
    r: top.r * top.a + under.r * (1 - top.a),
    g: top.g * top.a + under.g * (1 - top.a),
    b: top.b * top.a + under.b * (1 - top.a),
    a: 1,
  })
  const layers = []
  for (let n = svg; n; n = n.parentElement) {
    const c = parse(getComputedStyle(n).backgroundColor)
    if (c && c.a > 0) {
      layers.push(c)
      if (c.a >= 1) break
    }
  }
  let bg = { r: 255, g: 255, b: 255, a: 1 }
  if (document.documentElement.dataset.theme === 'dark') bg = { r: 0, g: 0, b: 0, a: 1 }
  for (const layer of layers.reverse()) bg = over(layer, bg)
  const fg = parse(getComputedStyle(svg).color)
  if (!fg) return null
  const lum = ({ r, g, b }) => {
    const ch = [r, g, b].map((v) => {
      v /= 255
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
    })
    return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2]
  }
  const fgBlend = over(fg, bg)
  const [hi, lo] = [lum(fgBlend), lum(bg)].sort((a, b) => b - a)
  const hex = ({ r, g, b }) =>
    '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')
  return { ratio: (hi + 0.05) / (lo + 0.05), fg: hex(fgBlend), bg: hex(bg) }
}

const describe = (index) => {
  const el = document.querySelector(`[data-hover-audit="${index}"]`)
  const text = (el.innerText || el.getAttribute('aria-label') || '').trim().slice(0, 30)
  return `<${el.tagName.toLowerCase()}${el.getAttribute('role') ? ` role=${el.getAttribute('role')}` : ''}> "${text}"`
}

const server = await serveStatic(staticDir)
const browser = await chromium.launch()
const problems = new Map() // dedupe identical findings across stories
let hovered = 0
let skipped = 0

// One page per theme, run in parallel.
async function auditTheme(theme) {
  const page = await browser.newPage({ viewport: { width: 1000, height: 800 } })
  try {
    for (const id of stories) {
      await page.goto(`${server.url}/iframe.html?id=${id}&viewMode=story&globals=theme:${theme}`)
      await page.waitForSelector('#storybook-root > *', { timeout: 15000 }).catch(() => {})
      await page.evaluate((t) => (document.documentElement.dataset.theme = t), theme)
      // No transitions, so the hover colour is final as soon as the pointer lands.
      await page.addStyleTag({
        content: '*,*::before,*::after{transition:none!important;animation:none!important}',
      })
      await page.waitForTimeout(300) // play functions
      await page.addScriptTag({ content: axeSource })
      const count = await page.evaluate(markTargets, INTERACTIVE)

      for (let i = 0; i < count; i++) {
        const target = page.locator(`[data-hover-audit="${i}"]`)
        try {
          await target.hover({ timeout: 1000 })
        } catch {
          skipped++ // covered by another element, or moved away by a play function
          continue
        }
        hovered++
        // Text: axe on the hovered element and two ancestors, which covers
        // hover rules written on a wrapper (e.g. `.root:hover .header`).
        const text = await page.evaluate(async (index) => {
          const el = document.querySelector(`[data-hover-audit="${index}"]`)
          const scope = el.parentElement?.parentElement ?? el
          const { violations } = await window.axe.run(scope, {
            runOnly: ['color-contrast'],
          })
          return violations.flatMap((v) => v.nodes.map((n) => n.any[0]?.data ?? {}))
        }, i)
        const icon = await page.evaluate(iconContrast, i)
        const where = await page.evaluate(describe, i)
        for (const d of text) {
          const key = `${theme}|${id.split('--')[0]}|text|${d.fgColor}|${d.bgColor}`
          if (!problems.has(key))
            problems.set(key, {
              theme,
              story: id,
              where,
              kind: `text ${d.contrastRatio}:1 < ${d.expectedContrastRatio}`,
              colours: `${d.fgColor} on ${d.bgColor}`,
            })
        }
        if (icon && icon.ratio < 3) {
          const key = `${theme}|${id.split('--')[0]}|icon|${icon.fg}|${icon.bg}`
          if (!problems.has(key))
            problems.set(key, {
              theme,
              story: id,
              where,
              kind: `icon ${icon.ratio.toFixed(2)}:1 < 3:1`,
              colours: `${icon.fg} on ${icon.bg}`,
            })
        }
      }
      await page.mouse.move(0, 0)
    }
  } finally {
    await page.close()
  }
}

try {
  await Promise.all(['light', 'dark'].map(auditTheme))
} finally {
  await browser.close()
  server.close()
}

for (const p of problems.values()) {
  console.log(`✗ [${p.theme}] ${p.story} ${p.where}: ${p.kind} (${p.colours})`)
}
console.log(
  `\n${problems.size ? `${problems.size} hover contrast problem(s)` : '✓ no hover contrast problems'}: ` +
    `${hovered} elements hovered in ${stories.length} stories × 2 themes` +
    (skipped ? ` (${skipped} skipped: covered or moved)` : '')
)
process.exit(problems.size ? 1 : 0)
