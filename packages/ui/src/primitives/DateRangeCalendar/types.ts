import React from 'react'

export interface DateRange {
  start: Date | null
  end: Date | null
}

/** 0 = Sunday … 6 = Saturday */
export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6

/** Accessible names used by DateRangeCalendar. */
export interface DateRangeCalendarLabels {
  previousMonth: string
  nextMonth: string
}

export interface DateRangeCalendarProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange' | 'defaultValue'
> {
  /** Controlled range. */
  value?: DateRange
  /** Initial range when uncontrolled. */
  defaultValue?: DateRange
  /**
   * Called on every pick: first click sets `start` (end null), the second sets
   * `end`. Clicking before the start restarts the range.
   */
  onChange?: (range: DateRange) => void
  /** BCP 47 locale for month, weekday and day names. Default: 'en-US'. */
  locale?: string
  /** First day of the week. Default: 0 (Sunday). */
  weekStartsOn?: Weekday
  /** Number of months shown side by side. Default: 2. */
  months?: 1 | 2
  /** Month shown first when there is no selected start. Default: today. */
  defaultMonth?: Date
  /** Override accessible names (e.g. for localisation). */
  labels?: Partial<DateRangeCalendarLabels>
}
