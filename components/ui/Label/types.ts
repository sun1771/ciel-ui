import React from 'react'

export type LabelVariant = 'default' | 'required'

/** Props for the Label component — wraps a native <label> element */
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Visual variant — 'required' adds a red asterisk before the label text */
  variant?: LabelVariant
  /** Optional icon rendered after the label text (decorative) */
  icon?: React.ReactNode
  /** Label text content */
  children: React.ReactNode
  className?: string
}
