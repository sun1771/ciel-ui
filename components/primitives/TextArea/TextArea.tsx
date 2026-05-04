'use client'

import React, { useId } from 'react'
import { cn } from '@/lib/utils'
import { Label } from '@/components/primitives/Label'
import type { TextAreaProps } from './types'
import styles from './TextArea.module.css'

/**
 * TextArea
 * Multi-line text input with optional label above, hint above field, and
 * error message below. All native <textarea> props pass through to the
 * inner textarea element. ref is forwarded to the inner <textarea>.
 *
 * @see design-system/figma.md for Figma mapping (317:206 / 318:1216)
 * @see docs/components.md for usage examples
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      hint,
      error,
      iconRight,
      disabled,
      id,
      className,
      ...textareaProps
    },
    ref
  ) => {
    const generatedId = useId()
    const textareaId = id ?? generatedId
    const errorId = error ? `${textareaId}-error` : undefined

    return (
      <div className={cn(styles.wrapper, className)}>
        {label && (
          <Label htmlFor={textareaId}>
            {label}
          </Label>
        )}

        {hint && (
          <p className={styles.hint}>
            {hint}
          </p>
        )}

        <div
          className={cn(
            styles.field,
            disabled && styles.fieldDisabled,
            !!error && styles.fieldError
          )}
        >
          <textarea
            ref={ref}
            id={textareaId}
            className={styles.textarea}
            disabled={disabled}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={errorId}
            {...textareaProps}
          />

          {iconRight && (
            <span className={styles.iconSlot} aria-hidden="true">
              {iconRight}
            </span>
          )}
        </div>

        {error && (
          <p id={errorId} className={styles.errorText} role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
