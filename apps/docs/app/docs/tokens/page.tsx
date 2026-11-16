import fs from 'node:fs'
import path from 'node:path'
import type { Metadata } from 'next'
import Link from 'next/link'
import { contrast, readTokens, withPrefix } from '@/content/tokens'
import { MotionDemo } from './MotionDemo'
import styles from './tokens.module.css'
import page from '../page.module.css'

export const metadata: Metadata = { title: 'Design tokens' }

const SECTIONS = [
  { id: 'colour', title: 'Colour' },
  { id: 'typography', title: 'Typography' },
  { id: 'spacing', title: 'Spacing' },
  { id: 'radius-and-borders', title: 'Radius and borders' },
  { id: 'shadows', title: 'Shadows' },
  { id: 'motion', title: 'Motion' },
  { id: 'palette', title: 'Palette' },
]

const COLOUR_GROUPS = [
  {
    prefix: 'ds-mapped-text-',
    title: 'Text',
    min: 4.5,
    note: 'Checked against the page surface: 4.5:1 minimum.',
  },
  {
    prefix: 'ds-mapped-icon-',
    title: 'Icons',
    min: 3,
    note: 'Checked against the page surface: 3:1 minimum for meaningful icons.',
  },
  { prefix: 'ds-mapped-surface-', title: 'Surfaces', min: null, note: 'Backgrounds and fills.' },
  {
    prefix: 'ds-mapped-border-',
    title: 'Borders',
    min: null,
    note: 'Outlines. border-input, border-input-error and border-focus meet 3:1.',
  },
]

// Exempt from contrast (disabled UI) or used on coloured fills, not the page.
const SKIP_CHECK = /disabled|on-action/

const PALETTES = ['primary', 'neutral', 'information', 'success', 'warning', 'error']

/** Descriptions of the motion tokens, from the published tokens.json. */
function motionNotes() {
  const json = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'node_modules/@acme/tokens/tokens.json'), 'utf8')
  ) as {
    motion: Record<string, Record<string, { $description?: string; $value: unknown }>>
  }
  const notes: Record<string, { note?: string; bezier?: number[] }> = {}
  for (const kind of ['duration', 'easing']) {
    for (const [step, token] of Object.entries(json.motion[kind])) {
      if (step.startsWith('$')) continue
      notes[`ds-motion-${kind}-${step}`] = {
        note: token.$description,
        bezier: Array.isArray(token.$value) ? (token.$value as number[]) : undefined,
      }
    }
  }
  return notes
}

const short = (name: string, prefix: string) => name.slice(prefix.length)

