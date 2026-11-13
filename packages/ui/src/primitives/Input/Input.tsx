'use client'

import React, { useId } from 'react'
import { cn } from '../../lib/utils'
import { Label } from '../Label'
import { Field } from '../Field'
import type { InputProps } from './types'
import styles from './Input.module.css'

/**
 * Input
 * Composed component: Label (optional) + Field + hint/error text (optional).
 * All native <input> props pass through to the inner input element.
 * ref is forwarded to the inner <input>.
 *
 * @see design-system/figma.md for Figma mapping (node 165:1110)
 * @see docs/components.md for usage examples
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, id, error, disabled, iconLeft, iconRight, className, ...inputProps }, ref) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const hintId = hint && !error ? `${inputId}-hint` : undefined
    const errorId = error ? `${inputId}-error` : undefined

    return (
      <div className={cn(styles.wrapper, className)}>
        {label && <Label htmlFor={inputId}>{label}</Label>}

        <Field
          ref={ref}
          id={inputId}
          disabled={disabled}
          error={error}
          iconLeft={iconLeft}
          iconRight={iconRight}
          aria-describedby={errorId ?? hintId}
          {...inputProps}
        />

        {error ? (
          <p id={errorId} className={styles.errorText} role="alert">
            {error}
          </p>
        ) : hint ? (
          <p id={hintId} className={styles.hint}>
            {hint}
          </p>
        ) : null}
      </div>
    )
  }
)

Input.displayName = 'Input'
