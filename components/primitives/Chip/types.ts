import type React from 'react'

export type ChipColor = 'brand' | 'blue' | 'green' | 'orange' | 'red'
export type ChipVariant = 'light' | 'sharp'

/** Props for the Chip display badge component. Non-interactive — no hover/focus/disabled states. */
export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color category. Maps to Figma Status property. Default: 'brand' */
  color?: ChipColor
  /** Visual style. 'light' = soft tint background; 'sharp' = saturated border-tone background. Default: 'light' */
  variant?: ChipVariant
  /** Optional icon node rendered to the left of the label. Should be 16px. Decorative — aria-hidden. */
  icon?: React.ReactNode
  /** Label text content. */
  children?: React.ReactNode
  /** Applied to the outer wrapper div. */
  className?: string
}
