'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import type { SwitchProps } from './types'
import styles from './Switch.module.css'

/**
 * Switch
 * Toggle switch with optional label text. Renders a <button role="switch">
 * paired with a label span. Pass checked + onChange for controlled usage.
 *
 * @see design-system/figma.md → Switch (314:137)
 * @see docs/components.md for usage examples
 */
export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked = false, disabled = false, className, children, ...props }, ref) => {
    const labelId = React.useId()

    return (
      <div className={cn(styles.wrapper, className)}>
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-labelledby={children != null ? labelId : undefined}
          disabled={disabled}
          className={cn(styles.track, checked && styles.checked, disabled && styles.disabled)}
          {...props}
        >
          <span className={styles.knob} aria-hidden="true" />
        </button>
        {children != null && (
          <span id={labelId} className={cn(styles.label, disabled && styles.labelDisabled)}>
            {children}
          </span>
        )}
      </div>
    )
  }
)

Switch.displayName = 'Switch'
