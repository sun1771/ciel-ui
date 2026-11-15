'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationMenuGroup, NavigationMenuItem, NavigationPanel } from '@acme/ui'
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

/** The docs navigation, built from the library's own NavigationPanel. */
export function Sidebar() {
  const pathname = usePathname()

  const group = (label: string, links: { href: string; label: string }[]) => (
    <NavigationMenuGroup key={label} label={label} gap="xxs" className={styles.group}>
      {links.map((link) => (
        <NavigationMenuItem
          key={link.href}
          href={link.href}
          size="sm"
          isSelected={pathname === link.href}
        >
          {link.label}
        </NavigationMenuItem>
      ))}
    </NavigationMenuGroup>
  )

  return (
    <NavigationPanel aria-label="Documentation" linkComponent={Link} className={styles.sidebar}>
      <div className={styles.groups}>
        {group('Guides', GUIDES)}
        {CATEGORIES.map((cat) =>
          group(
            cat,
            COMPONENTS.filter((c) => c.category === cat).map((c) => ({
              href: `/docs/components/${c.slug}`,
              label: c.name,
            }))
          )
        )}
        {group('Recipes', RECIPES)}
      </div>
    </NavigationPanel>
  )
}
