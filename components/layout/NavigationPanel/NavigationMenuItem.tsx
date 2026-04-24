'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import type { NavigationMenuItemProps } from './types'
import styles from './NavigationPanel.module.css'

/**
 * NavigationMenuItem
 * A single clickable item inside a NavigationPanel. Shows an icon and an
 * optional label (hidden automatically when the parent panel is collapsed).
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
          className
        )}
        {...props}
      >
        {icon && (
          <span className={styles.itemIcon} aria-hidden="true">
            {icon}
          </span>
        )}
        {children && (
          <span className={styles.itemText}>{children}</span>
        )}
      </button>
    )
  }
)

NavigationMenuItem.displayName = 'NavigationMenuItem'
