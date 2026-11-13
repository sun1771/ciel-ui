import React from 'react'

export type PackageCardVariant = 'default' | 'itinerary'

/** Text and accessible names used by PackageCard. */
export interface PackageCardLabels {
  /** Accessible name of the action button. */
  action: string
  /** Accessible name of the navigation group. */
  pageNavigation: string
  previousPage: string
  nextPage: string
}

/** PackageCard — card container with heading, an action button, and page navigation */
export interface PackageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual variant — 'default' shows prev/next arrows; 'itinerary' adds "Day N" label between arrows */
  variant?: PackageCardVariant
  /**
   * Whether the card's content has been generated (Figma `Loaded`).
   * `true` (default) → renders `children`, action + nav are interactive.
   * `false` → renders the `emptyText` placeholder, disables the action button,
   * nav buttons, and dims the "Day N" label.
   */
  loaded?: boolean
  /** Placeholder body content shown when `loaded` is false. Default: 'Nothing here yet.' */
  emptyText?: React.ReactNode
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
  /** Called when the action button is clicked */
  onAction?: () => void
  /** Icon for the action button. Default: the Sparkle icon. */
  actionIcon?: React.ReactNode
  /**
   * Renders the page indicator in the itinerary variant.
   * Default: renders "Day {page}".
   */
  formatPageLabel?: (page: number) => React.ReactNode
  /** Override accessible names (e.g. for localisation). */
  labels?: Partial<PackageCardLabels>
  /** Content rendered inside the card body */
  children?: React.ReactNode
  className?: string
}
