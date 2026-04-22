'use client'

import React from 'react'
import styles from './RadioButton.module.css'
import { cn } from '@/lib/utils'
import type { RadioButtonProps } from './types'

/**
 * RadioButton
 * A custom radio button with an optional text label.
 * Renders a visually hidden native <input type="radio"> for accessibility
 * and a custom circle that responds to checked/disabled/hover/focus states.
 *
 * @see design-system/figma.md for Figma mapping (nodes 307:1550, 307:1583)
 * @see docs/components.md for usage examples
 */
export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      children,
      className,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <label
        className={cn(
          styles.wrapper,
          disabled && styles.wrapperDisabled,
          className
        )}
      >
        <input
          ref={ref}
          type="radio"
          className={styles.input}
          disabled={disabled}
          aria-disabled={disabled || undefined}
          {...props}
        />
        <span className={styles.radio} aria-hidden="true">
          <span className={styles.knob} />
        </span>
        {children != null && (
          <span className={styles.label}>{children}</span>
        )}
      </label>
    )
  }
)

RadioButton.displayName = 'RadioButton'
