import props from '@/generated/props.json'
import { renderInlineCode } from './Example'
import styles from './PropsTable.module.css'

interface PropDoc {
  name: string
  type: string
  required: boolean
  defaultValue: string | null
  description: string
}
const PROPS = props as Record<string, { description: string; props: PropDoc[] }>

/** Props of one component, generated from its TypeScript types and JSDoc. */
export function PropsTable({ component }: { component: string }) {
  const doc = PROPS[component]
  if (!doc) return null
  return (
    <section className={styles.section}>
      <h3 className={styles.name}>
        <code>{component}</code>
      </h3>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Prop</th>
              <th scope="col">Type</th>
              <th scope="col">Default</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {doc.props.map((p) => (
              <tr key={p.name}>
                <th scope="row">
                  <code>{p.name}</code>
                  {p.required && <span className={styles.required}> required</span>}
                </th>
                <td>
                  <code className={styles.type}>{p.type}</code>
                </td>
                <td>{p.defaultValue ? <code>{p.defaultValue}</code> : '—'}</td>
                <td>{renderInlineCode(p.description)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.note}>
        Plus the native attributes of the root element (<code>className</code>, <code>aria-*</code>,
        event handlers…).
      </p>
    </section>
  )
}
