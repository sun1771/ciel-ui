'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { Check } from '@cielui/icons'
import styles from './Checkbox.module.css'
import type { CheckboxProps } from './types'

/**
 * Checkbox
 * Checkbox with optional label. Supports disabled and error states.
 * Pass checked + onChange for controlled usage; defaultChecked for uncontrolled.
 * The checked look comes from the native input's :checked state (CSS), so it
 * is right in both modes.
 *
 * @see design-system/figma.md → Checkbox (nodes 307:1445, 307:1536)
 * @see docs/components.md for usage examples
 */
export function Checkbox({
  checked,
  disabled = false,
  error = false,
  children,
  className,
  ref,
  ...rest
}: CheckboxProps & { ref?: React.Ref<HTMLInputElement> }) {
  return (
    <label className={cn(styles.wrapper, disabled && styles.wrapperDisabled, className)}>
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        aria-invalid={error || undefined}
        className={styles.input}
        {...rest}
      />
      <span className={cn(styles.box, error && styles.error)} aria-hidden="true">
        <Check size={16} />
      </span>
      {children && <span className={styles.label}>{children}</span>}
    </label>
  )
}

Checkbox.displayName = 'Checkbox'
