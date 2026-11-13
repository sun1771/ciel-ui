import React from 'react'
import type { PopoverProps } from '../Popover/types'

/**
 * FieldPicker — a form-field-styled trigger that opens a Popover panel.
 * Put any picker in the panel (a DateRangeCalendar, counters, a list…) and
 * pass the resulting summary as `value`.
 */
export interface FieldPickerProps extends Omit<PopoverProps, 'trigger'> {
  /** Leading icon (20px recommended). */
  icon?: React.ReactNode
  /** Summary of the current selection shown in the field. Empty → `placeholder`. */
  value?: React.ReactNode
  /** Text shown when `value` is empty. */
  placeholder?: React.ReactNode
}
