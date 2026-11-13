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
  /** Current active page — 1-indexed. The corresponding dot displays as a pill. */
  /** Override accessible names (e.g. for localisation). */
  labels?: Partial<PaginationLabels>
  page: number
  /** Total number of pages — determines how many dots are rendered. */
  totalPages: number
  /** Callback fired when an inactive dot is clicked. Receives the target page number. */
  onChange?: (page: number) => void
  /** When true, all dots render in the disabled surface color and interactions are suppressed. */
  disabled?: boolean
  className?: string
}
