'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import type { ChipColor, ChipVariant, ChipProps } from './types'
import styles from './Chip.module.css'

const colorVariantClasses: Record<ChipColor, Record<ChipVariant, string>> = {
  brand: { light: styles.brandLight, sharp: styles.brandSharp },
  blue: { light: styles.blueLight, sharp: styles.blueSharp },
  green: { light: styles.greenLight, sharp: styles.greenSharp },
  orange: { light: styles.orangeLight, sharp: styles.orangeSharp },
  red: { light: styles.redLight, sharp: styles.redSharp },
}

/**
 * Chip — non-interactive display badge with color and variant axes.
 * Supports an optional icon slot (16px) and optional label text.
 *
 * @see design-system/figma.md for Figma mapping (node 1249:2540)
 * @see docs/components.md for usage examples
 */
export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      color = 'brand',
      variant = 'light',
      icon,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(styles.base, colorVariantClasses[color][variant], className)}
        {...props}
      >
        {icon && (
          <span aria-hidden="true" className={styles.iconSlot}>
            {icon}
          </span>
        )}
        {children}
      </div>
    )
  },
)

Chip.displayName = 'Chip'
