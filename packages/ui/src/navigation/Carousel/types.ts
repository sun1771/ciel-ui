import React from 'react'

export type CarouselShape = 'round' | 'rectangle'
export type CarouselSize = 'lg' | 'sm'
export type CarouselDirection = 'left' | 'right'

/** Carousel navigation button — rendered as prev or next arrow. */
export interface CarouselItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Which direction this button navigates. */
  direction: CarouselDirection
  /** Button shape: round (circle/pill) or rectangle (rounded square). Default: 'round' */
  shape?: CarouselShape
  /** Button size: lg (32px, 24px icon) or sm (24px, 20px icon). Default: 'lg' */
  size?: CarouselSize
  /** Required accessible label — applied as aria-label. */
  label: string
  className?: string
}

/** Carousel container that manages slide display, navigation, and pagination. */
export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the navigation buttons. Default: 'lg' */
  size?: CarouselSize
  /** Shape of the navigation buttons. Default: 'round' */
  shape?: CarouselShape
  /** When true, disables all navigation and pagination interactions. */
  disabled?: boolean
  /** Each direct child is treated as one slide. */
  children: React.ReactNode
  className?: string
}
