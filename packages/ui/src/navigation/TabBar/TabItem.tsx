'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './TabBar.module.css'
import { TabBarContext } from './TabBarContext'
import type { TabItemProps } from './types'

/**
 * TabItem
 * A single tab button within a TabBar.
 * Implements role="tab" with roving tabindex and full ARIA compliance.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export function TabItem({
  value,
  isSelected: isSelectedProp,
  disabled = false,
  icon,
  children,
  className,
  onClick,
  ref,
  ...props
}: TabItemProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const bar = React.useContext(TabBarContext)
  // With a `value`, the TabBar decides; an explicit isSelected still wins.
  const isSelected = isSelectedProp ?? (value !== undefined && bar?.value === value)

  return (
    <button
      ref={ref}
      role="tab"
      aria-selected={isSelected}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      tabIndex={isSelected ? 0 : -1}
      className={cn(
        styles.tabItem,
        isSelected && styles.selected,
        disabled && styles.disabled,
        className
      )}
      onClick={
        disabled
          ? undefined
          : (e) => {
              onClick?.(e)
              if (!e.defaultPrevented && value !== undefined) bar?.select(value)
            }
      }
      {...props}
    >
      {icon && (
        <span className={styles.iconWrapper} aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </button>
  )
}

TabItem.displayName = 'TabItem'
