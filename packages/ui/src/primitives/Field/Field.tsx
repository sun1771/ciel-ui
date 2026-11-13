'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import type { FieldProps } from './types'
import styles from './Field.module.css'

/**
 * Field
 * Styled input wrapper: outer div carries border/bg visuals,
 * inner <input> is transparent. Accepts all native input props.
 * Use Input (which wraps Field) when you need a label or hint text.
 *
 * @see design-system/figma.md for Figma mapping (node 63:939)
 * @see docs/components.md for usage examples
 */
export const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  (
    {
      disabled = false,
      error,
      iconLeft,
      iconRight,
      className,
      ...inputProps
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          styles.wrapper,
          disabled && styles.disabled,
          error && styles.error,
          className
        )}
      >
        {iconLeft && (
          <span className={styles.iconSlot} aria-hidden="true">
            {iconLeft}
          </span>
        )}

        <input
          ref={ref}
          className={styles.input}
          disabled={disabled}
          aria-invalid={error ? 'true' : undefined}
          {...inputProps}
        />

        {iconRight && (
          <span className={styles.iconSlot} aria-hidden="true">
            {iconRight}
          </span>
        )}
      </div>
    )
  }
)

Field.displayName = 'Field'
