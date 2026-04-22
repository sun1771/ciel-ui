'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { Calendar } from '@/design-system/icons/components/Calendar'
import { Users } from '@/design-system/icons/components/Users'
import { FieldPickerCalendar } from './FieldPickerCalendar'
import { FieldPickerTraveler } from './FieldPickerTraveler'
import type {
  FieldPickerProps,
  FieldPickerDateRange,
  FieldPickerTravelerCounts,
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

function formatTravelers(travelers: FieldPickerTravelerCounts): string {
  const total = travelers.adults + travelers.children
  const travelerStr = `${total} traveler${total !== 1 ? 's' : ''}`
  const roomStr = `${travelers.rooms} room${travelers.rooms !== 1 ? 's' : ''}`
  return `${travelerStr}, ${roomStr}`
}

/**
 * FieldPicker — compound trigger + dropdown.
 * type="date" opens a two-month calendar with date-range selection.
 * type="traveler" opens a traveler/room counter panel.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const FieldPicker = React.forwardRef<HTMLDivElement, FieldPickerProps>(
  (
    {
      type = 'date',
      disabled = false,
      startDate = null,
      endDate = null,
      onDateChange,
      travelers = DEFAULT_TRAVELERS,
      onTravelerChange,
      className,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const internalRef = useRef<HTMLDivElement>(null)

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

    function handleTriggerClick() {
      if (!disabled) setIsOpen((prev) => !prev)
    }

    function handleDateChange(range: FieldPickerDateRange) {
      onDateChange?.(range)
      if (range.end !== null) {
        setIsOpen(false)
      }
    }

    function handleTravelerChange(counts: FieldPickerTravelerCounts) {
      onTravelerChange?.(counts)
    }

    const isDate = type === 'date'
    const label = isDate
      ? formatDateRange(startDate, endDate)
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
                startDate={startDate}
                endDate={endDate}
                onDateChange={handleDateChange}
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
