'use client'

import React from 'react'
import { ChevronLeft, ChevronRight } from '@acme/icons'
import { cn } from '../../lib/utils'
import type { CarouselItemProps } from './types'
import styles from './Carousel.module.css'

/**
 * CarouselItem
 * Navigation button (prev/next) for the Carousel. Renders a ChevronLeft or
 * ChevronRight icon inside a round or rectangle button.
 *
 * @see design-system/figma.md for Figma mapping
 */
export function CarouselItem({
  direction,
  shape = 'round',
  size = 'lg',
  label,
  disabled = false,
  className,
  ref,
  ...props
}: CarouselItemProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const iconSize = size === 'lg' ? 24 : 20

  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      disabled={disabled}
      className={cn(
        styles.item,
        size === 'lg' ? styles.itemLg : styles.itemSm,
        shape === 'rectangle' && styles.rectangle,
        className
      )}
      {...props}
    >
      {direction === 'left' ? (
        <ChevronLeft size={iconSize} color="currentColor" aria-hidden="true" />
      ) : (
        <ChevronRight size={iconSize} color="currentColor" aria-hidden="true" />
      )}
    </button>
  )
}

CarouselItem.displayName = 'CarouselItem'
