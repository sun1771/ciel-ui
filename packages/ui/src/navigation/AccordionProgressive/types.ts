import type React from 'react'

/** AccordionProgressive — collapsible panel with progressive disclosure. Controlled (isExpanded + onToggle) or uncontrolled (defaultExpanded). */
export interface AccordionProgressiveProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onToggle'
> {
  /** Header text displayed in the trigger row. Required. */
  label: string
  /** Whether the panel is open. Pass it to control the accordion yourself. */
  isExpanded?: boolean
  /** Starting state when `isExpanded` isn't passed (uncontrolled). Default: false. */
  defaultExpanded?: boolean
  /** Disables the toggle button; prevents user interaction. */
  disabled?: boolean
  /** Called with the next open state when the header is clicked, in both modes. */
  onToggle?: (next: boolean) => void
  /** Content shown inside the panel when expanded. */
  children?: React.ReactNode
  /** Extra className applied to the root element. */
  className?: string
}
