'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { useControllableState } from '../../lib/useControllableState'
import type { PaginationLabels, PaginationProps } from './types'

const DEFAULT_LABELS: PaginationLabels = {
  navigation: 'Pagination',
  goToPage: (page) => `Go to page ${page}`,
  currentPage: (page) => `Page ${page}, current`,
}
import styles from './Pagination.module.css'

/**
 * Pagination
 * Dot-style page indicator used in carousels and multi-step flows.
 * The active page renders as a wider pill; inactive pages are circles.
 * Clicking an inactive dot fires onChange with the target page number.
 * Pass `page` + `onChange` to control it, or `defaultPage` (or nothing) to let
 * it keep its own page.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export function Pagination({
  page: pageProp,
  defaultPage = 1,
  totalPages,
  onChange,
  disabled = false,
  tone = 'default',
  labels,
  className,
  ref,
  ...props
}: PaginationProps & { ref?: React.Ref<HTMLElement> }) {
  const l = { ...DEFAULT_LABELS, ...labels }
  const [page, setPage] = useControllableState({
    value: pageProp,
    defaultValue: defaultPage,
    onChange,
  })
  return (
    <nav
      ref={ref}
      className={cn(styles.container, tone === 'onMedia' && styles.onMedia, className)}
      aria-label={l.navigation}
      {...props}
    >
      {Array.from({ length: totalPages }, (_, i) => {
        const pageNumber = i + 1
        const isActive = pageNumber === page

        return (
          <button
            key={pageNumber}
            type="button"
            className={cn(styles.dotButton, isActive && styles.dotButtonActive)}
            disabled={disabled}
            aria-label={isActive ? l.currentPage(pageNumber) : l.goToPage(pageNumber)}
            aria-current={isActive ? 'page' : undefined}
            onClick={disabled || isActive ? undefined : () => setPage(pageNumber)}
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

Pagination.displayName = 'Pagination'
