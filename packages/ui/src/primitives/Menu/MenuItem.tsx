'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './Menu.module.css'
import type { MenuItemProps } from './types'

/**
 * MenuItem
 * An interactive row inside a Menu. Supports selected and disabled states,
 * optional left and right icon slots, and two sizes (lg, sm).
 *
 * Hover and focus are CSS pseudo-classes — no JS props needed.
 * Figma: PRIMITIVES / Menu — .menuitem node 282:1143
 *
 * @see app/design-system/figma.md for Figma mapping
 * @see app/docs/components.md for usage examples
 */
export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  function MenuItem(
    {
      size = 'lg',
      isSelected = false,
      disabled = false,
      className,
      iconLeft,
      iconRight,
      children,
      onClick,
      ...rest
    },
    ref,
  ) {
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      if (disabled) return
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        type="button"
        role="menuitem"
        disabled={disabled}
        aria-disabled={disabled}
        onClick={handleClick}
        className={cn(
          styles.item,
          size === 'lg' && styles.sizeLg,
          size === 'sm' && styles.sizeSm,
          isSelected && styles.selected,
          className,
        )}
        {...rest}
      >
        {iconLeft && (
          <span className={styles.iconLeft} aria-hidden="true">
            {iconLeft}
          </span>
        )}

        <span className={styles.label}>{children}</span>

        {iconRight && (
          <span className={styles.iconRight} aria-hidden="true">
            {iconRight}
          </span>
        )}
      </button>
    )
  },
)

MenuItem.displayName = 'MenuItem'
