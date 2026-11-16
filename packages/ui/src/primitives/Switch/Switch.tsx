'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { useControllableState } from '../../lib/useControllableState'
import type { SwitchProps } from './types'
import styles from './Switch.module.css'

/**
 * Switch
 * Toggle switch with optional label text. Renders a <button role="switch">
 * paired with a label span. Pass `checked` + `onCheckedChange` to control it,
 * or `defaultChecked` (or nothing) to let it keep its own state.
 *
 * @see design-system/figma.md → Switch (314:137)
 * @see docs/components.md for usage examples
 */
export function Switch({
  checked: checkedProp,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  className,
  children,
  onClick,
  ref,
  ...props
}: SwitchProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const labelId = React.useId()
  const [checked, setChecked] = useControllableState({
    value: checkedProp,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  })

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
        onClick={(e) => {
          onClick?.(e)
          if (!e.defaultPrevented) setChecked(!checked)
        }}
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

Switch.displayName = 'Switch'
