'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { ChevronDown, ChevronTop } from '@acme/icons'
import type { AccordionProgressiveProps } from './types'
import styles from './AccordionProgressive.module.css'

/**
 * AccordionProgressive
 * Collapsible disclosure panel. Controlled: parent passes isExpanded and onToggle.
 * Header shows ChevronDown (collapsed) / ChevronTop (expanded) with progressive border styling.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const AccordionProgressive = React.forwardRef<HTMLDivElement, AccordionProgressiveProps>(
  (
    { label, isExpanded = false, disabled = false, onToggle, children, className, ...props },
    ref
  ) => {
    const contentId = React.useId()
    const headerId = React.useId()

    const handleClick = () => {
      if (!disabled) {
        onToggle?.(!isExpanded)
      }
    }

    return (
      <div ref={ref} className={cn(styles.root, disabled && styles.disabled, className)} {...props}>
        <button
          id={headerId}
          type="button"
          className={cn(styles.header, isExpanded && styles.headerExpanded)}
          aria-expanded={isExpanded}
          aria-controls={isExpanded ? contentId : undefined}
          disabled={disabled}
          onClick={handleClick}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.chevron} aria-hidden="true">
            {isExpanded ? <ChevronTop size={20} /> : <ChevronDown size={20} />}
          </span>
        </button>

        {isExpanded && (
          <div id={contentId} role="region" aria-labelledby={headerId} className={styles.content}>
            {children}
          </div>
        )}
      </div>
    )
  }
)

AccordionProgressive.displayName = 'AccordionProgressive'
