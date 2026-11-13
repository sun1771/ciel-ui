import Link from 'next/link'
import type { Metadata } from 'next'
import { CATEGORIES, COMPONENTS } from '@/content/registry'
import styles from './page.module.css'

export const metadata: Metadata = { title: 'Components' }

export default function ComponentsIndex() {
  return (
    <article className={styles.article}>
      <p className={styles.eyebrow}>Components</p>
      <h1 className={styles.title}>All components</h1>
      <p className={styles.lead}>
        {COMPONENTS.length} documented components, each with live examples, accessibility notes and
        props tables generated from the TypeScript types.
      </p>
      {CATEGORIES.map((cat) => (
        <section key={cat}>
          <h2>{cat}</h2>
          <div className={styles.grid}>
            {COMPONENTS.filter((c) => c.category === cat).map((c) => (
              <Link key={c.slug} href={`/docs/components/${c.slug}`} className={styles.cardLink}>
                <strong>{c.name}</strong>
                <span>{c.description}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </article>
  )
}
