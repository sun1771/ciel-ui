'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { ChevronDown } from '@acme/icons'
import styles from './SelectButton.module.css'
import type { SelectButtonProps } from './types'

/**
 * SelectButton — the trigger of a dropdown: a button with a trailing chevron
 * that turns up while the dropdown is open (`isSelected`).
 *
 * It only draws the trigger. For a working dropdown, use SelectMenu (this
 * button plus a Menu of options), or render your own panel and set
 * `isSelected` while it is open.
 *
 * @see design-system/figma.md → Select Button (node 1748:7209)
 * @see docs/components.md for usage examples
 */
export function SelectButton({
  variant = 'default',
  size = 'lg',
  isSelected = false,
  disabled = false,
  className,
  children,
  onClick,
  ref,
  ...rest
}: SelectButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const iconSize = size === 'sm' ? 16 : 20

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (disabled) return
    onClick?.(e)
  }

  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      aria-disabled={disabled}
      aria-expanded={isSelected}
      aria-haspopup="menu"
      onClick={handleClick}
      className={cn(
        styles.base,
        variant === 'default' && styles.variantDefault,
        variant === 'outline' && styles.variantOutline,
        variant === 'transparent' && styles.variantTransparent,
        size === 'lg' && styles.sizeLg,
        size === 'sm' && styles.sizeSm,
        disabled && styles.disabled,
        isSelected && styles.open,
        className
      )}
      {...rest}
    >
      {children}
      <span className={styles.chevron} aria-hidden="true">
        <ChevronDown size={iconSize} />
      </span>
    </button>
  )
}

SelectButton.displayName = 'SelectButton'
