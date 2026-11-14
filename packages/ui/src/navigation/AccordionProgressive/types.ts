import type React from 'react'

/** AccordionProgressive — collapsible panel with progressive disclosure. Controlled via isExpanded + onToggle. */
export interface AccordionProgressiveProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onToggle'
> {
  /** Header text displayed in the trigger row. Required. */
  label: string
  /** Controlled expansion state. Defaults to false (collapsed). */
  isExpanded?: boolean
  /** Disables the toggle button; prevents user interaction. */
  disabled?: boolean
  /** Called when the header button is clicked. Receives the next isExpanded value. */
  onToggle?: (next: boolean) => void
  /** Content shown inside the panel when expanded. */
  children?: React.ReactNode
  /** Extra className applied to the root element. */
  className?: string
}
