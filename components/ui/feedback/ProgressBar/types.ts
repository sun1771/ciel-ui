import React from 'react'

export type ProgressCircleSize = 'default' | 'sm'

/** Linear horizontal progress bar with optional label */
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress value 0–100. Default: 0 */
  value?: number
  /** Show label text above the track */
  showLabel?: boolean
  /** Custom label text. Defaults to "{value}%" when showLabel is true */
  label?: string
  className?: string
}

/** Circular progress indicator with optional center label */
export interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress value 0–100. Default: 0 */
  value?: number
  /** Size variant. 'default' = 64px, 'sm' = 48px. Default: 'default' */
  size?: ProgressCircleSize
  /** Show percentage label in the center */
  showLabel?: boolean
  /** Custom label text. Defaults to "{value}%" when showLabel is true */
  label?: string
  className?: string
}
