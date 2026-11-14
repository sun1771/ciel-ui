'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CATEGORIES, COMPONENTS } from '@/content/registry'
import styles from './Sidebar.module.css'

const GUIDES = [
  { href: '/docs/getting-started', label: 'Getting started' },
  { href: '/docs/theming', label: 'Theming' },
  { href: '/docs/accessibility', label: 'Accessibility' },
  { href: '/docs/tokens', label: 'Design tokens' },
  { href: '/docs/icons', label: 'Icons' },
]

const RECIPES = [{ href: '/docs/recipes/travel', label: 'Travel booking' }]

export function Sidebar() {
  const pathname = usePathname()
  const item = (href: string, label: string) => (
    <li key={href}>
      <Link
        href={href}
        aria-current={pathname === href ? 'page' : undefined}
        className={styles.link}
      >
        {label}
      </Link>
    </li>
  )

  return (
    <nav aria-label="Documentation" className={styles.sidebar}>
      <p className={styles.heading}>Guides</p>
      <ul className={styles.list}>{GUIDES.map((g) => item(g.href, g.label))}</ul>
      {CATEGORIES.map((cat) => (
        <div key={cat}>
          <p className={styles.heading}>{cat}</p>
          <ul className={styles.list}>
            {COMPONENTS.filter((c) => c.category === cat).map((c) =>
              item(`/docs/components/${c.slug}`, c.name)
            )}
          </ul>
        </div>
      ))}
      <p className={styles.heading}>Recipes</p>
      <ul className={styles.list}>{RECIPES.map((r) => item(r.href, r.label))}</ul>
    </nav>
  )
}
