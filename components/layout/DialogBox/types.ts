import React from 'react'

/** Props for the DialogBox layout component */
export interface DialogBoxProps {
  /** Controls dialog visibility — mounts/unmounts the portal */
  isOpen: boolean
  /** Heading text rendered as H6 */
  title: string
  /** Optional 32px icon rendered before the title in the heading row */
  icon?: React.ReactNode
  /** Show the X close button in the heading row (default: true) */
  showClose?: boolean
  /** Called when the X button is clicked or Escape is pressed */
  onClose?: () => void
  /** Body content rendered inside the dialog */
  children: React.ReactNode
  /** Label for the primary (filled) action button (default: "Confirm") */
  primaryLabel?: string
  /** Called when the primary action button is clicked */
  onPrimary?: () => void
  /** Show the secondary (outline) cancel button (default: false) */
  showSecondary?: boolean
  /** Label for the secondary action button (default: "Cancel") */
  secondaryLabel?: string
  /** Called when the secondary button is clicked — falls back to onClose */
  onSecondary?: () => void
  className?: string
}
