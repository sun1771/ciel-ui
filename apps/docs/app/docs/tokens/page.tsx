import type { Metadata } from 'next'
import { contrast, readTokens } from '@/content/tokens'
import styles from './tokens.module.css'
import page from '../page.module.css'

export const metadata: Metadata = { title: 'Design tokens' }

const GROUPS = [
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
    note: 'Outlines. `border-input`, `border-input-error` and `border-focus` meet 3:1.',
  },
]

// Exempt from contrast (disabled UI) or used on coloured fills, not the page.
const SKIP_CHECK = /disabled|on-action/

export default function TokensPage() {
  const { light, dark } = readTokens()
  const names = Object.keys(light)

  return (
    <article className={page.article}>
      <p className={page.eyebrow}>Guides</p>
      <h1 className={page.title}>Design tokens</h1>
      <p className={page.lead}>
        Semantic (“mapped”) colour tokens with their light and dark values. Swatches use the live
        CSS variables, so switch the theme to see them change.
      </p>

      {GROUPS.map((g) => (
        <section key={g.prefix}>
          <h2>{g.title}</h2>
          <p>{g.note}</p>
          <div className={styles.grid}>
            {names
              .filter((n) => n.startsWith(g.prefix) && /^#/.test(light[n]))
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
