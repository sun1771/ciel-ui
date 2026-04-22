'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Check } from '@/design-system/icons/components/Check'
import styles from './Checkbox.module.css'
import type { CheckboxProps } from './types'

/**
 * Checkbox
 * Controlled checkbox with optional label. Supports disabled and error states.
 * Pass checked + onChange for controlled usage; defaultChecked for uncontrolled.
 *
 * @see design-system/figma.md → Checkbox (nodes 307:1445, 307:1536)
 * @see docs/components.md for usage examples
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      checked,
      disabled = false,
      error = false,
      children,
      className,
      ...rest
    },
    ref,
  ) {
    return (
      <label
        className={cn(
          styles.wrapper,
          disabled && styles.wrapperDisabled,
          className,
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          aria-invalid={error || undefined}
          className={styles.input}
          {...rest}
        />
        <span
          className={cn(
            styles.box,
            checked && styles.checked,
            disabled && styles.boxDisabled,
            error && styles.error,
            checked && disabled && styles.checkedDisabled,
            checked && error && !disabled && styles.checkedError,
          )}
          aria-hidden="true"
        >
          <Check size={16} />
        </span>
        {children && <span className={styles.label}>{children}</span>}
      </label>
    )
  },
)

Checkbox.displayName = 'Checkbox'
