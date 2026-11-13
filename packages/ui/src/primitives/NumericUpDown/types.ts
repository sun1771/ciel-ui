import React from 'react'

/** Props for the NumericUpDown stepper component. Root element is a <div>. */
export interface NumericUpDownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Controlled current value. Default: 0 */
  value?: number
  /** Minimum allowed value. Decrement button is disabled when value <= min. */
  min?: number
  /** Maximum allowed value. Increment button is disabled when value >= max. */
  max?: number
  /** Called with the new value when + or - is clicked. */
  onChange?: (value: number) => void
  /** Disables both + and - buttons and mutes the value display. */
  disabled?: boolean
  /** Applied to the outer wrapper div. */
  className?: string
}
