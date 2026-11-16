'use client'

import React from 'react'
import { Pagination } from '../Pagination'
import { cn } from '../../lib/utils'
import { useControllableState } from '../../lib/useControllableState'
import { CarouselItem } from './CarouselItem'
import type { CarouselLabels, CarouselProps } from './types'

const DEFAULT_LABELS: Omit<CarouselLabels, 'pagination'> = {
  previous: 'Previous slide',
  next: 'Next slide',
}
import styles from './Carousel.module.css'

/**
 * Carousel
 * Slide container with prev/next nav buttons and dot pagination.
 * Each direct child is treated as one slide; slides glide into place.
 * Off-screen slides are inert (not focusable, hidden from screen readers).
 * Keeps its own slide index (`defaultIndex`), or pass `index` +
 * `onIndexChange` to control it.
 *
 * @see design-system/figma.md for Figma mapping
 */
export function Carousel({
  size = 'lg',
  shape = 'round',
  disabled = false,
  labels,
  index: indexProp,
  defaultIndex = 0,
  onIndexChange,
  children,
  className,
  ref,
  ...props
}: CarouselProps & { ref?: React.Ref<HTMLDivElement> }) {
  const ariaLabel = props['aria-label']
  const l = {
    ...DEFAULT_LABELS,
    pagination: ariaLabel ? `${ariaLabel}: slides` : 'Slides',
    ...labels,
  }
  const slides = React.Children.toArray(children)
  const totalSlides = slides.length
  const [index, setIndex] = useControllableState({
    value: indexProp,
    defaultValue: defaultIndex,
    onChange: onIndexChange,
  })
  const currentIndex = Math.min(Math.max(index, 0), Math.max(totalSlides - 1, 0))

  const handlePrev = () => {
    if (!disabled && currentIndex > 0) setIndex(currentIndex - 1)
  }

  const handleNext = () => {
    if (!disabled && currentIndex < totalSlides - 1) setIndex(currentIndex + 1)
  }

  if (totalSlides === 0) return null

  return (
    <div
      ref={ref}
      role="region"
      aria-roledescription="carousel"
      className={cn(styles.root, className)}
      {...props}
    >
      {/* Slide display area: a track of all slides, shifted to the current one */}
      <div className={styles.slideArea}>
        <div className={styles.track} style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {slides.map((slide, i) => (
            <div
              key={i}
              className={styles.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${totalSlides}`}
              inert={i !== currentIndex}
              aria-hidden={i !== currentIndex || undefined}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Controls: nav row + pagination */}
      <div className={styles.controls}>
        <div className={styles.navRow}>
          <CarouselItem
            direction="left"
            shape={shape}
            size={size}
            label={l.previous}
            disabled={disabled || currentIndex === 0}
            onClick={handlePrev}
          />
          <CarouselItem
            direction="right"
            shape={shape}
            size={size}
            label={l.next}
            disabled={disabled || currentIndex === totalSlides - 1}
            onClick={handleNext}
          />
        </div>

        <div className={styles.paginationWrapper}>
          <Pagination
            page={currentIndex + 1}
            totalPages={totalSlides}
            disabled={disabled}
            labels={{ navigation: l.pagination }}
            onChange={(page) => setIndex(page - 1)}
          />
        </div>
      </div>
    </div>
  )
}

Carousel.displayName = 'Carousel'
