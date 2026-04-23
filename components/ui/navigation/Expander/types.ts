import React from 'react'

export type ExpanderSize = 'lg' | 'sm'

/** Props for the Expander component — a controlled accordion-style disclosure widget. */
export interface ExpanderProps {
  /** The visible label text rendered in the header row */
  label: string
  /** Controls whether the content panel is visible — parent manages state */
  isExpanded?: boolean
  /** Size variant — affects padding, icon size, and typography */
  size?: ExpanderSize
  /** Disables toggle interaction and applies gray styling with a border */
  disabled?: boolean
  /** Called when the user clicks the header button */
  onToggle?: () => void
  /** Content rendered inside the panel when isExpanded is true */
  children?: React.ReactNode
  /** Additional class names applied to the root wrapper element */
  className?: string
}
