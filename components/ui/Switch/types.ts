import React from 'react'

/** Props for the Switch toggle component. Root is a layout div; button attrs apply to the track. */
export interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the switch is in the on/checked state */
  checked?: boolean
  /** Optional label text displayed to the right of the track */
  children?: React.ReactNode
  /** Applied to the outer wrapper div, not the inner button track */
  className?: string
}
