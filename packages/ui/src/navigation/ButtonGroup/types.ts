import React from 'react'

/** Props for the ButtonGroup container component */
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
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
