'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './Menu.module.css'
import { Check } from '@acme/icons'
import { MenuContext } from './MenuContext'
import type { MenuItemProps } from './types'

/**
 * MenuItem
 * An interactive row inside a Menu. Supports selected and disabled states,
 * optional left and right icon slots, and two sizes (lg, sm).
 *
 * With a `value` inside a Menu, the Menu decides whether it is selected and a
 * click selects it (role="menuitemradio", aria-checked, a tick on the right).
 * Hover and focus are CSS pseudo-classes — no JS props needed.
 * Figma: PRIMITIVES / Menu — .menuitem node 282:1143
 *
 * @see app/design-system/figma.md for Figma mapping
 * @see app/docs/components.md for usage examples
 */
export function MenuItem({
  size = 'lg',
  value,
  isSelected: isSelectedProp,
  disabled = false,
  className,
  iconLeft,
  iconRight,
  children,
  onClick,
  ref,
  ...rest
}: MenuItemProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const menu = React.useContext(MenuContext)
  const selectable = value !== undefined && menu !== null
  const isSelected = isSelectedProp ?? (selectable && menu.value === value)

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (disabled) return
    onClick?.(e)
    if (selectable && !e.defaultPrevented) menu.select(value)
  }

  return (
    <button
      ref={ref}
      type="button"
      role={selectable ? 'menuitemradio' : 'menuitem'}
      aria-checked={selectable ? isSelected : undefined}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={handleClick}
      className={cn(
        styles.item,
        size === 'lg' && styles.sizeLg,
        size === 'sm' && styles.sizeSm,
        isSelected && styles.selected,
        className
      )}
      {...rest}
    >
      {iconLeft && (
        <span className={styles.iconLeft} aria-hidden="true">
          {iconLeft}
        </span>
      )}

      <span className={styles.label}>{children}</span>

      {(iconRight || selectable) && (
        <span className={cn(styles.iconRight, selectable && styles.tick)} aria-hidden="true">
          {iconRight ?? <Check size={size === 'sm' ? 16 : 20} />}
        </span>
      )}
    </button>
  )
}

MenuItem.displayName = 'MenuItem'
