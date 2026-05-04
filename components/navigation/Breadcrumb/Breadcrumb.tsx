'use client'

import React from 'react'
import { ChevronRight } from '@/icons'
import { cn } from '@/lib/utils'
import styles from './Breadcrumb.module.css'
import type { BreadcrumbProps } from './types'

/**
 * Breadcrumb
 * Navigation trail showing the user's location in a hierarchy.
 * Last item is the current page (non-interactive, underlined).
 * All preceding items are links; optional icon per item.
 *
 * @see design-system/figma.md for Figma mapping (node 814:1221)
 * @see docs/components.md for usage examples
 */
export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ items, className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn(styles.nav, className)}
        {...props}
      >
        <ol className={styles.list} role="list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={index} className={styles.item}>
                {item.icon && (
                  <span aria-hidden="true" className={styles.iconSlot}>
                    {item.icon}
                  </span>
                )}

                {isLast ? (
                  <span className={styles.current} aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.href}
                    className={styles.link}
                  >
                    {item.label}
                  </a>
                )}

                {!isLast && (
                  <span aria-hidden="true" className={styles.separator}>
                    <ChevronRight size={20} />
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    )
  }
)

Breadcrumb.displayName = 'Breadcrumb'
