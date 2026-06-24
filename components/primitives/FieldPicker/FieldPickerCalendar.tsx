'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronLeft } from '@/design-system/icons/components/ChevronLeft'
import { ChevronRight } from '@/design-system/icons/components/ChevronRight'
import { Info } from '@/design-system/icons/components/Info'
import { Calendar as CalendarIcon } from '@/design-system/icons/components/Calendar'
import { ButtonGroup, ButtonGroupItem } from '@/components/navigation/ButtonGroup'
import { Button, ButtonVertical } from '@/components/primitives/Button'
import { CarouselItem } from '@/components/navigation/Carousel'
import { Checkbox } from '@/components/primitives/Checkbox'
import type {
  CalendarPanelProps,
  FieldPickerFlexibility,
  FieldPickerTripLength,
} from './types'
import styles from './FieldPicker.module.css'

/** Tab 1 flexibility options — exact Figma `DatePicker=Calendar` labels. */
export const FLEX_OPTIONS: readonly FieldPickerFlexibility[] = [
  'Exact date',
  '+- 1 day',
  '+- 2 day',
  '+- 3 day',
  '+- 7 day',
  '+- 14 day',
]

/** Tab 2 "How long?" trip-length options — exact Figma `DatePicker=Flexible` labels. */
export const TRIP_LENGTH_OPTIONS: readonly FieldPickerTripLength[] = [
  '1 night',
  '2-3 nights',
  '4-5 nights',
  'week',
  '2 week',
  'month',
]

/** Full month names — used for the trigger label, e.g. "4-5 nights in June". */
export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

/** Abbreviated month names — used for the compact "When?" month-grid cells. */
const MONTH_ABBR = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

/**
 * Number of ± days a flexibility option represents, or null for "Exact date".
 * Used to render the trigger suffix, e.g. "… (+- 1)".
 */
export function flexibilityDays(flex: FieldPickerFlexibility): number | null {
  if (flex === 'Exact date') return null
  const match = flex.match(/\d+/)
  return match ? Number(match[0]) : null
}

const DAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function isInRange(date: Date, start: Date, end: Date): boolean {
  const t = date.getTime()
  return t > start.getTime() && t < end.getTime()
}

function formatMonthYear(year: number, month: number): string {
  return new Date(year, month, 1).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  })
}

/** Returns a 42-cell (6×7) array for the month grid. 0 = empty leading/trailing cell. */
function buildMonthGrid(year: number, month: number): number[] {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: number[] = Array(firstDay).fill(0)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(0)
  return cells
}

interface MonthGridProps {
  year: number
  month: number
  startDate: Date | null
  endDate: Date | null
  hoverDate: Date | null
  onDayClick: (date: Date) => void
  onDayHover: (date: Date | null) => void
}

