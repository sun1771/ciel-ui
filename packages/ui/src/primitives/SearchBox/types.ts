import React from 'react'

/** Accessible names used by SearchBox. */
export interface SearchBoxLabels {
  /** Name of the clear (X) button. */
  clear: string
}

/** Props for the SearchBox component — a pill-shaped search input with icon, clear button, and optional dropdown. */
export interface SearchBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Icon rendered to the left of the input. Default: Search (20px). */
  icon?: React.ReactNode
  /** Called when the user clicks the X clear button. Button is only rendered when value is a non-empty string. */
  onClear?: () => void
  /** Override accessible names (e.g. for localisation). */
  labels?: Partial<SearchBoxLabels>
  /** Optional dropdown content rendered in a floating panel below the input. Parent controls when to pass children. */
  children?: React.ReactNode
  /** Applied to the outer wrapper div, not the native <input>. */
  className?: string
}
