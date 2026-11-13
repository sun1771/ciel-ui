'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { X } from '@acme/icons'
import type { TagProps } from './types'
import styles from './Tag.module.css'

/**
 * Tag — dismissible pill label.
 * Renders an X dismiss button when onDismiss is provided.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      size = 'lg',
      disabled = false,
      onDismiss,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const iconSize = size === 'lg' ? 20 : 16

    return (
      <div
        ref={ref}
        className={cn(
          styles.base,
          styles[size],
          disabled && styles.disabled,
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {onDismiss && (
          <button
            type="button"
            className={styles.dismissButton}
            onClick={onDismiss}
            disabled={disabled}
            aria-label="Dismiss"
          >
            <span aria-hidden="true">
              <X size={iconSize} />
            </span>
          </button>
        )}
      </div>
    )
  }
)

Tag.displayName = 'Tag'
