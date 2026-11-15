import React from 'react'

/** Props for the Pagination dot indicator component */
/** Accessible names used by Pagination. */
export interface PaginationLabels {
  /** Name of the <nav> landmark. */
  navigation: string
  /** Name of a page button. */
  goToPage: (page: number) => string
  /** Name of the current page's button. */
  currentPage: (page: number) => string
}

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Override accessible names (e.g. for localisation). */
  labels?: Partial<PaginationLabels>
  /** Current page, 1-indexed; its dot displays as a pill. Pass it to control Pagination yourself. */
  page?: number
  /** Starting page when `page` isn't passed (uncontrolled). Default: 1. */
  defaultPage?: number
  /** Total number of pages — determines how many dots are rendered. */
  totalPages: number
  /** Called with the target page number when an inactive dot is clicked, in both modes. */
  onChange?: (page: number) => void
  /**
   * Colour scheme. 'default' = neutral dots for the page surface; 'onMedia' =
   * white dots with a soft shadow, for use over photos (e.g. Card images).
   */
  tone?: 'default' | 'onMedia'
  /** When true, all dots render in the disabled surface color and interactions are suppressed. */
  disabled?: boolean
  className?: string
}
