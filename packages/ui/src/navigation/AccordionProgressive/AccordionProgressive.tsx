'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { ChevronDown } from '@cielui/icons'
import { useControllableState } from '../../lib/useControllableState'
import type { AccordionProgressiveProps } from './types'
import styles from './AccordionProgressive.module.css'

/**
 * AccordionProgressive
 * Collapsible disclosure panel with progressive border styling. Pass
 * `isExpanded` + `onToggle` to control it, or `defaultExpanded` (or nothing) to
 * let it keep its own state. The panel animates open and closed; while closed
 * it is inert (not focusable, hidden from screen readers).
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export function AccordionProgressive({
  label,
  isExpanded: isExpandedProp,
  defaultExpanded = false,
  disabled = false,
  onToggle,
  children,
  className,
  ref,
  ...props
}: AccordionProgressiveProps & { ref?: React.Ref<HTMLDivElement> }) {
  const contentId = React.useId()
  const headerId = React.useId()
  const [isExpanded, setExpanded] = useControllableState({
    value: isExpandedProp,
    defaultValue: defaultExpanded,
    onChange: onToggle,
  })

  const handleClick = () => {
    if (!disabled) setExpanded(!isExpanded)
  }

  return (
    <div ref={ref} className={cn(styles.root, disabled && styles.disabled, className)} {...props}>
      <button
        id={headerId}
        type="button"
        className={cn(styles.header, isExpanded && styles.headerExpanded)}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        disabled={disabled}
        onClick={handleClick}
      >
        <span className={styles.label}>{label}</span>
        <span className={styles.chevron} aria-hidden="true">
          <ChevronDown size={20} />
        </span>
      </button>

      <div className={cn(styles.collapse, isExpanded && styles.collapseOpen)} inert={!isExpanded}>
        <div className={styles.collapseInner}>
          <div id={contentId} role="region" aria-labelledby={headerId} className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

AccordionProgressive.displayName = 'AccordionProgressive'
