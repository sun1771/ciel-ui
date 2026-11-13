import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './landing.module.css'

export const metadata: Metadata = { title: 'Page not found' }

// Rendered inside the root layout, so it keeps the header, footer and the
// skip link (which targets #main).
export default function NotFound() {
  return (
    <main id="main">
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Page not found</h1>
          <p className={styles.heroBody}>
            This page doesn’t exist. It may have moved, or the link may be mistyped.
          </p>
          <div className={styles.ctas}>
            <Link href="/docs" className={styles.primary}>
              Browse components
            </Link>
            <Link href="/" className={styles.secondary}>
              Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
