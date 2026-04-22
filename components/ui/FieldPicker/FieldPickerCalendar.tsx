'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronLeft } from '@/design-system/icons/components/ChevronLeft'
import { ChevronRight } from '@/design-system/icons/components/ChevronRight'
import type { CalendarPanelProps, FieldPickerDateRange } from './types'
import styles from './FieldPicker.module.css'

type CalendarTab = 'date' | 'flexible'

const FLEX_OPTIONS = ['Exact', '±1 day', '±2 days', '±3 days', '±1 week']

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
  startDate,
  endDate,
  onDateChange,
}: CalendarPanelProps) {
  const now = new Date()
  const [tab, setTab] = useState<CalendarTab>('date')
  const [flexibility, setFlexibility] = useState('Exact')
  const [viewYear, setViewYear] = useState(now.getFullYear())
  const [viewMonth, setViewMonth] = useState(now.getMonth())
  const [selectingEnd, setSelectingEnd] = useState(false)
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
      <div className={styles.tabGroup} role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'date'}
          className={cn(styles.tab, tab === 'date' && styles.tabActive)}
          onClick={() => setTab('date')}
        >
          Date
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'flexible'}
          className={cn(styles.tab, tab === 'flexible' && styles.tabActive)}
          onClick={() => setTab('flexible')}
        >
          Flexible
        </button>
      </div>

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

      {tab === 'flexible' && (
        <div className={styles.flexSection}>
          <span className={styles.flexTitle}>Flexibility</span>
          <div className={styles.flexChips}>
            {FLEX_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                className={cn(
                  styles.flexChip,
                  flexibility === option && styles.flexChipSelected
                )}
                onClick={() => setFlexibility(option)}
                aria-pressed={flexibility === option}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
