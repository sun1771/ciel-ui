'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { Minus, Plus } from '@acme/icons'
import { useControllableState } from '../../lib/useControllableState'
import type { NumericUpDownLabels, NumericUpDownProps } from './types'

const DEFAULT_LABELS: NumericUpDownLabels = { decrease: 'Decrease', increase: 'Increase' }
import styles from './NumericUpDown.module.css'

/**
 * NumericUpDown — stepper control with - and + buttons around a value display.
 * Decrement is disabled when value <= min; increment disabled when value >= max.
 * Pass `value` + `onChange` to control it, or `defaultValue` (or nothing) to
 * let it keep its own count.
 *
 * @see design-system/figma.md for Figma mapping (node 1503:4111)
 * @see docs/components.md for usage examples
 */
export function NumericUpDown({
  value: valueProp,
  defaultValue = 0,
  min,
  max,
  onChange,
  disabled = false,
  labels,
  className,
  ref,
  ...props
}: NumericUpDownProps & { ref?: React.Ref<HTMLDivElement> }) {
  const l = { ...DEFAULT_LABELS, ...labels }
  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue,
    onChange,
  })
  const decrementDisabled = disabled || (min !== undefined && value <= min)
  const incrementDisabled = disabled || (max !== undefined && value >= max)

  const handleDecrement = () => {
    if (!decrementDisabled) {
      setValue(value - 1)
    }
  }

  const handleIncrement = () => {
    if (!incrementDisabled) {
      setValue(value + 1)
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
        {/* Keyed so each new number plays a short enter animation. */}
        <span key={value} className={styles.valueText}>
          {value}
        </span>
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

NumericUpDown.displayName = 'NumericUpDown'
