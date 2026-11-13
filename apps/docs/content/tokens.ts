import fs from 'node:fs'
import path from 'node:path'

/** Parse @acme/tokens' CSS into light/dark maps (build time, server only). */
export function readTokens() {
  const css = fs.readFileSync(
    path.join(process.cwd(), 'node_modules/@acme/tokens/tokens.css'),
    'utf8'
  )
  const block = (selector: string) => {
    const start = css.indexOf(selector)
    const body = css.slice(css.indexOf('{', start) + 1, css.indexOf('\n}', start))
    const out: Record<string, string> = {}
    for (const m of body.matchAll(/--(ds-[\w-]+):\s*([^;]+);/g)) out[m[1]] = m[2].trim()
    return out
  }
  const light = block(':root {')
  const dark = { ...light, ...block("[data-theme='dark'] {") }
  return { light, dark }
}

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export function contrast(a: string, b: string) {
  if (!/^#[0-9a-f]{6}$/i.test(a) || !/^#[0-9a-f]{6}$/i.test(b)) return null
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}