export default function TokensPage() {
  const { light, dark, phone, reducedMotion } = readTokens()
  const notes = motionNotes()

  const headings = withPrefix(light, 'ds-typography-heading-')
    .filter((n) => n.endsWith('-font-size'))
    .map((n) => n.replace(/^ds-typography-heading-|-font-size$/g, ''))
  const bodyStyles = withPrefix(light, 'ds-typography-body-')
    .filter((n) => n.endsWith('-font-size'))
    .map((n) => n.replace(/^ds-typography-body-|-font-size$/g, ''))

  return (
    <article className={page.article}>
      <p className={page.eyebrow}>Guides</p>
      <h1 className={page.title}>Design tokens</h1>
      <p className={page.lead}>
        Every value the components use: colour, type, spacing, radius, borders, shadows and motion.
        Each preview uses the live CSS variable, and the values are read from{' '}
        <code>@acme/tokens</code>, so this page always matches the package.
      </p>
      <p>
        Tokens come in three layers: <strong>brand</strong> (the raw palette and scales),{' '}
        <strong>alias</strong> (spacing, radius, border width, colour scales) and{' '}
        <strong>mapped</strong> (semantic colour roles that switch with the theme). Use mapped and
        alias tokens in your code. See <Link href="/docs/theming">Theming</Link> for how to override
        them.
      </p>

      <nav aria-label="On this page" className={styles.toc}>
        <ul>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Colour ─────────────────────────────────────────────────────── */}
      <h2 id="colour">Colour</h2>
      <p>
        Semantic (“mapped”) colour tokens with their light and dark values. Switch the theme to see
        the swatches change.
      </p>
      {COLOUR_GROUPS.map((g) => (
        <section key={g.prefix} aria-labelledby={`colour-${g.title}`}>
          <h3 id={`colour-${g.title}`} className={styles.subhead}>
            {g.title}
          </h3>
          <p>{g.note}</p>
          <div className={styles.grid}>
            {withPrefix(light, g.prefix)
              .filter((n) => /^#/.test(light[n]))
              .map((n) => {
                const check = g.min && !SKIP_CHECK.test(n)
                const lc = check ? contrast(light[n], light['ds-mapped-surface-default']) : null
                const dc = check ? contrast(dark[n], dark['ds-mapped-surface-default']) : null
                return (
                  <div key={n} className={styles.token}>
                    <span className={styles.swatch} style={{ background: `var(--${n})` }} />
                    <code className={styles.name}>--{n}</code>
                    <span className={styles.values}>
                      <span>
                        Light <code>{light[n]}</code>
                        {lc && <Ratio value={lc} min={g.min!} />}
                      </span>
                      <span>
                        Dark <code>{dark[n]}</code>
                        {dc && <Ratio value={dc} min={g.min!} />}
                      </span>
                    </span>
                  </div>
                )
              })}
          </div>
        </section>
      ))}

      {/* ── Typography ─────────────────────────────────────────────────── */}
      <h2 id="typography">Typography</h2>
      <p>
        Two families: <code>{light['ds-brand-font-family-heading']}</code> for headings and{' '}
        <code>{light['ds-brand-font-family-body']}</code> for body text. The library doesn’t load
        fonts; load them in your app (see <Link href="/docs/getting-started">Getting started</Link>
        ).
      </p>
      <div className={styles.chips}>
        {withPrefix(light, 'ds-brand-font-weight-').map((n) => (
          <span key={n} className={styles.chip} style={{ fontWeight: `var(--${n})` }}>
            {short(n, 'ds-brand-font-weight-')} <code>{light[n]}</code>
          </span>
        ))}
      </div>

      <h3 className={styles.subhead}>Headings</h3>
      <p>
        Each style is a set of tokens: <code>--ds-typography-heading-h1-font-family</code>,{' '}
        <code>-font-weight</code>, <code>-font-size</code> and <code>-line-height</code>. The{' '}
        <code>--ds-responsive-h*</code> tokens have the same sizes but shrink on screens up to 440px
        wide (the phone column).
      </p>
      <div className={styles.rows}>
        {headings.map((h) => {
          const t = (prop: string) => `var(--ds-typography-heading-${h}-${prop})`
          const v = (prop: string) => light[`ds-typography-heading-${h}-${prop}`]
          const phoneSize = phone[`ds-responsive-${h}-font-size`]
          const phoneLine = phone[`ds-responsive-${h}-line-height`] ?? v('line-height')
          return (
            <div key={h} className={styles.typeRow}>
              <span
                className={styles.typeSample}
                style={{
                  fontFamily: t('font-family'),
                  fontWeight: t('font-weight'),
                  fontSize: t('font-size'),
                  lineHeight: t('line-height'),
                }}
              >
                Heading {h.slice(1)}
              </span>
              <span className={styles.values}>
                <code className={styles.name}>heading-{h}</code>
                <span>
                  {v('font-size')} / {v('line-height')} · {v('font-weight')}
                </span>
                {phoneSize && (
                  <span>
                    Phone {phoneSize} / {phoneLine}
                  </span>
                )}
              </span>
            </div>
          )
        })}
      </div>

      <h3 className={styles.subhead}>Body</h3>
      <p>
        Four sizes, each with a regular, <code>-semibold</code> and <code>-link</code> style, as{' '}
        <code>--ds-typography-body-md-font-size</code> and so on.
      </p>
      <div className={styles.rows}>
        {bodyStyles.map((b) => {
          const t = (prop: string) => `var(--ds-typography-body-${b}-${prop})`
          const v = (prop: string) => light[`ds-typography-body-${b}-${prop}`]
          return (
            <div key={b} className={styles.typeRow}>
              <span
                className={styles.typeSample}
                style={{
                  fontFamily: t('font-family'),
                  fontWeight: t('font-weight'),
                  fontSize: t('font-size'),
                  lineHeight: t('line-height'),
                  textDecoration: b.endsWith('-link') ? 'underline' : undefined,
                }}
              >
                Pack light, travel far
              </span>
              <span className={styles.values}>
                <code className={styles.name}>body-{b}</code>
                <span>
                  {v('font-size')} / {v('line-height')} · {v('font-weight')}
                </span>
              </span>
            </div>
          )
        })}
      </div>

      {/* ── Spacing ────────────────────────────────────────────────────── */}
      <h2 id="spacing">Spacing</h2>
      <p>
        For padding and gaps. They come from the brand scale (<code>--ds-brand-scale-*</code>, 0 to
        64px).
      </p>
      <div className={styles.rows}>
        {withPrefix(light, 'ds-alias-spacing-').map((n) => (
          <div key={n} className={styles.scaleRow}>
            <code className={styles.name}>--{n}</code>
            <code className={styles.value}>{light[n]}</code>
            <span className={styles.bar} style={{ width: `var(--${n})` }} />
          </div>
        ))}
      </div>

      {/* ── Radius and borders ─────────────────────────────────────────── */}
      <h2 id="radius-and-borders">Radius and borders</h2>
      <h3 className={styles.subhead}>Border radius</h3>
      <div className={styles.tiles}>
        {withPrefix(light, 'ds-alias-border-radius-').map((n) => (
          <div key={n} className={styles.tile}>
            <span className={styles.radiusBox} style={{ borderRadius: `var(--${n})` }} />
            <code className={styles.name}>{short(n, 'ds-alias-border-radius-')}</code>
            <code className={styles.value}>{light[n]}</code>
          </div>
        ))}
      </div>
      <p className={styles.small}>
        Names: <code>--ds-alias-border-radius-*</code>. <code>round</code> (64px) makes pills and
        circles.
      </p>

      <h3 className={styles.subhead}>Border width</h3>
      <div className={styles.tiles}>
        {withPrefix(light, 'ds-alias-border-width-').map((n) => (
          <div key={n} className={styles.tile}>
            <span
              className={styles.widthBox}
              data-none={light[n] === '0px' || undefined}
              style={{ borderWidth: `var(--${n})` }}
            />
            <code className={styles.name}>{short(n, 'ds-alias-border-width-')}</code>
            <code className={styles.value}>{light[n]}</code>
          </div>
        ))}
      </div>
      <p className={styles.small}>
        Names: <code>--ds-alias-border-width-*</code>. Focus rings use <code>md</code>.
      </p>

      {/* ── Shadows ────────────────────────────────────────────────────── */}
      <h2 id="shadows">Shadows</h2>
      <p>
        Elevation is kept subtle: most surfaces are separated by borders, and the overlay shadows
        lift menus, popovers and dialogs off the page. Names: <code>--ds-effect-*</code>.
      </p>
      <div className={styles.tiles}>
        {withPrefix(light, 'ds-effect-').map((n) => (
          <div key={n} className={styles.tile}>
            <span className={styles.shadowBox} style={{ boxShadow: `var(--${n})` }} />
            <code className={styles.name}>{short(n, 'ds-effect-')}</code>
            <code className={styles.value}>{light[n]}</code>
          </div>
        ))}
      </div>

      {/* ── Motion ─────────────────────────────────────────────────────── */}
      <h2 id="motion">Motion</h2>
      <p>
        Durations and easing curves for every transition. When the user asks for reduced motion (
        <code>prefers-reduced-motion: reduce</code>), all {Object.keys(reducedMotion).length}{' '}
        durations become <code>0ms</code>, so changes happen instantly. Use them as{' '}
        <code>
          transition: opacity var(--ds-motion-duration-fast) var(--ds-motion-easing-standard)
        </code>
        .
      </p>
      <h3 className={styles.subhead}>Durations</h3>
      <MotionDemo
        kind="duration"
        rows={withPrefix(light, 'ds-motion-duration-').map((n) => ({
          name: n,
          value: light[n],
          note: notes[n]?.note,
        }))}
      />
      <h3 className={styles.subhead}>Easing</h3>
      <MotionDemo
        kind="easing"
        rows={withPrefix(light, 'ds-motion-easing-').map((n) => ({
          name: n,
          value: light[n],
          note: notes[n]?.note,
          bezier: notes[n]?.bezier,
        }))}
      />

      {/* ── Palette ────────────────────────────────────────────────────── */}
      <h2 id="palette">Palette</h2>
      <p>
        The colour scales behind the mapped tokens (<code>--ds-alias-primary-600</code> and so on).
        They are the same in both themes; the mapped tokens pick different steps for dark. Prefer
        mapped tokens in components, so themes keep working.
      </p>
      {PALETTES.map((p) => (
        <section key={p} aria-labelledby={`palette-${p}`} className={styles.palette}>
          <h3 id={`palette-${p}`} className={styles.subhead}>
            {p[0].toUpperCase() + p.slice(1)}
          </h3>
          <div className={styles.strip}>
            {withPrefix(light, `ds-alias-${p}-`)
              .filter((n) => /^\d+$/.test(short(n, `ds-alias-${p}-`)))
              .map((n) => (
                <div key={n} className={styles.step}>
                  <span className={styles.stepSwatch} style={{ background: `var(--${n})` }} />
                  <code className={styles.name}>{short(n, `ds-alias-${p}-`)}</code>
                  <code className={styles.value}>{light[n]}</code>
                </div>
              ))}
          </div>
        </section>
      ))}
    </article>
  )
}

function Ratio({ value, min }: { value: number; min: number }) {
  const ok = value >= min
  return (
    <span className={ok ? styles.pass : styles.fail}>
      {value.toFixed(2)}:1 {ok ? 'AA' : 'below AA'}
    </span>
  )
}
