/**
 * Design-token contrast audit (WCAG 2.2 AA), for light and dark themes.
 *
 * axe (in the story tests) only checks text it can see, and skips icons and
 * very short text, so this test checks the token pairings the components use
 * directly from packages/tokens/tokens.css:
 *   - text on its background ............ 4.5:1 (1.4.3)
 *   - icons / graphical indicators ....... 3:1   (1.4.11)
 * Dark theme = light values overridden by the [data-theme='dark'] block, the
 * same way the browser resolves them.
 */
import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

const css = fs.readFileSync(path.resolve(import.meta.dirname, '../../../tokens/tokens.css'), 'utf8')

function parseBlock(selector: string): Record<string, string> {
  const start = css.indexOf(selector)
  const body = css.slice(css.indexOf('{', start) + 1, css.indexOf('\n}', start))
  const vars: Record<string, string> = {}
  for (const m of body.matchAll(/--ds-([\w-]+):\s*(#[0-9a-fA-F]{6})\b/g)) vars[m[1]] = m[2]
  return vars
}

const light = parseBlock(':root {')
const themes = { light, dark: { ...light, ...parseBlock("[data-theme='dark'] {") } }

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

type Pair = [fg: string, bg: string, min: number, usedBy: string]
const TEXT = 4.5
const GRAPHIC = 3

const PAIRS: Pair[] = [
  // Text on the default surface
  ...['heading', 'body', 'action', 'action-hover', 'placeholder'].map((t): Pair => [
    `mapped-text-${t}`,
    'mapped-surface-default',
    TEXT,
    'body copy, links, inputs',
  ]),
  ...['information', 'warning', 'error', 'success'].map((t): Pair => [
    `mapped-text-${t}`,
    'mapped-surface-default',
    TEXT,
    'status text, Snackbar titles',
  ]),
  // White text on solid fills
  ['mapped-text-on-action', 'mapped-surface-action', TEXT, 'Button default, Badge default'],
  ['mapped-text-on-action', 'mapped-surface-brand-strong', TEXT, 'Chip brand/sharp'],
  ...['information', 'warning', 'error', 'success'].map((t): Pair => [
    `mapped-text-on-action`,
    `mapped-surface-${t}-strong`,
    TEXT,
    'Badge status pills',
  ]),
  // Sharp Chips: body text on the status border colour
  ...['information', 'warning', 'error', 'success'].map((t): Pair => [
    'mapped-text-body',
    `mapped-border-${t}`,
    TEXT,
    'Chip sharp (blue/orange/red/green)',
  ]),
  // Icons on the default surface
  ...['default', 'action', 'action-hover', 'information', 'warning', 'error', 'success'].map(
    (t): Pair => [`mapped-icon-${t}`, 'mapped-surface-default', GRAPHIC, 'icons']
  ),
  ['mapped-icon-on-action', 'mapped-surface-action', GRAPHIC, 'icons in default Buttons'],
  // Status badges (dot type) are indicators on the page surface
  ...['information', 'warning', 'error', 'success'].map((t): Pair => [
    `mapped-surface-${t}-strong`,
    'mapped-surface-default',
    GRAPHIC,
    'Badge dots',
  ]),
  // Snackbar progress: fill against its tinted track
  ...['warning', 'error', 'success', 'information'].map((t): Pair => [
    `mapped-icon-${t}`,
    `mapped-surface-${t}`,
    GRAPHIC,
    'Snackbar progress fill',
  ]),
  // Form control outlines identify the control (WCAG 1.4.11)
  [
    'mapped-border-input',
    'mapped-surface-default',
    GRAPHIC,
    'input, search, picker, checkbox, switch outlines',
  ],
  ['mapped-border-input-error', 'mapped-surface-default', GRAPHIC, 'form control error outlines'],
  // Focus ring on the page
  ['mapped-border-focus', 'mapped-surface-default', GRAPHIC, 'focus outline'],
  // Unselected Pagination dots identify the pages (WCAG 1.4.11)
  ['mapped-surface-indicator', 'mapped-surface-default', GRAPHIC, 'Pagination dots'],
  // Table header row
  ['mapped-text-heading', 'mapped-surface-subtle', TEXT, 'Table header text'],
  ['mapped-text-body', 'mapped-surface-subtle', TEXT, 'Table header text'],
  // Hover state of filled controls: white text on the hover fill (Button, Menu item, DialogBox)
  ['mapped-text-on-action', 'mapped-surface-action-hover', TEXT, 'hovered primary button'],
  // Hover state: text and icon on the hover fill (TabBar tab, AccordionProgressive header)
  [
    'mapped-text-action-hover',
    'mapped-surface-action-hover-light',
    TEXT,
    'hovered tab / accordion label',
  ],
  [
    'mapped-icon-action-hover',
    'mapped-surface-action-hover-light',
    GRAPHIC,
    'hovered tab icon / accordion chevron',
  ],
]

// Dark theme only: the status border colours were darkened for the sharp-Chip
// text above, so make sure they still read as borders on the black page. In the
// light theme they are pastel accents paired with text/icons — see the non-text
// contrast follow-up in ACCESSIBILITY.md.
const DARK_ONLY: Pair[] = ['information', 'warning', 'error', 'success'].map((t): Pair => [
  `mapped-border-${t}`,
  'mapped-surface-default',
  GRAPHIC,
  'status borders',
])

describe.each(Object.entries(themes))('%s theme tokens', (_theme, tokens) => {
  it.each(_theme === 'dark' ? [...PAIRS, ...DARK_ONLY] : PAIRS)(
    '%s on %s ≥ %s:1 (%s)',
    (fg, bg, min) => {
      expect(tokens[fg], `missing token --ds-${fg}`).toBeDefined()
      expect(tokens[bg], `missing token --ds-${bg}`).toBeDefined()
      const ratio = contrast(tokens[fg], tokens[bg])
      expect(
        ratio,
        `--ds-${fg} ${tokens[fg]} on --ds-${bg} ${tokens[bg]} = ${ratio.toFixed(2)}:1`
      ).toBeGreaterThanOrEqual(min)
    }
  )
})
