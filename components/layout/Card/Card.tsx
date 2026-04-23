'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { CarouselItem } from '@/components/ui/navigation/Carousel'
import { Pagination } from '@/components/ui/navigation/Pagination'
import styles from './Card.module.css'
import type { CardProps } from './types'

/**
 * Card
 * Layout container for travel result items (hotel, flight, car rental, etc.).
 * Provides an image slot with optional carousel nav, a children content area,
 * and selected/loading visual states.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      image,
      showCarousel = false,
      carouselPage,
      carouselTotal,
      onCarouselPrev,
      onCarouselNext,
      isSelected = false,
      isLoading = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const hasPagination =
      showCarousel &&
      carouselTotal != null &&
      carouselTotal > 1 &&
      carouselPage != null

    return (
      <div
        ref={ref}
        className={cn(styles.card, isSelected && styles.selected, className)}
        aria-busy={isLoading || undefined}
        {...props}
      >
        {isLoading ? (
          <>
            <div className={styles.skeletonImageArea} aria-hidden="true" />
            <div className={styles.skeletonContent} aria-hidden="true">
              <div className={styles.skeletonRow} />
              <div className={styles.skeletonRow} />
              <div className={styles.skeletonRow} />
              <div className={cn(styles.skeletonRow, styles.skeletonRowSm)} />
            </div>
          </>
        ) : (
          <>
            {image != null && (
              <div className={styles.imageArea}>
                {image}
                {showCarousel && (
                  <>
                    <div className={styles.carouselNav}>
                      <CarouselItem
                        direction="left"
                        shape="round"
                        size="sm"
                        label="Previous image"
                        onClick={onCarouselPrev}
                        disabled={onCarouselPrev == null}
                      />
                      <CarouselItem
                        direction="right"
                        shape="round"
                        size="sm"
                        label="Next image"
                        onClick={onCarouselNext}
                        disabled={onCarouselNext == null}
                      />
                    </div>
                    {hasPagination && (
                      <div className={styles.paginationOverlay}>
                        <Pagination
                          page={(carouselPage as number) + 1}
                          totalPages={carouselTotal as number}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
            {children}
          </>
        )}
      </div>
    )
  }
)

Card.displayName = 'Card'
