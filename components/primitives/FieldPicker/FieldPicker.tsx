'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { Calendar } from '@/design-system/icons/components/Calendar'
import { Users } from '@/design-system/icons/components/Users'
import {
  FieldPickerCalendar,
  MONTH_NAMES,
  flexibilityDays,
} from './FieldPickerCalendar'
import { FieldPickerTraveler } from './FieldPickerTraveler'
import type {
  FieldPickerProps,
  FieldPickerDateRange,
  FieldPickerTravelerCounts,
  CalendarDatePickerTab,
  FieldPickerFlexibility,
  FieldPickerTripLength,
} from './types'
import styles from './FieldPicker.module.css'

const DEFAULT_TRAVELERS: FieldPickerTravelerCounts = {
  adults: 1,
  children: 0,
  pets: 0,
  rooms: 1,
}

function formatDateRange(start: Date | null, end: Date | null): string | null {
  if (start === null) return null
  const opts: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }
  const startStr = start.toLocaleString('en-US', opts)
  if (end === null) return startStr
  return `${startStr} – ${end.toLocaleString('en-US', opts)}`
}

/** Calendar tab label, e.g. "Tue, May 9 – Sat, May 13" or "… (+- 1)". */
function formatCalendarLabel(
  start: Date | null,
  end: Date | null,
  flexibility: FieldPickerFlexibility
): string | null {
  const base = formatDateRange(start, end)
  if (base === null) return null
  const days = flexibilityDays(flexibility)
  return days !== null ? `${base} (+- ${days})` : base
}

/** Flexible tab label, e.g. "4-5 nights in June". */
function formatFlexibleLabel(
  tripLength: FieldPickerTripLength | null,
  month: number | null,
  year: number
): string | null {
  if (tripLength !== null && month !== null) {
    return `${tripLength} in ${MONTH_NAMES[month]}`
  }
  if (tripLength !== null) return tripLength
  if (month !== null) return `${MONTH_NAMES[month]} ${year}`
  return null
}

function formatTravelers(travelers: FieldPickerTravelerCounts): string {
  const total = travelers.adults + travelers.children
  const travelerStr = `${total} traveler${total !== 1 ? 's' : ''}`
  const roomStr = `${travelers.rooms} room${travelers.rooms !== 1 ? 's' : ''}`
  return `${travelerStr}, ${roomStr}`
}

/**
 * FieldPicker — compound trigger + dropdown.
 * type="date" opens a two-month calendar (Date tab) / flexible month picker
 * (Flexible tab). type="traveler" opens a traveler/room counter panel.
 *
 * All date-mode selection state (range, flexibility, tab, trip length, month)
 * is owned here so it survives the panel closing and is reflected in the
 * trigger label. The date range may be controlled (`startDate`/`endDate`) or
 * left uncontrolled (managed internally).
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const FieldPicker = React.forwardRef<HTMLDivElement, FieldPickerProps>(
  (
    {
      type = 'date',
      disabled = false,
      startDate,
      endDate,
      onDateChange,
      onSelectionChange,
      travelers = DEFAULT_TRAVELERS,
      onTravelerChange,
      className,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const internalRef = useRef<HTMLDivElement>(null)

    // Date range: controlled when either date prop is supplied, else internal.
    const isDateControlled = startDate !== undefined || endDate !== undefined
    const [internalRange, setInternalRange] = useState<FieldPickerDateRange>({
      start: null,
      end: null,
    })
    const rangeStart = isDateControlled ? startDate ?? null : internalRange.start
    const rangeEnd = isDateControlled ? endDate ?? null : internalRange.end

    // Remaining date-mode selection state — always owned here so it persists
    // across open/close (FieldPicker stays mounted; the panel does not).
    const [activeTab, setActiveTab] = useState<CalendarDatePickerTab>('Calendar')
    const [flexibility, setFlexibility] = useState<FieldPickerFlexibility>('Exact date')
    const [tripLength, setTripLength] = useState<FieldPickerTripLength | null>(null)
    const [includeWeekend, setIncludeWeekend] = useState(false)
    const [selectedMonth, setSelectedMonth] = useState<number | null>(null)
    const [displayYear, setDisplayYear] = useState(() => new Date().getFullYear())

    const wrapperRef = (node: HTMLDivElement | null) => {
      ;(internalRef as React.MutableRefObject<HTMLDivElement | null>).current = node
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref) {
        ;(ref as React.MutableRefObject<HTMLDivElement | null>).current = node
      }
    }

    const close = useCallback(() => setIsOpen(false), [])

    useEffect(() => {
      if (!isOpen) return

      function handleClickOutside(event: MouseEvent) {
        if (
          internalRef.current &&
          !internalRef.current.contains(event.target as Node)
        ) {
          close()
        }
      }

      function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Escape') close()
      }

      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [isOpen, close])

    // Report the full date-mode selection whenever any part of it changes.
    const startTime = rangeStart?.getTime() ?? null
    const endTime = rangeEnd?.getTime() ?? null
    useEffect(() => {
      if (type !== 'date') return
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
      // startTime/endTime are primitive snapshots of the dates to avoid
      // re-running on every parent re-render (new Date identity).
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      type,
      activeTab,
      startTime,
      endTime,
      flexibility,
      tripLength,
      includeWeekend,
      selectedMonth,
      displayYear,
    ])

    function handleTriggerClick() {
      if (!disabled) setIsOpen((prev) => !prev)
    }

    // Note: no auto-close on range completion — the user may still pick a
    // flexibility option after selecting a range. The panel closes on
    // click-outside or Escape.
    function handleDateChange(range: FieldPickerDateRange) {
      if (!isDateControlled) setInternalRange(range)
      onDateChange?.(range)
    }

    function handleTravelerChange(counts: FieldPickerTravelerCounts) {
      onTravelerChange?.(counts)
    }

    const isDate = type === 'date'
    const label = isDate
      ? activeTab === 'Flexible'
        ? formatFlexibleLabel(tripLength, selectedMonth, displayYear)
        : formatCalendarLabel(rangeStart, rangeEnd, flexibility)
      : formatTravelers(travelers)
    const placeholder = isDate ? 'Select dates' : 'Add travelers'
    const TriggerIcon = isDate ? Calendar : Users

    return (
      <div
        ref={wrapperRef}
        className={cn(styles.wrapper, className)}
        {...props}
      >
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-disabled={disabled}
          disabled={disabled}
          className={cn(
            styles.trigger,
            isOpen && styles.triggerOpen,
            disabled && styles.triggerDisabled
          )}
          onClick={handleTriggerClick}
        >
          <TriggerIcon size={20} aria-hidden="true" />
          <span
            className={cn(
              styles.triggerLabel,
              label === null && styles.triggerPlaceholder
            )}
          >
            {label ?? placeholder}
          </span>
          <span className={styles.triggerIcon} aria-hidden="true" />
        </button>

        {isOpen && (
          <div
            role="dialog"
            aria-modal="false"
            aria-label={isDate ? 'Select date range' : 'Select travelers'}
            className={styles.panel}
          >
            {isDate ? (
              <FieldPickerCalendar
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
            ) : (
              <FieldPickerTraveler
                adults={travelers.adults}
                children={travelers.children}
                pets={travelers.pets}
                rooms={travelers.rooms}
                onTravelerChange={handleTravelerChange}
              />
            )}
          </div>
        )}
      </div>
    )
  }
)

FieldPicker.displayName = 'FieldPicker'
