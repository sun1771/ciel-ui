import React from 'react'

export type ExpanderSize = 'lg' | 'sm'

/** Props for the Expander component — an accordion-style disclosure widget. */
export interface ExpanderProps {
  /** The visible label text rendered in the header row */
  label: string
  /** Whether the content panel is open. Pass it to control the Expander yourself. */
  isExpanded?: boolean
  /** Starting state when `isExpanded` isn't passed (uncontrolled). Default: false. */
  defaultExpanded?: boolean
  /** Size variant — affects padding, icon size, and typography */
  size?: ExpanderSize
  /** Disables toggle interaction and applies gray styling with a border */
  disabled?: boolean
  /** Called with the next open state when the user clicks the header, in both modes. */
  onToggle?: (next: boolean) => void
  /** Content rendered inside the panel when isExpanded is true */
  children?: React.ReactNode
  /** Additional class names applied to the root wrapper element */
  className?: string
}
