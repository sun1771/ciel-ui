'use client'

import React from 'react'
import { Search, X } from '@cielui/icons'
import { cn } from '../../lib/utils'
import styles from './SearchBox.module.css'
import type { SearchBoxLabels, SearchBoxProps } from './types'

const DEFAULT_LABELS: SearchBoxLabels = { clear: 'Clear search' }

/**
 * SearchBox
 * Pill-shaped search input with a left icon, text field, optional clear button, and optional
 * suggestions dropdown. The left icon defaults to Search; pass `icon` to change it (e.g. MapPin
 * for a destination search).
 *
 * Suggestions: pass options (e.g. `<MenuItem role="option">`) as children. The input then
 * becomes a combobox, and the dropdown
 * - opens when the user types (or presses ArrowDown)
 * - closes when an option is clicked, on Escape, on Tab away, or on a click outside
 * - supports ArrowDown/ArrowUp between the input and the options
 *
 * The forwarded `ref` points at the native `<input>`; object and callback refs are both supported.
 */
export function SearchBox({
  icon,
  onClear,
  labels,
  children,
  className,
  disabled = false,
  value,
  onChange,
  onKeyDown,
  ref,
  ...props
}: SearchBoxProps & { ref?: React.Ref<HTMLInputElement> }) {
  const l = { ...DEFAULT_LABELS, ...labels }
  const inputRef = React.useRef<HTMLInputElement>(null)
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const listRef = React.useRef<HTMLDivElement>(null)
  const listId = React.useId()
  React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, [])

  const isCombobox = children !== undefined
  const hasOptions = React.Children.toArray(children).length > 0
  const [open, setOpen] = React.useState(false)
  const showList = isCombobox && open && hasOptions && !disabled

  const hasValue = typeof value === 'string' && value.length > 0
  const showClear = hasValue && !!onClear && !disabled

  const options = () =>
    Array.from(listRef.current?.querySelectorAll<HTMLElement>('[role="option"]') ?? [])

  // A click outside the search box closes the suggestions.
  React.useEffect(() => {
    if (!showList) return
    function onPointerDown(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [showList])

  function closeAndFocusInput() {
    setOpen(false)
    inputRef.current?.focus()
  }

  function handleListKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const opts = options()
    const i = opts.indexOf(document.activeElement as HTMLElement)
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      opts[Math.min(i + 1, opts.length - 1)]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (i <= 0) inputRef.current?.focus()
      else opts[i - 1].focus()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      closeAndFocusInput()
    }
  }

  return (
    // Mouse convenience only: keyboard users tab straight to the native input.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      ref={wrapperRef}
      className={cn(styles.wrapper, disabled && styles.disabled, className)}
      // Clicking anywhere on the wrapper focuses the input
      onClick={() => {
        if (!disabled) inputRef.current?.focus()
      }}
      // Tabbing out of the whole search box closes the suggestions.
      onBlur={(e) => {
        if (!wrapperRef.current?.contains(e.relatedTarget as Node | null)) setOpen(false)
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
        {...(isCombobox && {
          role: 'combobox',
          'aria-expanded': showList,
          'aria-controls': showList ? listId : undefined,
          'aria-autocomplete': 'list' as const,
        })}
        onChange={(e) => {
          onChange?.(e)
          setOpen(true)
        }}
        onKeyDown={(e) => {
          onKeyDown?.(e)
          if (!isCombobox || e.defaultPrevented) return
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            if (showList) options()[0]?.focus()
            else setOpen(true)
          } else if (e.key === 'Escape' && showList) {
            e.preventDefault()
            setOpen(false)
          }
        }}
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

      {/* Suggestions. Picking one (a click on any option) closes the list. */}
      {showList && (
        // Keyboard handling for the options lives here (arrows, Escape).
        <div
          ref={listRef}
          id={listId}
          className={styles.dropdown}
          role="listbox"
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
          onClick={(e) => {
            e.stopPropagation()
            if ((e.target as HTMLElement).closest('[role="option"]')) closeAndFocusInput()
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

SearchBox.displayName = 'SearchBox'
