'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { ChevronDown } from '@acme/icons'
import { useControllableState } from '../../lib/useControllableState'
import type { ExpanderProps } from './types'
import styles from './Expander.module.css'

/**
 * Expander
 * A disclosure widget: a toggle header and a collapsible content panel.
 * Pass `isExpanded` + `onToggle` to control it, or `defaultExpanded` (or
 * nothing) to let it keep its own state. The panel animates open and closed;
 * while closed it is inert (not focusable, hidden from screen readers).
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export function Expander({
  label,
  isExpanded: isExpandedProp,
  defaultExpanded = false,
  size = 'lg',
  disabled = false,
  onToggle,
  children,
  className,
  ref,
}: ExpanderProps & { ref?: React.Ref<HTMLDivElement> }) {
  const iconSize = size === 'lg' ? 20 : 16
  const contentId = React.useId()
  const [isExpanded, setExpanded] = useControllableState({
    value: isExpandedProp,
    defaultValue: defaultExpanded,
    onChange: onToggle,
  })

  return (
    <div ref={ref} className={cn(styles.root, styles[size], className)}>
      <button
        type="button"
        className={cn(
          styles.header,
          isExpanded && styles.headerExpanded,
          disabled && isExpanded && styles.headerDisabledExpanded
        )}
        onClick={disabled ? undefined : () => setExpanded(!isExpanded)}
        disabled={disabled}
        aria-expanded={isExpanded}
        aria-controls={contentId}
      >
        <span>{label}</span>
        <span className={styles.chevron} aria-hidden="true">
          <ChevronDown size={iconSize} />
        </span>
      </button>

      <div className={cn(styles.collapse, isExpanded && styles.collapseOpen)} inert={!isExpanded}>
        <div className={styles.collapseInner}>
          <div id={contentId} className={styles.content} role="region">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

Expander.displayName = 'Expander'
