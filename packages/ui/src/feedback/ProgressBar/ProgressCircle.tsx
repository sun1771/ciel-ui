'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './ProgressBar.module.css'
import type { ProgressCircleProps } from './types'

const CONFIG = {
  default: { size: 64, cx: 32, cy: 32, r: 26, strokeWidth: 8 },
  // sm ring: 5px stroke (was 6px) leaves a 35px hole, room for "100%" at 12px.
  sm: { size: 48, cx: 24, cy: 24, r: 20, strokeWidth: 5 },
} as const

/**
 * ProgressCircle
 * Circular progress indicator. Two sizes: default (64px) and sm (48px).
 * With `showLabel`, the percentage sits inside the ring (sized to fit it) and
 * `label`, if given, is shown as a caption beside the ring, so longer text
 * like "Step 1 of 4" never overlaps the ring. `label` is also the accessible
 * name.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export function ProgressCircle({
  value = 0,
  size = 'default',
  showLabel = false,
  label,
  className,
  ref,
  ...props
}: ProgressCircleProps & { ref?: React.Ref<HTMLDivElement> }) {
  const clampedValue = Math.min(100, Math.max(0, value))
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
      aria-label={label ?? 'Progress'}
      {...props}
    >
      <span className={styles.ring}>
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
            className={styles.arc}
          />
        </svg>
        {showLabel && (
          <span className={styles.circleValue} aria-hidden="true">
            {clampedValue}
            <span className={styles.percent}>%</span>
          </span>
        )}
      </span>
      {showLabel && label && (
        <span className={styles.circleCaption} aria-hidden="true">
          {label}
        </span>
      )}
    </div>
  )
}

ProgressCircle.displayName = 'ProgressCircle'
