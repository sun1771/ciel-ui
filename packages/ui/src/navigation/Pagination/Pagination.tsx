'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import type { PaginationProps } from './types'
import styles from './Pagination.module.css'

/**
 * Pagination
 * Dot-style page indicator used in carousels and multi-step flows.
 * The active page renders as a wider pill; inactive pages are circles.
 * Clicking an inactive dot fires onChange with the target page number.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ page = 1, totalPages, onChange, disabled = false, className, ...props }, ref) => {
    return (
      <nav ref={ref} className={cn(styles.container, className)} aria-label="Pagination" {...props}>
        {Array.from({ length: totalPages }, (_, i) => {
          const pageNumber = i + 1
          const isActive = pageNumber === page

          return (
            <button
              key={pageNumber}
              type="button"
              className={cn(styles.dotButton, isActive && styles.dotButtonActive)}
              disabled={disabled}
              aria-label={isActive ? `Page ${pageNumber}, current` : `Go to page ${pageNumber}`}
              aria-current={isActive ? 'page' : undefined}
              onClick={disabled || isActive ? undefined : () => onChange?.(pageNumber)}
            >
              <span
                className={cn(
                  styles.dot,
                  isActive && styles.dotActive,
                  disabled && styles.dotDisabled
                )}
                aria-hidden="true"
              />
            </button>
          )
        })}
      </nav>
    )
  }
)

Pagination.displayName = 'Pagination'
