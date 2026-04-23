import React from 'react'

/** Props for the Pagination dot indicator component */
export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Current active page — 1-indexed. The corresponding dot displays as a pill. */
  page: number
  /** Total number of pages — determines how many dots are rendered. */
  totalPages: number
  /** Callback fired when an inactive dot is clicked. Receives the target page number. */
  onChange?: (page: number) => void
  /** When true, all dots render in the disabled surface color and interactions are suppressed. */
  disabled?: boolean
  className?: string
}
