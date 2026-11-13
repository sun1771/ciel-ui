import React from 'react'
import { TripOnChatIcon } from '@acme/icons'
import { ButtonIcon } from '../../primitives/Button'
import { CarouselItem } from '../../navigation/Carousel'
import { cn } from '../../lib/utils'
import styles from './PackageCard.module.css'
import type { PackageCardProps } from './types'

/**
 * PackageCard
 * Card container with a heading, TripOn AI action button, and built-in page navigation.
 * variant="default" — prev/next arrows only.
 * variant="itinerary" — prev / "Day N" / next in the header.
 * loaded=false — content not yet generated: shows the `emptyText` placeholder and
 * disables the action button, nav buttons, and dims the "Day N" label.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const PackageCard = React.forwardRef<HTMLDivElement, PackageCardProps>(
  (
    {
      variant = 'default',
      loaded = true,
      emptyText = 'Not curated yet.',
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
    // When not loaded, all interactive controls are disabled (Figma `Loaded=False`).
    const isPrevDisabled = !loaded || page <= 1
    const isNextDisabled = !loaded || page >= totalPages

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
            disabled={!loaded}
            className={!loaded ? styles.actionDisabled : undefined}
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
              <span
                className={cn(styles.dayLabel, !loaded && styles.dayLabelDisabled)}
                aria-live="polite"
              >
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

        {/* Content area — children when loaded, placeholder text otherwise */}
        <div className={styles.content}>
          {loaded ? children : <p className={styles.emptyText}>{emptyText}</p>}
        </div>
      </div>
    )
  }
)

PackageCard.displayName = 'PackageCard'
