import React from 'react'
import { ChevronLeft, ChevronRight, TripOnChatIcon } from '@/icons'
import { cn } from '@/lib/utils'
import styles from './PackageCard.module.css'
import type { PackageCardProps } from './types'

/**
 * PackageCard
 * Card container with a heading, TripOn AI action button, and built-in page navigation.
 * variant="default" — prev/next arrows only.
 * variant="itinerary" — prev / "Day N" / next in the header.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const PackageCard = React.forwardRef<HTMLDivElement, PackageCardProps>(
  (
    {
      variant = 'default',
      heading,
      page = 1,
      totalPages = 1,
      onPrevPage,
      onNextPage,
      onAction,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const isPrevDisabled = page <= 1
    const isNextDisabled = page >= totalPages

    return (
      <div ref={ref} className={cn(styles.card, className)} {...props}>
        {/* Header row */}
        <div className={styles.header}>
          {/* H8 heading */}
          <span className={styles.heading}>{heading ?? ''}</span>

          {/* TripOn AI action button */}
          <button
            type="button"
            className={styles.actionBtn}
            onClick={onAction}
            aria-label="TripOn AI action"
          >
            <TripOnChatIcon size={16} />
          </button>

          {/* Navigation group */}
          <div className={styles.nav} role="group" aria-label="Page navigation">
            <button
              type="button"
              className={styles.navBtn}
              onClick={onPrevPage}
              disabled={isPrevDisabled}
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>

            {variant === 'itinerary' && (
              <span className={styles.dayLabel} aria-live="polite">
                Day {page}
              </span>
            )}

            <button
              type="button"
              className={styles.navBtn}
              onClick={onNextPage}
              disabled={isNextDisabled}
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Content area */}
        <div className={styles.content}>{children}</div>
      </div>
    )
  }
)

PackageCard.displayName = 'PackageCard'
