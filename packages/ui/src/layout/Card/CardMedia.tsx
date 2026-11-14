'use client'

import React, { useState } from 'react'
import { cn } from '../../lib/utils'
import { CarouselItem } from '../../navigation/Carousel'
import { Pagination } from '../../navigation/Pagination'
import styles from './Card.module.css'
import type { CardMediaLabels, CardMediaProps } from './types'

const DEFAULT_LABELS: CardMediaLabels = { previous: 'Previous image', next: 'Next image' }

/**
 * CardMedia — the card's image area (Figma `.Image Item` 3455:3324).
 * One element (children or a single-item `images`) renders statically; several
 * `images` render as a carousel with prev/next arrows and pagination dots.
 */
export function CardMedia({
  images,
  labels,
  children,
  className,
  ref,
  ...props
}: CardMediaProps & { ref?: React.Ref<HTMLDivElement> }) {
  const l = { ...DEFAULT_LABELS, ...labels }
  const [page, setPage] = useState(0)
  const total = images?.length ?? 0
  const current = Math.min(page, Math.max(total - 1, 0))
  const slide = total > 0 ? images?.[current] : children

  return (
    <div ref={ref} className={cn(styles.imageItem, className)} {...props}>
      {slide != null && <div className={styles.imageSlide}>{slide}</div>}
      {total > 1 && (
        <>
          <div className={styles.carouselNav}>
            <CarouselItem
              direction="left"
              shape="round"
              size="sm"
              label={l.previous}
              onClick={() => setPage(Math.max(0, current - 1))}
              disabled={current === 0}
            />
            <CarouselItem
              direction="right"
              shape="round"
              size="sm"
              label={l.next}
              onClick={() => setPage(Math.min(total - 1, current + 1))}
              disabled={current >= total - 1}
            />
          </div>
          <div className={styles.paginationOverlay}>
            <Pagination page={current + 1} totalPages={total} onChange={(p) => setPage(p - 1)} />
          </div>
        </>
      )}
    </div>
  )
}
CardMedia.displayName = 'CardMedia'
