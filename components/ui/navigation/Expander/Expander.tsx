'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown, ChevronTop } from '@/icons'
import type { ExpanderProps } from './types'
import styles from './Expander.module.css'

/**
 * Expander
 * A controlled accordion-style disclosure widget with a toggle header and collapsible content panel.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const Expander = React.forwardRef<HTMLDivElement, ExpanderProps>(
  (
    {
      label,
      isExpanded = false,
      size = 'lg',
      disabled = false,
      onToggle,
      children,
      className,
    },
    ref
  ) => {
    const iconSize = size === 'lg' ? 20 : 16

    return (
      <div
        ref={ref}
        className={cn(styles.root, styles[size], className)}
      >
        <button
          type="button"
          className={cn(
            styles.header,
            isExpanded && styles.headerExpanded,
            disabled && isExpanded && styles.headerDisabledExpanded
          )}
          onClick={disabled ? undefined : onToggle}
          disabled={disabled}
          aria-expanded={isExpanded}
        >
          <span>{label}</span>
          <span className={styles.chevron} aria-hidden="true">
            {isExpanded ? (
              <ChevronTop size={iconSize} />
            ) : (
              <ChevronDown size={iconSize} />
            )}
          </span>
        </button>

        {isExpanded && (
          <div className={styles.content} role="region">
            {children}
          </div>
        )}
      </div>
    )
  }
)

Expander.displayName = 'Expander'
