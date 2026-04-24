'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import type { NavigationPanelProps } from './types'
import styles from './NavigationPanel.module.css'

/**
 * NavigationPanel
 * A collapsible vertical sidebar navigation container. When expanded, items
 * show both icon and label. When collapsed, only icons are visible.
 *
 * Render NavigationMenuItem children inside NavigationPanel.
 * Use NavigationMenuGroup to separate groups of items (top vs bottom).
 *
 * @see design-system/figma.md → NavigationPanel
 * @see docs/components.md for usage examples
 */
export const NavigationPanel = React.forwardRef<
  HTMLElement,
  NavigationPanelProps
>(
  (
    {
      isExpanded = true,
      children,
      className,
      'aria-label': ariaLabel = 'Main navigation',
      ...props
    },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={cn(
          styles.panel,
          isExpanded ? styles.panelExpanded : styles.panelCollapsed,
          className
        )}
        {...props}
      >
        {children}
      </nav>
    )
  }
)

NavigationPanel.displayName = 'NavigationPanel'

/**
 * NavigationMenuGroup
 * Groups a set of NavigationMenuItems within a NavigationPanel.
 * The panel uses justify-between so groups at top and bottom are
 * pushed to opposite ends.
 */
export const NavigationMenuGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="group"
      className={cn(styles.menuGroup, className)}
      {...props}
    >
      {children}
    </div>
  )
})

NavigationMenuGroup.displayName = 'NavigationMenuGroup'
