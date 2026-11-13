'use client'

import React, { useEffect, useState } from 'react'
import { FieldPicker } from '@acme/ui'
import { Calendar } from '@acme/icons'
import { MONTH_ABBR, TravelDatePanel, flexibilityDays } from './TravelDatePanel'
import type {
  DateFlexibility,
  DatePickerTab,
  DateRange,
  TravelDatePickerProps,
  TripLength,
} from './travelPickerTypes'

/**
 * Recipe: travel date picker — FieldPicker + TravelDatePanel.
 *
 * All selection state (range, flexibility, tab, trip length, month) lives here
 * so it survives the panel closing and is reflected in the field's summary.
 * The range may be controlled (`startDate`/`endDate`) or uncontrolled.
 * Example code for the docs site, not part of @acme/ui.
 */

function formatDateRange(start: Date | null, end: Date | null): string | null {
  if (start === null) return null
  const opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' }
  const startStr = start.toLocaleString('en-US', opts)
  return end === null ? startStr : `${startStr} – ${end.toLocaleString('en-US', opts)}`
}

/** e.g. "Jan 9 – Jan 13" or "Jan 9 – Jan 13 (± 1)". */
export function formatCalendarLabel(
  start: Date | null,
  end: Date | null,
  flexibility: DateFlexibility
): string | null {
  const base = formatDateRange(start, end)
  if (base === null) return null
  const days = flexibilityDays(flexibility)
  return days !== null ? `${base} (± ${days})` : base
}

/** e.g. "4-5 nights in Jan 2026". */
export function formatFlexibleLabel(
  tripLength: TripLength | null,
  month: number | null,
  year: number
): string | null {
  if (tripLength !== null && month !== null) return `${tripLength} in ${MONTH_ABBR[month]} ${year}`
  if (tripLength !== null) return tripLength
  if (month !== null) return `${MONTH_ABBR[month]} ${year}`
  return null
}

export function TravelDatePicker({
  startDate,
  endDate,
  onDateChange,
  onSelectionChange,
  ...props
}: TravelDatePickerProps) {
  const isRangeControlled = startDate !== undefined || endDate !== undefined
  const [internalRange, setInternalRange] = useState<DateRange>({ start: null, end: null })
  const rangeStart = isRangeControlled ? (startDate ?? null) : internalRange.start
  const rangeEnd = isRangeControlled ? (endDate ?? null) : internalRange.end

  const [activeTab, setActiveTab] = useState<DatePickerTab>('Calendar')
  const [flexibility, setFlexibility] = useState<DateFlexibility>('Exact date')
  const [tripLength, setTripLength] = useState<TripLength | null>(null)
  const [includeWeekend, setIncludeWeekend] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)
  const [displayYear, setDisplayYear] = useState(() => new Date().getFullYear())

  // Report the full selection whenever any part of it changes. Dates are
  // compared by timestamp so a parent re-render with new Date objects is a no-op.
  const startTime = rangeStart?.getTime() ?? null
  const endTime = rangeEnd?.getTime() ?? null
  useEffect(() => {
    onSelectionChange?.({
      tab: activeTab,
      start: startTime !== null ? new Date(startTime) : null,
      end: endTime !== null ? new Date(endTime) : null,
      flexibility,
      tripLength,
      includeWeekend,
      month: selectedMonth,
      year: displayYear,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps -- onSelectionChange identity is not a trigger
  }, [
    activeTab,
    startTime,
    endTime,
    flexibility,
    tripLength,
    includeWeekend,
    selectedMonth,
    displayYear,
  ])

  function handleDateChange(range: DateRange) {
    if (!isRangeControlled) setInternalRange(range)
    onDateChange?.(range)
  }

  const summary =
    activeTab === 'Flexible'
      ? formatFlexibleLabel(tripLength, selectedMonth, displayYear)
      : formatCalendarLabel(rangeStart, rangeEnd, flexibility)

  return (
    <FieldPicker
      {...props}
      icon={<Calendar size={20} />}
      value={summary}
      placeholder="Select dates"
      panelLabel="Select date range"
    >
      <TravelDatePanel
        activeTab={activeTab}
        onTabChange={setActiveTab}
        startDate={rangeStart}
        endDate={rangeEnd}
        onDateChange={handleDateChange}
        flexibility={flexibility}
        onFlexibilityChange={setFlexibility}
        tripLength={tripLength}
        onTripLengthChange={setTripLength}
        includeWeekend={includeWeekend}
        onIncludeWeekendChange={setIncludeWeekend}
        selectedMonth={selectedMonth}
        displayYear={displayYear}
        onMonthSelect={setSelectedMonth}
        onYearChange={setDisplayYear}
      />
    </FieldPicker>
  )
}
