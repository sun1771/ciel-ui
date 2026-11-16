import Link from 'next/link'
import { Sparkle } from '@cielui/icons'
import { site } from '@/content/site'
import { ThemeToggle } from './ThemeToggle'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <Sparkle size={24} aria-hidden="true" />
          <span>{site.name}</span>
        </Link>
        <nav aria-label="Main" className={styles.nav}>
          <Link href="/docs/getting-started">Docs</Link>
          <Link href="/docs">Components</Link>
          {/* On narrow phones these two move to the footer (see CSS). */}
          {site.storybookUrl && (
            <a href={site.storybookUrl} className={styles.wide}>
              Storybook
            </a>
          )}
          <a href={site.repoUrl} className={styles.wide}>
            GitHub
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
