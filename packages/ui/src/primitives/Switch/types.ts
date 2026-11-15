import React from 'react'

/** Props for the Switch toggle component. Root is a layout div; button attrs apply to the track. */
export interface SwitchProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'defaultChecked'
> {
  /** Whether the switch is on. Pass it to control the switch yourself. */
  checked?: boolean
  /** Starting state when `checked` isn't passed (uncontrolled). Default: false. */
  defaultChecked?: boolean
  /** Called with the new state when the user toggles the switch, in both modes. */
  onCheckedChange?: (checked: boolean) => void
  /** Optional label text displayed to the right of the track */
  children?: React.ReactNode
  /** Applied to the outer wrapper div, not the inner button track */
  className?: string
}
