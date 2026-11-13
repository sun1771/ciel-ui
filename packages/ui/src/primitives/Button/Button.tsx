'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './Button.module.css'
import type { ButtonProps } from './types'

/**
 * Standard horizontal button. Supports three visual variants (default, outline,
 * transparent), two sizes (lg, sm), optional left/right icon slots, and a loading
 * state that replaces the icon with a spinner.
 *
 * Figma: PRIMITIVES / Button (node 44:1144)
 * Token source: components/ui/Button/Button.module.css
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = 'default',
      size = 'lg',
      disabled = false,
      isLoading = false,
      className,
      iconLeft,
      iconRight,
      children,
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
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        onClick={handleClick}
        className={cn(
          styles.base,
          variant === 'default' && styles.variantDefault,
          variant === 'outline' && styles.variantOutline,
          variant === 'transparent' && styles.variantTransparent,
          size === 'lg' && styles.sizeLg,
          size === 'sm' && styles.sizeSm,
          isLoading && styles.loading,
          isDisabled && styles.disabled,
          className,
        )}
        {...rest}
      >
        {isLoading ? (
          <span className={styles.spinner} aria-hidden="true" />
        ) : (
          iconLeft && (
            <span className={styles.iconLeft} aria-hidden="true">
              {iconLeft}
            </span>
          )
        )}

        {children}

        {!isLoading && iconRight && (
          <span className={styles.iconRight} aria-hidden="true">
            {iconRight}
          </span>
        )}
      </button>
    )
  },
)
