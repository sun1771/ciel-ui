'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { X } from '@cielui/icons'
import type { TagLabels, TagProps } from './types'

const DEFAULT_LABELS: TagLabels = { dismiss: 'Dismiss' }
import styles from './Tag.module.css'

/**
 * Tag — dismissible pill label.
 * Renders an X dismiss button when onDismiss is provided.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export function Tag({
  size = 'lg',
  disabled = false,
  onDismiss,
  labels,
  className,
  children,
  ref,
  ...props
}: TagProps & { ref?: React.Ref<HTMLDivElement> }) {
  const l = { ...DEFAULT_LABELS, ...labels }
  const iconSize = size === 'lg' ? 20 : 16

  return (
    <div
      ref={ref}
      aria-disabled={disabled || undefined}
      className={cn(styles.base, styles[size], disabled && styles.disabled, className)}
      {...props}
    >
      <span>{children}</span>
      {onDismiss && (
        <button
          type="button"
          className={styles.dismissButton}
          onClick={onDismiss}
          disabled={disabled}
          aria-label={l.dismiss}
        >
          <span aria-hidden="true">
            <X size={iconSize} />
          </span>
        </button>
      )}
    </div>
  )
}

Tag.displayName = 'Tag'
