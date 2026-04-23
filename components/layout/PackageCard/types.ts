import React from 'react'

export type PackageCardVariant = 'default' | 'itinerary'

/** PackageCard — card container with heading, TripOn AI action button, and page navigation */
export interface PackageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual variant — 'default' shows prev/next arrows; 'itinerary' adds "Day N" label between arrows */
  variant?: PackageCardVariant
  /** H8 heading text displayed in the card header */
  heading?: string
  /** Current page number (1-based). Controls disabled state of nav buttons and "Day N" label in itinerary variant */
  page?: number
  /** Total number of pages. Disables the next button when page === totalPages */
  totalPages?: number
  /** Called when the previous page button is clicked */
  onPrevPage?: () => void
  /** Called when the next page button is clicked */
  onNextPage?: () => void
  /** Called when the TripOn AI action button is clicked */
  onAction?: () => void
  /** Content rendered inside the card body */
  children?: React.ReactNode
  className?: string
}
