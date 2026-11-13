'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { ChevronDown } from '@acme/icons'
import { ChevronTop } from '@acme/icons'
import styles from './SelectButton.module.css'
import type { SelectButtonProps } from './types'

/**
 * SelectButton — a toggle button with a trailing chevron that indicates open/closed state.
 * Chevron points down when isSelected=false (closed) and up when isSelected=true (open).
 * isSelected is controlled by the parent; the parent is also responsible for rendering
 * the dropdown (Menu) when isSelected=true.
 *
 * @see design-system/figma.md → Select Button (node 1748:7209)
 * @see docs/components.md for usage examples
 */
export const SelectButton = React.forwardRef<HTMLButtonElement, SelectButtonProps>(
  function SelectButton(
    {
      variant = 'default',
      size = 'lg',
      isSelected = false,
      disabled = false,
      className,
      children,
      onClick,
      ...rest
    },
    ref
  ) {
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
        aria-haspopup="listbox"
        onClick={handleClick}
        className={cn(
          styles.base,
          variant === 'default' && styles.variantDefault,
          variant === 'outline' && styles.variantOutline,
          variant === 'transparent' && styles.variantTransparent,
          size === 'lg' && styles.sizeLg,
          size === 'sm' && styles.sizeSm,
          disabled && styles.disabled,
          className
        )}
        {...rest}
      >
        {children}
        <span className={styles.chevron} aria-hidden="true">
          {isSelected ? <ChevronTop size={iconSize} /> : <ChevronDown size={iconSize} />}
        </span>
      </button>
    )
  }
)

SelectButton.displayName = 'SelectButton'
