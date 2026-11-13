'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './ProgressBar.module.css'
import type { ProgressBarProps } from './types'

/**
 * ProgressBar
 * Linear horizontal progress indicator with optional label.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ value = 0, showLabel = false, label, className, ...props }, ref) => {
    const clampedValue = Math.min(100, Math.max(0, value))
    const displayLabel = label ?? `${clampedValue}%`

    return (
      <div
        ref={ref}
        className={cn(styles.progressBar, className)}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={showLabel ? displayLabel : `Progress: ${clampedValue}%`}
        {...props}
      >
        {showLabel && (
          <span className={styles.label}>{displayLabel}</span>
        )}
        <div className={styles.track}>
          <div
            className={styles.fill}
            style={{ width: `${clampedValue}%` }}
          />
        </div>
      </div>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'
