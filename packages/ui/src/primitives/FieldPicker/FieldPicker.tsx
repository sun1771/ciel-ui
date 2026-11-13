'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { Popover } from '../Popover'
import styles from './FieldPicker.module.css'
import type { FieldPickerProps } from './types'

/**
 * FieldPicker — field-style trigger (icon + value/placeholder) that opens a
 * Popover panel with whatever picker you put in `children`.
 *
 * @example
 * <FieldPicker
 *   icon={<Calendar size={20} />}
 *   value={summary}
 *   placeholder="Select dates"
 *   panelLabel="Select date range"
 * >
 *   <DateRangeCalendar value={range} onChange={setRange} />
 * </FieldPicker>
 */
export function FieldPicker({
  icon,
  value,
  placeholder,
  ref,
  ...popoverProps
}: FieldPickerProps & { ref?: React.Ref<HTMLDivElement> }) {
  const isEmpty = value == null || value === ''

  return (
    <Popover
      ref={ref}
      {...popoverProps}
      trigger={(triggerProps, { open }) => (
        <button
          {...triggerProps}
          aria-disabled={triggerProps.disabled}
          className={cn(
            styles.trigger,
            open && styles.triggerOpen,
            triggerProps.disabled && styles.triggerDisabled
          )}
        >
          {icon != null && (
            <span className={styles.leadingIcon} aria-hidden="true">
              {icon}
            </span>
          )}
          <span className={cn(styles.triggerLabel, isEmpty && styles.triggerPlaceholder)}>
            {isEmpty ? placeholder : value}
          </span>
          <span className={styles.triggerIcon} aria-hidden="true" />
        </button>
      )}
    />
  )
}

FieldPicker.displayName = 'FieldPicker'
