import type { ComponentType } from 'react'
import { CodeBlock } from './CodeBlock'
import styles from './Example.module.css'

/** A live demo with its source code underneath. */
export function Example({
  title,
  description,
  Component,
  source,
}: {
  title: string
  description?: string
  Component: ComponentType
  source: string
}) {
  return (
    <section className={styles.example}>
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{renderInlineCode(description)}</p>}
      <div className={styles.preview}>
        <Component />
      </div>
      <details className={styles.source}>
        <summary>Show code</summary>
        <CodeBlock code={source} />
      </details>
    </section>
  )
}

/** Render `backticked` spans as <code>. */
export function renderInlineCode(text: string) {
  return text
    .split(/(`[^`]+`)/g)
    .map((part, i) => (part.startsWith('`') ? <code key={i}>{part.slice(1, -1)}</code> : part))
}
