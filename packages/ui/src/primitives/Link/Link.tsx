'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './Link.module.css'
import type { LinkProps } from './types'

/**
 * Link
 * Anchor component with two visual variants: standalone (default) and inline (within body text).
 * Hover swaps underline state and changes color to action-hover.
 * Disabled prevents navigation and removes pointer interaction.
 *
 * @see design-system/figma.md for Figma mapping (node 466:1407)
 * @see docs/components.md for usage examples
 *
 * NOTE: When using target="_blank", always pass rel="noopener noreferrer" per CLAUDE.md.
 */
export function Link({
  variant = 'default',
  disabled = false,
  iconLeft,
  iconRight,
  children,
  className,
  onClick,
  ref,
  ...props
}: LinkProps & { ref?: React.Ref<HTMLAnchorElement> }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault()
      return
    }
    onClick?.(e)
  }

  return (
    // href and keyboard behaviour come from the native <a> via spread props.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <a
      ref={ref}
      className={cn(
        styles.base,
        variant === 'default' && styles.default,
        variant === 'in-line' && styles.inline,
        disabled && styles.disabled,
        className
      )}
      aria-disabled={disabled || undefined}
      onClick={handleClick}
      {...props}
    >
      {iconLeft && (
        <span aria-hidden="true" className={styles.iconWrapper}>
          {iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span aria-hidden="true" className={styles.iconWrapper}>
          {iconRight}
        </span>
      )}
    </a>
  )
}

Link.displayName = 'Link'