function MonthGrid({
  year,
  month,
  startDate,
  endDate,
  hoverDate,
  onDayClick,
  onDayHover,
}: MonthGridProps) {
  const cells = buildMonthGrid(year, month)
  const rangeEnd = endDate ?? hoverDate

  return (
    <div className={styles.dayGrid}>
      {DAY_LABELS.map((label) => (
        <div key={label} className={styles.dayHeaderCell} aria-hidden="true">
          {label}
        </div>
      ))}
      {cells.map((day, idx) => {
        if (day === 0) {
          return <div key={idx} className={styles.dayCellHidden} aria-hidden="true" />
        }
        const date = new Date(year, month, day)
        const isStart = startDate !== null && isSameDay(date, startDate)
        const isEnd = endDate !== null && isSameDay(date, endDate)
        const inRange =
          startDate !== null &&
          rangeEnd !== null &&
          rangeEnd > startDate &&
          isInRange(date, startDate, rangeEnd)

        return (
          <button
            key={idx}
            type="button"
            aria-label={date.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
            aria-pressed={isStart || isEnd}
            className={cn(
              styles.dayCell,
              (isStart || isEnd) && styles.dayCellActive,
              inRange && !isStart && !isEnd && styles.dayCellRange,
              isStart && rangeEnd !== null && rangeEnd > startDate && styles.dayCellRangeStart,
              isEnd && startDate !== null && styles.dayCellRangeEnd
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

export function FieldPickerCalendar({
  activeTab,
  onTabChange,
  startDate,
  endDate,
  onDateChange,
  flexibility,
  onFlexibilityChange,
  tripLength,
  onTripLengthChange,
  includeWeekend,
  onIncludeWeekendChange,
  selectedMonth,
  displayYear,
  onMonthSelect,
  onYearChange,
}: CalendarPanelProps) {
  // Two-month view state is pure interaction — kept local. Initialised to the
  // selected start month (if any) so reopening lands on the chosen range.
  const base = startDate ?? new Date()
  const [viewYear, setViewYear] = useState(base.getFullYear())
  const [viewMonth, setViewMonth] = useState(base.getMonth())
  const [selectingEnd, setSelectingEnd] = useState(startDate !== null && endDate === null)
  const [hoverDate, setHoverDate] = useState<Date | null>(null)

  const nextYear = viewMonth === 11 ? viewYear + 1 : viewYear
  const nextMonth = viewMonth === 11 ? 0 : viewMonth + 1

  function navigatePrev() {
    if (viewMonth === 0) {
      setViewYear((y) => y - 1)
      setViewMonth(11)
    } else {
      setViewMonth((m) => m - 1)
    }
  }

  function navigateNext() {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1)
      setViewMonth(0)
    } else {
      setViewMonth((m) => m + 1)
    }
  }

  function handleDayClick(date: Date) {
    if (!selectingEnd || startDate === null) {
      onDateChange({ start: date, end: null })
      setSelectingEnd(true)
    } else {
      if (date >= startDate) {
        onDateChange({ start: startDate, end: date })
        setSelectingEnd(false)
      } else {
        onDateChange({ start: date, end: null })
        setSelectingEnd(true)
      }
    }
  }

  return (
    <div>
      {/* Tab switcher — Figma "Button Group" (Date | Flexible, Info icon each) */}
      <ButtonGroup className={styles.tabSwitcher} aria-label="Date picker mode">
        <ButtonGroupItem
          className={styles.tabItem}
          isSelected={activeTab === 'Calendar'}
          icon={<Info size={20} />}
          onClick={() => onTabChange('Calendar')}
        >
          Date
        </ButtonGroupItem>
        <ButtonGroupItem
          className={styles.tabItem}
          isSelected={activeTab === 'Flexible'}
          icon={<Info size={20} />}
          onClick={() => onTabChange('Flexible')}
        >
          Flexible
        </ButtonGroupItem>
      </ButtonGroup>

      {/* Both panels are always rendered, stacked in one grid cell so the panel
          keeps a constant width + height across tabs; the inactive one is
          hidden (no layout shift, removed from a11y + tab order). */}
      <div className={styles.tabPanels}>
        {/* ── Tab 1: DatePicker=Calendar ─────────────────────── */}
        <div
          className={cn(
            styles.tabPanel,
            styles.calendarTab,
            activeTab !== 'Calendar' && styles.tabPanelHidden
          )}
          aria-hidden={activeTab !== 'Calendar'}
        >
          <div className={styles.calendarMonths}>
            {/* Left month */}
            <div className={styles.calendarMonth}>
              <div className={styles.monthHeader}>
                <button
                  type="button"
                  aria-label="Previous month"
                  className={cn(styles.monthNavBtn, styles.monthNavPrev)}
                  onClick={navigatePrev}
                >
                  <ChevronLeft size={16} />
                </button>
                <span className={styles.monthTitle}>
                  {formatMonthYear(viewYear, viewMonth)}
                </span>
              </div>
              <MonthGrid
                year={viewYear}
                month={viewMonth}
                startDate={startDate}
                endDate={endDate}
                hoverDate={hoverDate}
                onDayClick={handleDayClick}
                onDayHover={setHoverDate}
              />
            </div>

            {/* Right month */}
            <div className={styles.calendarMonth}>
              <div className={styles.monthHeader}>
                <span className={styles.monthTitle}>
                  {formatMonthYear(nextYear, nextMonth)}
                </span>
                <button
                  type="button"
                  aria-label="Next month"
                  className={cn(styles.monthNavBtn, styles.monthNavNext)}
                  onClick={navigateNext}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
              <MonthGrid
                year={nextYear}
                month={nextMonth}
                startDate={startDate}
                endDate={endDate}
                hoverDate={hoverDate}
                onDayClick={handleDayClick}
                onDayHover={setHoverDate}
              />
            </div>
          </div>

          {/* Flexibility options — Button (outline); selected = action-hover */}
          <div className={styles.optionRow}>
            {FLEX_OPTIONS.map((option) => (
              <Button
                key={option}
                variant="outline"
                size="lg"
                aria-pressed={flexibility === option}
                className={cn(flexibility === option && styles.optionSelected)}
                onClick={() => onFlexibilityChange(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>

        {/* ── Tab 2: DatePicker=Flexible ─────────────────────── */}
        <div
          className={cn(
            styles.tabPanel,
            styles.flexibleTab,
            activeTab !== 'Flexible' && styles.tabPanelHidden
          )}
          aria-hidden={activeTab !== 'Flexible'}
        >
          {/* "How long?" — trip length options + include-weekend checkbox */}
          <div className={styles.flexGroup}>
            <span className={styles.flexHeading}>How long?</span>
            <div className={styles.optionRow}>
              {TRIP_LENGTH_OPTIONS.map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  size="lg"
                  aria-pressed={tripLength === option}
                  className={cn(tripLength === option && styles.optionSelected)}
                  onClick={() => onTripLengthChange(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
            <Checkbox
              checked={includeWeekend}
              onChange={(e) => onIncludeWeekendChange(e.target.checked)}
            >
              Include weekend
            </Checkbox>
          </div>

          {/* "When?" — month picker: CarouselItem year nav + abbreviated month grid */}
          <div className={styles.flexGroup}>
            <span className={styles.flexHeading}>When?</span>
            <div className={styles.monthNav}>
              <CarouselItem
                direction="left"
                shape="round"
                size="sm"
                label="Previous year"
                onClick={() => onYearChange(displayYear - 1)}
              />
              <span className={styles.monthNavYear} aria-live="polite" aria-atomic="true">
                {displayYear}
              </span>
              <CarouselItem
                direction="right"
                shape="round"
                size="sm"
                label="Next year"
                onClick={() => onYearChange(displayYear + 1)}
              />
            </div>
            <div className={styles.monthGrid}>
              {MONTH_ABBR.map((month, idx) => (
                <ButtonVertical
                  key={month}
                  variant="outline"
                  size="lg"
                  iconTop={<CalendarIcon size={20} />}
                  aria-pressed={selectedMonth === idx}
                  aria-label={MONTH_NAMES[idx]}
                  className={cn(
                    styles.monthCell,
                    selectedMonth === idx && styles.optionSelected
                  )}
                  onClick={() => onMonthSelect(idx)}
                >
                  {month}
                </ButtonVertical>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
