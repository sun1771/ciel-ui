'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import type { NavigationMenuItemProps } from './types'
import { useNavigationPanel } from './NavigationPanel'
import styles from './NavigationPanel.module.css'

/**
 * NavigationMenuItem
 * A single clickable item (Type=regular) inside a NavigationPanel. Shows an
 * icon and an optional label. When the parent panel is collapsed it renders as
 * a square icon-only button (the label is hidden). The selected state is a
 * filled blue pill.
 *
 * @see design-system/figma.md → NavigationPanel
 * @see docs/components.md for usage examples
 */
export const NavigationMenuItem = React.forwardRef<
  HTMLButtonElement,
  NavigationMenuItemProps
>(
  (
    {
      isSelected = false,
      disabled = false,
      icon,
      children,
      className,
      onClick,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const { isExpanded } = useNavigationPanel()

    return (
      <button
        ref={ref}
        type="button"
        role="menuitem"
        disabled={disabled}
        aria-disabled={disabled || undefined}
        aria-current={isSelected ? 'page' : undefined}
        onClick={onClick}
        onKeyDown={onKeyDown}
        className={cn(
          styles.item,
          isSelected && styles.selected,
          disabled && styles.disabled,
          !isExpanded && styles.itemCollapsed,
          className
        )}
        {...props}
      >
        {icon && (
          <span className={styles.itemIcon} aria-hidden="true">
            {icon}
          </span>
        )}
        {children && <span className={styles.itemText}>{children}</span>}
      </button>
    )
  }
)

NavigationMenuItem.displayName = 'NavigationMenuItem'
