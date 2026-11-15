import React from 'react'

export type ProgressCircleSize = 'default' | 'sm'

/** Linear horizontal progress bar with optional label */
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress value 0–100. Default: 0 */
  value?: number
  /** Show label text above the track */
  showLabel?: boolean
  /** Label text, shown above the track with showLabel (else "{value}%"). Also the accessible name. */
  label?: string
  className?: string
}

/** Circular progress indicator with optional center label */
export interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress value 0–100. Default: 0 */
  value?: number
  /** Size variant. 'default' = 64px, 'sm' = 48px. Default: 'default' */
  size?: ProgressCircleSize
  /** Show the percentage inside the ring, and `label` (if any) as a caption beside it */
  showLabel?: boolean
  /** What is progressing, e.g. "Step 1 of 4". The accessible name; shown beside the ring with showLabel. */
  label?: string
  className?: string
}
