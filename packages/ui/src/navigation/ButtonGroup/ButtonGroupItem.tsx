'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './ButtonGroup.module.css'
import type { ButtonGroupItemProps } from './types'

/**
 * ButtonGroupItem
 * Individual button within a ButtonGroup. Supports selected, disabled states
 * and optional icon + label slots. When icon-only, provide aria-label.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export function ButtonGroupItem({
  isSelected = false,
  disabled = false,
  icon,
  children,
  className,
  ref,
  ...props
}: ButtonGroupItemProps & { ref?: React.Ref<HTMLButtonElement> }) {
  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      aria-pressed={isSelected}
      className={cn(
        styles.item,
        isSelected && styles.selected,
        disabled && styles.disabled,
        className
      )}
      {...props}
    >
      {icon && (
        <span className={styles.iconSlot} aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </button>
  )
}

ButtonGroupItem.displayName = 'ButtonGroupItem'
