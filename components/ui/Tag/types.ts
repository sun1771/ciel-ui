import React from 'react'

/** Tag size options matching Figma Size property. */
export type TagSize = 'lg' | 'sm'

/** Props for the dismissible Tag pill component. */
export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size variant — lg (16px/body-md) or sm (14px/body-sm). Default: 'lg' */
  size?: TagSize
  /** When true, applies disabled styling and prevents all interactions. */
  disabled?: boolean
  /** When provided, renders an X dismiss button that calls this on click. */
  onDismiss?: () => void
  /** Applied to the outer wrapper div. */
  className?: string
  /** The tag label content. */
  children: React.ReactNode
}
