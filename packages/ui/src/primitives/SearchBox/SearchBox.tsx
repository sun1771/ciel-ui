'use client'

import React from 'react'
import { MapPin, X } from '@acme/icons'
import { cn } from '../../lib/utils'
import styles from './SearchBox.module.css'
import type { SearchBoxProps } from './types'

/**
 * SearchBox
 * Pill-shaped search input with a left icon, text field, optional clear button, and optional dropdown.
 * Left icon defaults to MapPin (destination search) per Figma spec.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  (
    {
      icon,
      onClear,
      children,
      className,
      disabled = false,
      value,
      ...props
    },
    ref
  ) => {
    const hasValue = typeof value === 'string' && value.length > 0
    const showClear = hasValue && !!onClear && !disabled

    return (
      // Mouse convenience only: keyboard users tab straight to the native input.
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div
        className={cn(styles.wrapper, disabled && styles.disabled, className)}
        // Clicking anywhere on the wrapper focuses the input
        onClick={() => {
          if (!disabled) {
            const input = (ref as React.RefObject<HTMLInputElement>)?.current
            input?.focus()
          }
        }}
      >
        // Left icon — MapPin by default per Figma
        <span className={styles.icon} aria-hidden="true">
          {icon ?? <MapPin size={20} />}
        </span>

        // Native input
        <input
          ref={ref}
          className={styles.input}
          disabled={disabled}
          value={value}
          aria-disabled={disabled || undefined}
          {...props}
        />

        // Clear button — only when value is non-empty and onClear is provided
        {showClear && (
          <button
            type="button"
            className={styles.clear}
            onClick={(e) => {
              e.stopPropagation()
              onClear()
            }}
            aria-label="Clear search"
          >
            <X size={20} aria-hidden="true" />
          </button>
        )}

        // Dropdown panel — parent controls visibility by passing children
        {children && (
          <div className={styles.dropdown} role="listbox">
            {children}
          </div>
        )}
      </div>
    )
  }
)

SearchBox.displayName = 'SearchBox'
