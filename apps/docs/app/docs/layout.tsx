import { Sidebar } from '@/components/site/Sidebar'
import styles from './docs.module.css'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <aside className={styles.aside}>
        <Sidebar />
      </aside>
      <main id="main" className={styles.main}>
        {children}
      </main>
    </div>
  )
}
