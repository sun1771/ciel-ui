'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './ProgressBar.module.css'
import type { ProgressCircleProps } from './types'

const CONFIG = {
  default: { size: 64, cx: 32, cy: 32, r: 26, strokeWidth: 8 },
  sm: { size: 48, cx: 24, cy: 24, r: 19, strokeWidth: 6 },
} as const

/**
 * ProgressCircle
 * Circular progress indicator with optional center percentage label.
 * Two sizes: default (64px) and sm (48px).
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const ProgressCircle = React.forwardRef<HTMLDivElement, ProgressCircleProps>(
  ({ value = 0, size = 'default', showLabel = false, label, className, ...props }, ref) => {
    const clampedValue = Math.min(100, Math.max(0, value))
    const displayLabel = label ?? `${clampedValue}%`
    const { cx, cy, r, strokeWidth, size: svgSize } = CONFIG[size]
    const circumference = 2 * Math.PI * r
    const offset = circumference * (1 - clampedValue / 100)

    return (
      <div
        ref={ref}
        className={cn(
          styles.progressCircle,
          size === 'default' ? styles.sizeDefault : styles.sizeSm,
          className
        )}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={showLabel ? displayLabel : `Progress: ${clampedValue}%`}
        {...props}
      >
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          fill="none"
          aria-hidden="true"
        >
          {/* Track ring */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            stroke="var(--ds-mapped-surface-action-hover-light)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress arc — starts at 12 o'clock via rotation */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            stroke="var(--ds-mapped-surface-action)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${cx} ${cy})`}
            style={{ transition: 'stroke-dashoffset 0.3s ease' }}
          />
        </svg>
        {showLabel && <span className={styles.circleLabel}>{displayLabel}</span>}
      </div>
    )
  }
)

ProgressCircle.displayName = 'ProgressCircle'
