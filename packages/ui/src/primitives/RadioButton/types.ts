import React from 'react'

/** Props for the RadioButton component. */
export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label text displayed next to the radio circle. When omitted, only the circle renders. */
  children?: React.ReactNode
  /** Applied to the outer <label> wrapper, not the native <input>. */
  className?: string
}
