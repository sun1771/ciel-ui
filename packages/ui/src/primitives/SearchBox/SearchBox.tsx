'use client'

import React from 'react'
import { Search, X } from '@acme/icons'
import { cn } from '../../lib/utils'
import styles from './SearchBox.module.css'
import type { SearchBoxLabels, SearchBoxProps } from './types'

const DEFAULT_LABELS: SearchBoxLabels = { clear: 'Clear search' }

/**
 * SearchBox
 * Pill-shaped search input with a left icon, text field, optional clear button, and optional dropdown.
 * The left icon defaults to Search; pass `icon` to change it (e.g. MapPin for a destination search).
 *
 * The forwarded `ref` points at the native `<input>`; object and callback refs are both supported.
 */
export const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  ({ icon, onClear, labels, children, className, disabled = false, value, ...props }, ref) => {
    const l = { ...DEFAULT_LABELS, ...labels }
    const inputRef = React.useRef<HTMLInputElement>(null)
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, [])

    const hasValue = typeof value === 'string' && value.length > 0
    const showClear = hasValue && !!onClear && !disabled

    return (
      // Mouse convenience only: keyboard users tab straight to the native input.
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div
        className={cn(styles.wrapper, disabled && styles.disabled, className)}
        // Clicking anywhere on the wrapper focuses the input
        onClick={() => {
          if (!disabled) inputRef.current?.focus()
        }}
      >
        {/* Left icon */}
        <span className={styles.icon} aria-hidden="true">
          {icon ?? <Search size={20} />}
        </span>

        {/* Native input */}
        <input
          ref={inputRef}
          className={styles.input}
          disabled={disabled}
          value={value}
          aria-disabled={disabled || undefined}
          {...props}
        />

        {/* Clear button — only when value is non-empty and onClear is provided */}
        {showClear && (
          <button
            type="button"
            className={styles.clear}
            onClick={(e) => {
              e.stopPropagation()
              onClear()
              inputRef.current?.focus()
            }}
            aria-label={l.clear}
          >
            <X size={20} aria-hidden="true" />
          </button>
        )}

        {/* Dropdown panel — parent controls visibility by passing children */}
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
