'use client'

import React, { useState } from 'react'
import { Pagination } from '../Pagination'
import { cn } from '../../lib/utils'
import { CarouselItem } from './CarouselItem'
import type { CarouselProps } from './types'
import styles from './Carousel.module.css'

/**
 * Carousel
 * Slide container with prev/next nav buttons and dot pagination.
 * Each direct child is treated as one slide. Manages its own slide index.
 *
 * @see design-system/figma.md for Figma mapping
 */
export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ size = 'lg', shape = 'round', disabled = false, children, className, ...props }, ref) => {
    const slides = React.Children.toArray(children)
    const totalSlides = slides.length
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
      if (!disabled && currentIndex > 0) setCurrentIndex((i) => i - 1)
    }

    const handleNext = () => {
      if (!disabled && currentIndex < totalSlides - 1) setCurrentIndex((i) => i + 1)
    }

    if (totalSlides === 0) return null

    return (
      <div ref={ref} className={cn(styles.root, className)} {...props}>
        {/* Slide display area */}
        <div className={styles.slideArea}>{slides[currentIndex]}</div>

        {/* Controls: nav row + pagination */}
        <div className={styles.controls}>
          <div className={styles.navRow}>
            <CarouselItem
              direction="left"
              shape={shape}
              size={size}
              label="Previous slide"
              disabled={disabled || currentIndex === 0}
              onClick={handlePrev}
            />
            <CarouselItem
              direction="right"
              shape={shape}
              size={size}
              label="Next slide"
              disabled={disabled || currentIndex === totalSlides - 1}
              onClick={handleNext}
            />
          </div>

          <div className={styles.paginationWrapper}>
            <Pagination
              page={currentIndex + 1}
              totalPages={totalSlides}
              disabled={disabled}
              onChange={(page) => setCurrentIndex(page - 1)}
            />
          </div>
        </div>
      </div>
    )
  }
)

Carousel.displayName = 'Carousel'
