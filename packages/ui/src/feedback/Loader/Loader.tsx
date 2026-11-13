'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import type { LoaderProps } from './types'
import styles from './Loader.module.css'

/* 8 dots at 45° intervals. Opacity decreases from the leading dot (1.0) to the
   trailing dot (0.125), creating a "comet tail" effect as the ring rotates. */
const DOTS: { angle: number; opacity: number }[] = [
  { angle: 0,   opacity: 1.0   },
  { angle: 45,  opacity: 0.875 },
  { angle: 90,  opacity: 0.75  },
  { angle: 135, opacity: 0.625 },
  { angle: 180, opacity: 0.5   },
  { angle: 225, opacity: 0.375 },
  { angle: 270, opacity: 0.25  },
  { angle: 315, opacity: 0.125 },
]

/* All dot geometry lives in a 64×64 viewBox — the SVG scales it to any size. */
const CX = 32
const CY = 32
const ORBIT_R = 24
const DOT_R = 6

/**
 * Loader
 * SVG dot-ring spinner with 5 sizes.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ size = 'md', label = 'Loading', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label={label}
        className={cn(styles.root, styles[size], className)}
        {...props}
      >
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.spinner}
          aria-hidden="true"
        >
          {DOTS.map(({ angle, opacity }) => {
            const rad = (angle - 90) * (Math.PI / 180)
            const x = CX + ORBIT_R * Math.cos(rad)
            const y = CY + ORBIT_R * Math.sin(rad)
            return (
              <circle
                key={angle}
                cx={x}
                cy={y}
                r={DOT_R}
                fill="var(--ds-mapped-surface-action)"
                opacity={opacity}
              />
            )
          })}
        </svg>
      </div>
    )
  }
)

Loader.displayName = 'Loader'
