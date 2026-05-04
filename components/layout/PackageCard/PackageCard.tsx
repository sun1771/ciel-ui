import React from 'react'
import { TripOnChatIcon } from '@/icons'
import { ButtonIcon } from '@/components/primitives/Button'
import { CarouselItem } from '@/components/navigation/Carousel'
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
          <ButtonIcon
            icon={<TripOnChatIcon size={16} />}
            label="TripOn AI action"
            onClick={onAction}
            variant="transparent"
            size="sm"
            shape="default"
          />

          {/* Navigation group */}
          <div className={styles.nav} role="group" aria-label="Page navigation">
            <CarouselItem
              direction="left"
              size="sm"
              label="Previous page"
              disabled={isPrevDisabled}
              onClick={onPrevPage}
            />

            {variant === 'itinerary' && (
              <span className={styles.dayLabel} aria-live="polite">
                Day {page}
              </span>
            )}

            <CarouselItem
              direction="right"
              size="sm"
              label="Next page"
              disabled={isNextDisabled}
              onClick={onNextPage}
            />
          </div>
        </div>

        {/* Content area */}
        <div className={styles.content}>{children}</div>
      </div>
    )
  }
)

PackageCard.displayName = 'PackageCard'
