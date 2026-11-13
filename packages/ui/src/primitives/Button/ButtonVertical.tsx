'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './Button.module.css'
import type { ButtonVerticalProps } from './types'

/**
 * Vertical layout button. Icon(s) stack above and/or below the label in a
 * column direction. Supports an optional secondary support text line below
 * the label. Shares variant, size, and state logic with Button.
 *
 * Figma: PRIMITIVES / Button Vertical (node 1542:4695)
 * Token source: components/ui/Button/Button.module.css (.vertical modifier)
 */
export const ButtonVertical = React.forwardRef<HTMLButtonElement, ButtonVerticalProps>(
  function ButtonVertical(
    {
      variant = 'default',
      size = 'lg',
      disabled = false,
      isLoading = false,
      className,
      iconTop,
      iconBottom,
      supportText,
      children,
      onClick,
      ...rest
    },
    ref
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
          styles.vertical,
          variant === 'default' && styles.variantDefault,
          variant === 'outline' && styles.variantOutline,
          variant === 'transparent' && styles.variantTransparent,
          size === 'lg' && styles.sizeLg,
          size === 'sm' && styles.sizeSm,
          isLoading && styles.loading,
          isDisabled && styles.disabled,
          className
        )}
        {...rest}
      >
        {isLoading ? (
          <span className={styles.spinner} aria-hidden="true" />
        ) : (
          iconTop && (
            <span className={styles.iconTop} aria-hidden="true">
              {iconTop}
            </span>
          )
        )}

        <span>{children}</span>

        {supportText && <span className={styles.supportText}>{supportText}</span>}

        {!isLoading && iconBottom && (
          <span className={styles.iconBottom} aria-hidden="true">
            {iconBottom}
          </span>
        )}
      </button>
    )
  }
)
