import Link from 'next/link'
import { COMPONENTS } from '@/content/registry'
import { site } from '@/content/site'
import { CodeBlock } from '@/components/site/CodeBlock'
import { Showcase } from './Showcase'
import styles from './landing.module.css'

const FEATURES = [
  {
    title: 'Accessible by default',
    body: 'WCAG 2.2 AA in light and dark themes. Keyboard patterns, focus management and accessible names are built in, and checked by axe on every story in a real browser.',
  },
  {
    title: 'Themeable with tokens',
    body: 'Every colour, font and spacing value is a CSS custom property. Switch to dark mode with one attribute, or rebrand by overriding a few semantic tokens.',
  },
  {
    title: 'Composable',
    body: 'Small parts instead of giant prop lists. Build any card from Card, CardHeader and CardFooter, or any picker from Popover and FieldPicker.',
  },
  {
    title: 'Ready for Server Components',
    body: 'Interactive components ship with "use client" and static ones don’t. One module per component, so unused components never reach the browser.',
  },
]

const STACK = [
  'React 19',
  'TypeScript',
  'CSS Modules + design tokens',
  'Vite library mode',
  'Storybook 10',
  'Vitest + Playwright',
  'axe-core',
  'Turborepo',
]

export default function Home() {
  return (
    <main id="main">
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>{site.name}</h1>
          <p className={styles.heroTagline}>{site.tagline}</p>
          <p className={styles.heroBody}>
            {COMPONENTS.length} components, 47 icons and a token-based theme, tested in light and
            dark mode with 340 automated tests.
          </p>
          <div className={styles.ctas}>
            <Link href="/docs/getting-started" className={styles.primary}>
              Get started
            </Link>
            <Link href="/docs" className={styles.secondary}>
              Browse components
            </Link>
          </div>
        </div>
        <div className={styles.install}>
          <CodeBlock
            code={`npm install ${site.packages.ui} ${site.packages.icons} ${site.packages.tokens}`}
            lang="bash"
          />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="live">
        <h2 id="live" className={styles.sectionTitle}>
          Live, not screenshots
        </h2>
        <p className={styles.sectionLead}>
          Everything below is Ciel UI. Click around, use the keyboard, or switch the theme.
        </p>
        <Showcase />
      </section>

      <section className={styles.section} aria-labelledby="why">
        <h2 id="why" className={styles.sectionTitle}>
          Why Ciel UI
        </h2>
        <ul className={styles.features}>
          {FEATURES.map((f) => (
            <li key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="about">
        <h2 id="about" className={styles.sectionTitle}>
          About
        </h2>
        <div className={styles.about}>
          <p>
            Ciel UI started as the design system of a travel product. I turned it into a standalone
            library: I separated product-specific parts into recipes, made every piece of built-in
            text localisable, fixed colour contrast across both themes, and added the packaging and
            tests a real library needs.
          </p>
          <p>
            Designed &amp; built by <strong>{site.author.name}</strong>.{' '}
            {site.author.links.map((l, i) => (
              <span key={l.href}>
                {i > 0 && ' · '}
                <a href={l.href} rel="me noopener" target="_blank">
                  {l.label}
                </a>
              </span>
            ))}
          </p>
          <ul className={styles.stack} aria-label="Built with">
            {STACK.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
