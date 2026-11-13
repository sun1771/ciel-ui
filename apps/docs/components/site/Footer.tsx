import { site } from '@/content/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.credit}>
          Designed &amp; built by <strong>{site.author.name}</strong>
        </p>
        <ul className={styles.links}>
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
