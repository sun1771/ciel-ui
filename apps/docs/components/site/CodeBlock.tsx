import { codeToHtml } from 'shiki'
import { CopyButton } from './CopyButton'
import styles from './CodeBlock.module.css'

/** Syntax-highlighted code, rendered on the server (no client JS for highlighting). */
export async function CodeBlock({ code, lang = 'tsx' }: { code: string; lang?: string }) {
  const html = await codeToHtml(code, {
    lang,
    // High-contrast variants: every token colour meets 4.5:1 on our code background.
    themes: { light: 'github-light-high-contrast', dark: 'github-dark-high-contrast' },
    defaultColor: 'light',
  })
  return (
    <div className={styles.block}>
      <div className={styles.copy}>
        <CopyButton text={code} />
      </div>
      <div className={styles.code} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
