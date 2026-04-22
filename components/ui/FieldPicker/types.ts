import React from 'react'

export interface FieldPickerDateRange {
  start: Date | null
  end: Date | null
}

export interface FieldPickerTravelerCounts {
  adults: number
  children: number
  pets: number
  rooms: number
}

export type FieldPickerType = 'date' | 'traveler'

export interface FieldPickerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Controls which panel opens: date-range calendar or traveler counters. */
  type?: FieldPickerType
  /** Disables the trigger button and prevents opening the panel. */
  disabled?: boolean
  /** Controlled start date (date mode). */
  startDate?: Date | null
  /** Controlled end date (date mode). */
  endDate?: Date | null
  /** Called with the new range when the user selects dates. */
  onDateChange?: (range: FieldPickerDateRange) => void
  /** Controlled traveler counts (traveler mode). */
  travelers?: FieldPickerTravelerCounts
  /** Called with updated counts when the user changes any counter. */
  onTravelerChange?: (counts: FieldPickerTravelerCounts) => void
  /** Applied to the outer wrapper div. */
  className?: string
}

/** Internal — not exported from index.ts */
export interface CalendarPanelProps {
  startDate: Date | null
  endDate: Date | null
  onDateChange: (range: FieldPickerDateRange) => void
}

/** Internal — not exported from index.ts */
export interface TravelerPanelProps {
  adults: number
  children: number
  pets: number
  rooms: number
  onTravelerChange: (counts: FieldPickerTravelerCounts) => void
}
