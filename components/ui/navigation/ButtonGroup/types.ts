import React from 'react'

export type ButtonGroupVariant = 'button-group' | 'icon-group'

/** Props for the ButtonGroup container component */
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ButtonGroupVariant
  children: React.ReactNode
  className?: string
}

/** Props for an individual item within a ButtonGroup */
export interface ButtonGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
}
