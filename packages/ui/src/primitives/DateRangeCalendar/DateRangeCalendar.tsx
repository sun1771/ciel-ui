'use client'

import React, { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from '@acme/icons'
import { cn } from '../../lib/utils'
import { useControllableState } from '../../lib/useControllableState'
import styles from './DateRangeCalendar.module.css'
import type { DateRange, DateRangeCalendarLabels, DateRangeCalendarProps, Weekday } from './types'

const DEFAULT_LABELS: DateRangeCalendarLabels = {
  previousMonth: 'Previous month',
  nextMonth: 'Next month',
}
const EMPTY_RANGE: DateRange = { start: null, end: null }

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

/** Day numbers for a month grid; 0 marks an empty leading/trailing cell. */
function buildMonthGrid(year: number, month: number, weekStartsOn: Weekday): number[] {
  const leading = (new Date(year, month, 1).getDay() - weekStartsOn + 7) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: number[] = Array(leading).fill(0)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(0)
  return cells
}

/** Two-letter weekday headers in `locale`, starting at `weekStartsOn`. */
function weekdayLabels(locale: string, weekStartsOn: Weekday): string[] {
  const fmt = new Intl.DateTimeFormat(locale, { weekday: 'short' })
  // 2023-01-01 was a Sunday.
  return Array.from({ length: 7 }, (_, i) =>
    fmt.format(new Date(2023, 0, 1 + ((weekStartsOn + i) % 7))).slice(0, 2)
  )
}

interface MonthGridProps {
  year: number
  month: number
  range: DateRange
  hoverDate: Date | null
  locale: string
  weekStartsOn: Weekday
  weekdays: string[]
  onDayClick: (date: Date) => void
  onDayHover: (date: Date | null) => void
}

function MonthGrid({
  year,
  month,
  range,
  hoverDate,
  locale,
  weekStartsOn,
  weekdays,
  onDayClick,
  onDayHover,
}: MonthGridProps) {
  const { start, end } = range
  const rangeEnd = end ?? hoverDate
  const dayLabel = new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className={styles.dayGrid}>
      {weekdays.map((label) => (
        <div key={label} className={styles.dayHeaderCell} aria-hidden="true">
          {label}
        </div>
      ))}
      {buildMonthGrid(year, month, weekStartsOn).map((day, idx) => {
        if (day === 0) {
          return <div key={idx} className={styles.dayCellHidden} aria-hidden="true" />
        }
        const date = new Date(year, month, day)
        const isStart = start !== null && isSameDay(date, start)
        const isEnd = end !== null && isSameDay(date, end)
        const hasSpan = start !== null && rangeEnd !== null && rangeEnd > start
        const inRange = hasSpan && date > start && date < rangeEnd

        return (
          <button
            key={idx}
            type="button"
            aria-label={dayLabel.format(date)}
            aria-pressed={isStart || isEnd}
            className={cn(
              styles.dayCell,
              (isStart || isEnd) && styles.dayCellActive,
              inRange && !isStart && !isEnd && styles.dayCellRange,
              isStart && hasSpan && styles.dayCellRangeStart,
              isEnd && start !== null && styles.dayCellRangeEnd
            )}
            onClick={() => onDayClick(date)}
            onMouseEnter={() => onDayHover(date)}
            onMouseLeave={() => onDayHover(null)}
          >
            {day}
          </button>
        )
      })}
    </div>
  )
}

/**
 * DateRangeCalendar — one or two month grids for picking a start/end date
 * (Figma `.Calendar` DatePicker=Calendar). Hovering after picking a start
 * previews the range. Month, weekday and day names follow `locale`.
 */
export function DateRangeCalendar({
  value,
  defaultValue = EMPTY_RANGE,
  onChange,
  locale = 'en-US',
  weekStartsOn = 0,
  months = 2,
  defaultMonth,
  labels,
  className,
  ref,
  ...props
}: DateRangeCalendarProps & { ref?: React.Ref<HTMLDivElement> }) {
  const l = { ...DEFAULT_LABELS, ...labels }
  const [range, setRange] = useControllableState({ value, defaultValue, onChange })

  // View state is pure interaction. It starts at the selected start month (if
  // any) so reopening a picker lands on the chosen range.
  const [view, setView] = useState(() => {
    const base = range.start ?? defaultMonth ?? new Date()
    return { year: base.getFullYear(), month: base.getMonth() }
  })
  const [selectingEnd, setSelectingEnd] = useState(range.start !== null && range.end === null)
  const [hoverDate, setHoverDate] = useState<Date | null>(null)

  const weekdays = useMemo(() => weekdayLabels(locale, weekStartsOn), [locale, weekStartsOn])
  const monthTitle = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' })

  const shift = (delta: number) =>
    setView(({ year, month }) => {
      const d = new Date(year, month + delta, 1)
      return { year: d.getFullYear(), month: d.getMonth() }
    })

  function handleDayClick(date: Date) {
    if (!selectingEnd || range.start === null || date < range.start) {
      setRange({ start: date, end: null })
      setSelectingEnd(true)
    } else {
      setRange({ start: range.start, end: date })
      setSelectingEnd(false)
    }
  }

  return (
    <div ref={ref} className={cn(styles.calendarMonths, className)} {...props}>
      {Array.from({ length: months }, (_, i) => {
        const d = new Date(view.year, view.month + i, 1)
        const isFirst = i === 0
        const isLast = i === months - 1
        return (
          <div key={i} className={styles.calendarMonth}>
            <div className={styles.monthHeader}>
              {isFirst && (
                <button
                  type="button"
                  aria-label={l.previousMonth}
                  className={cn(styles.monthNavBtn, styles.monthNavPrev)}
                  onClick={() => shift(-1)}
                >
                  <ChevronLeft size={16} />
                </button>
              )}
              <span className={styles.monthTitle}>{monthTitle.format(d)}</span>
              {isLast && (
                <button
                  type="button"
                  aria-label={l.nextMonth}
                  className={cn(styles.monthNavBtn, styles.monthNavNext)}
                  onClick={() => shift(1)}
                >
                  <ChevronRight size={16} />
                </button>
              )}
            </div>
            <MonthGrid
              year={d.getFullYear()}
              month={d.getMonth()}
              range={range}
              hoverDate={hoverDate}
              locale={locale}
              weekStartsOn={weekStartsOn}
              weekdays={weekdays}
              onDayClick={handleDayClick}
              onDayHover={setHoverDate}
            />
          </div>
        )
      })}
    </div>
  )
}

DateRangeCalendar.displayName = 'DateRangeCalendar'
