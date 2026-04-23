import React from 'react'

/** Props for the Card layout component */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Media content for the top image area (102px tall, object-cover) */
  image?: React.ReactNode
  /** When true, prev/next navigation arrows overlay the image area */
  showCarousel?: boolean
  /** Current 0-indexed carousel page — enables dot pagination when combined with carouselTotal */
  carouselPage?: number
  /** Total image count — renders dot pagination when > 1 */
  carouselTotal?: number
  /** Called when the previous carousel button is clicked */
  onCarouselPrev?: () => void
  /** Called when the next carousel button is clicked */
  onCarouselNext?: () => void
  /** Applies 2px action-blue border (selected visual state) */
  isSelected?: boolean
  /** Replaces content with animated skeleton placeholders */
  isLoading?: boolean
  className?: string
  children?: React.ReactNode
}
