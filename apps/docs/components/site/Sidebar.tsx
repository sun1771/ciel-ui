'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Hamburger, X } from '@acme/icons'
import {
  Button,
  ButtonIcon,
  NavigationMenuGroup,
  NavigationMenuItem,
  NavigationPanel,
} from '@acme/ui'
import { CATEGORIES, COMPONENTS } from '@/content/registry'
import styles from './Sidebar.module.css'

type NavLink = { href: string; label: string }

const GROUPS: { label: string; links: NavLink[] }[] = [
  {
    label: 'Guides',
    links: [
      { href: '/docs/getting-started', label: 'Getting started' },
      { href: '/docs/theming', label: 'Theming' },
      { href: '/docs/accessibility', label: 'Accessibility' },
      { href: '/docs/tokens', label: 'Design tokens' },
      { href: '/docs/icons', label: 'Icons' },
    ],
  },
  ...CATEGORIES.map((cat) => ({
    label: cat,
    links: COMPONENTS.filter((c) => c.category === cat).map((c) => ({
      href: `/docs/components/${c.slug}`,
      label: c.name,
    })),
  })),
  { label: 'Recipes', links: [{ href: '/docs/recipes/travel', label: 'Travel booking' }] },
]

function DocsNav({ pathname, className }: { pathname: string; className?: string }) {
  return (
    <NavigationPanel aria-label="Documentation" linkComponent={Link} className={className}>
      <div className={styles.groups}>
        {GROUPS.map((group) => (
          <NavigationMenuGroup key={group.label} label={group.label} gap="xxs">
            {group.links.map((link) => (
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
        ))}
      </div>
    </NavigationPanel>
  )
}

/**
 * The docs navigation, built from the library's own NavigationPanel.
 * - Wide screens: a sticky column that scrolls on its own.
 * - Narrow screens: a bar with a Menu button that opens the same navigation
 *   in a drawer (a modal <dialog>: focus stays inside, Escape closes it).
 *   Picking a page closes the drawer, so the page gets the whole screen.
 */
export function Sidebar() {
  const pathname = usePathname()
  const dialogRef = React.useRef<HTMLDialogElement>(null)
  const current = GROUPS.flatMap((g) => g.links).find((l) => l.href === pathname)

  // Close the drawer when the page changes.
  React.useEffect(() => {
    dialogRef.current?.close()
  }, [pathname])

  return (
    <>
      <DocsNav pathname={pathname} className={styles.sidebar} />

      <div className={styles.mobileBar}>
        <Button
          variant="transparent"
          size="sm"
          iconLeft={<Hamburger size={20} />}
          aria-haspopup="dialog"
          onClick={() => dialogRef.current?.showModal()}
        >
          Menu
        </Button>
        {current && <span className={styles.current}>{current.label}</span>}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Documentation menu"
        className={styles.drawer}
        // A click on the backdrop lands on the <dialog> itself; a click on a
        // link (even the current page's) also closes the drawer.
        onClick={(e) => {
          const onLink = (e.target as Element).closest('a')
          if (e.target === e.currentTarget || onLink) e.currentTarget.close()
        }}
      >
        <div className={styles.drawerHeader}>
          <ButtonIcon
            label="Close menu"
            variant="transparent"
            icon={<X size={20} />}
            onClick={() => dialogRef.current?.close()}
          />
        </div>
        <DocsNav pathname={pathname} className={styles.drawerNav} />
      </dialog>
    </>
  )
}
