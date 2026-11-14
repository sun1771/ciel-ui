import type React from 'react'

/**
 * Props for the Checkbox component.
 * Extends all native <input type="checkbox"> HTML attributes.
 * Use checked + onChange for controlled usage; defaultChecked for uncontrolled.
 * hover and focus states are CSS pseudo-classes only — not React props.
 */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** When true, applies error border and error icon color to the checkbox box. */
  error?: boolean
  /** Optional label text rendered to the right of the checkbox box. */
  children?: React.ReactNode
  /** CSS class applied to the outer wrapper <label> element. */
  className?: string
}
