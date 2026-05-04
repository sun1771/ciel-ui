'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import styles from './Button.module.css'
import type { ButtonIconProps } from './types'

/**
 * Icon-only button. No visible text — `label` is required and becomes the
 * button's aria-label for screen readers. Never omit it.
 *
 * Icon sizing convention (pass size to your icon component):
 *   sm → 16px   lg → 20px
 *
 * TODO: Add Tooltip showing `label` on hover once a Tooltip component
 * exists in components/ui/.
 *
 * Figma: PRIMITIVES / Button Icon (node 852:517)
 * Token source: components/ui/Button/Button.module.css (.iconOnly modifier)
 */
export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  function ButtonIcon(
    {
      variant = 'default',
      size = 'lg',
      shape = 'default',
      disabled = false,
      isLoading = false,
      label,
      icon,
      className,
      onClick,
      ...rest
    },
    ref,
  ) {
    const isDisabled = disabled || isLoading

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      if (isDisabled) return
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        type="button"
        aria-label={label}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        onClick={handleClick}
        className={cn(
          styles.base,
          styles.iconOnly,
          variant === 'default' && styles.variantDefault,
          variant === 'outline' && styles.variantOutline,
          variant === 'transparent' && styles.variantTransparent,
          size === 'lg' && styles.sizeLg,
          size === 'sm' && styles.sizeSm,
          shape === 'round' && styles.shapeRound,
          isLoading && styles.loading,
          isDisabled && styles.disabled,
          className,
        )}
        {...rest}
      >
        {isLoading ? (
          <span className={styles.spinner} aria-hidden="true" />
        ) : (
          <span aria-hidden="true">{icon}</span>
        )}
      </button>
    )
  },
)
