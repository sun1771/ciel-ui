'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { Minus, Plus } from '@acme/icons'
import type { NumericUpDownLabels, NumericUpDownProps } from './types'

const DEFAULT_LABELS: NumericUpDownLabels = { decrease: 'Decrease', increase: 'Increase' }
import styles from './NumericUpDown.module.css'

/**
 * NumericUpDown — stepper control with - and + buttons around a value display.
 * Decrement is disabled when value <= min; increment disabled when value >= max.
 *
 * @see design-system/figma.md for Figma mapping (node 1503:4111)
 * @see docs/components.md for usage examples
 */
export const NumericUpDown = React.forwardRef<HTMLDivElement, NumericUpDownProps>(
  ({ value = 0, min, max, onChange, disabled = false, labels, className, ...props }, ref) => {
    const l = { ...DEFAULT_LABELS, ...labels }
    const decrementDisabled = disabled || (min !== undefined && value <= min)
    const incrementDisabled = disabled || (max !== undefined && value >= max)

    const handleDecrement = () => {
      if (!decrementDisabled) {
        onChange?.(value - 1)
      }
    }

    const handleIncrement = () => {
      if (!incrementDisabled) {
        onChange?.(value + 1)
      }
    }

    return (
      <div ref={ref} className={cn(styles.base, disabled && styles.disabled, className)} {...props}>
        <button
          type="button"
          className={styles.button}
          onClick={handleDecrement}
          disabled={decrementDisabled}
          aria-label={l.decrease}
        >
          <span aria-hidden="true">
            <Minus size={16} />
          </span>
        </button>

        <span className={styles.value} aria-live="polite" aria-atomic="true">
          {value}
        </span>

        <button
          type="button"
          className={styles.button}
          onClick={handleIncrement}
          disabled={incrementDisabled}
          aria-label={l.increase}
        >
          <span aria-hidden="true">
            <Plus size={16} />
          </span>
        </button>
      </div>
    )
  }
)

NumericUpDown.displayName = 'NumericUpDown'
