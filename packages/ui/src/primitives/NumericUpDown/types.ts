import React from 'react'

/** Props for the NumericUpDown stepper component. Root element is a <div>. */
/** Accessible names used by NumericUpDown. */
export interface NumericUpDownLabels {
  /** Minus button name. */
  decrease: string
  /** Plus button name. */
  increase: string
}

export interface NumericUpDownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Override accessible names (e.g. for localisation). */
  labels?: Partial<NumericUpDownLabels>
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
