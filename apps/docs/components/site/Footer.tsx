import { site } from '@/content/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <ul className={`${styles.links} ${styles.project}`} aria-label={site.name}>
          {site.storybookUrl && (
            <li>
              <a href={site.storybookUrl}>Storybook</a>
            </li>
          )}
          <li>
            <a href={site.repoUrl}>Source code</a>
          </li>
          <li>
            <a href={`https://www.npmjs.com/package/${site.packages.ui}`}>npm</a>
          </li>
        </ul>
        <p className={styles.credit}>
          Designed &amp; built by <strong>{site.author.name}</strong>
        </p>
        <ul className={styles.links} aria-label={site.author.name}>
          {site.author.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} rel="me noopener" target="_blank">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
