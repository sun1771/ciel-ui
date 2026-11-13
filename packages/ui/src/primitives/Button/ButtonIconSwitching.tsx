'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './Button.module.css'
import type { ButtonIconSwitchingProps } from './types'

/**
 * Icon-only button whose icon swaps on hover/focus. Built on the transparent
 * ButtonIcon base. Used to combine two controls into one — e.g. a collapsed
 * navigation logo that reveals an expand arrow on hover.
 *
 * Both icons are rendered and stacked; the swap is CSS-driven (no JS state),
 * so it stays in sync with `:hover` / `:focus-visible` and never shifts layout.
 *
 * Icon sizing convention (pass size to your icon components):
 *   sm → 16px   lg → 20px
 *
 * `label` is required and becomes the button's aria-label. Never omit it.
 *
 * Figma: PRIMITIVES / Button Icon Hover Switching (node 3814:5034)
 * Token source: components/primitives/Button/Button.module.css
 */
export const ButtonIconSwitching = React.forwardRef<HTMLButtonElement, ButtonIconSwitchingProps>(
  function ButtonIconSwitching(
    {
      variant = 'transparent',
      size = 'lg',
      shape = 'default',
      disabled = false,
      isLoading = false,
      label,
      icon,
      hoverIcon,
      className,
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
          className
        )}
        {...rest}
      >
        {isLoading ? (
          <span className={styles.spinner} aria-hidden="true" />
        ) : (
          <span className={styles.switchIconWrap} aria-hidden="true">
            <span className={cn(styles.switchIcon, styles.switchIconDefault)}>{icon}</span>
            <span className={cn(styles.switchIcon, styles.switchIconHover)}>{hoverIcon}</span>
          </span>
        )}
      </button>
    )
  }
)
