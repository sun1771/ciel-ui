import Link from 'next/link'
import { Sparkle } from '@acme/icons'
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
          {site.storybookUrl && <a href={site.storybookUrl}>Storybook</a>}
          <a href={site.repoUrl}>GitHub</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
