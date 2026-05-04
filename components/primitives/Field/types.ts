import React from 'react'

/**
 * Props for the Field component — a styled input wrapper.
 * Extends InputHTMLAttributes so that value, onChange, placeholder,
 * onFocus, onBlur and all other native input props pass through to
 * the inner <input> element. className applies to the outer wrapper div.
 */
export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Non-empty string puts the wrapper in error state (red border, aria-invalid). */
  error?: string
  /** Optional icon node rendered to the left of the input (decorative). */
  iconLeft?: React.ReactNode
  /** Optional icon node rendered to the right of the input (decorative). */
  iconRight?: React.ReactNode
  /** Applied to the outer wrapper div, not the inner input. */
  className?: string
}
