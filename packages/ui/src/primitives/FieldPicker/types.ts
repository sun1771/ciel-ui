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

/**
 * Calendar panel tab values — the exact Figma `.Calendar` `DatePicker`
 * variant names. The visible ButtonGroup labels read "Date" / "Flexible";
 * these canonical strings drive the `activeTab` state and conditional rendering.
 */
export type CalendarDatePickerTab = 'Calendar' | 'Flexible'

/** Tab 1 flexibility options. Figma source labels use "+-"; rendered as "±" per design. */
export type FieldPickerFlexibility =
  | 'Exact date'
  | '± 1 day'
  | '± 2 day'
  | '± 3 day'
  | '± 7 day'
  | '± 14 day'

/** Tab 2 "How long?" trip-length options — exact Figma `DatePicker=Flexible` labels. */
export type FieldPickerTripLength =
  | '1 night'
  | '2-3 nights'
  | '4-5 nights'
  | 'week'
  | '2 week'
  | 'month'

/**
 * Full date-mode selection reported via `onSelectionChange`. Captures both the
 * Calendar-tab range (+ flexibility) and the Flexible-tab choices so consumers
 * can read whichever the user committed to (determined by `tab`).
 */
export interface FieldPickerDateSelection {
  /** Which tab the selection belongs to. */
  tab: CalendarDatePickerTab
  /** Calendar tab — range start. */
  start: Date | null
  /** Calendar tab — range end. */
  end: Date | null
  /** Calendar tab — date flexibility. */
  flexibility: FieldPickerFlexibility
  /** Flexible tab — chosen trip length. */
  tripLength: FieldPickerTripLength | null
  /** Flexible tab — include-weekend toggle. */
  includeWeekend: boolean
  /** Flexible tab — selected month (0–11), or null. */
  month: number | null
  /** Flexible tab — year shown in the month picker. */
  year: number
}

export interface FieldPickerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Controls which panel opens: date-range calendar or traveler counters. */
  type?: FieldPickerType
  /** Disables the trigger button and prevents opening the panel. */
  disabled?: boolean
  /** Controlled start date (date mode). Omit for uncontrolled. */
  startDate?: Date | null
  /** Controlled end date (date mode). Omit for uncontrolled. */
  endDate?: Date | null
  /** Called with the new range when the user selects dates. */
  onDateChange?: (range: FieldPickerDateRange) => void
  /**
   * Called whenever any part of the date-mode selection changes (range,
   * flexibility, tab, trip length, month, …). Use this to read the full
   * selection that the trigger label reflects.
   */
  onSelectionChange?: (selection: FieldPickerDateSelection) => void
  /** Controlled traveler counts (traveler mode). */
  travelers?: FieldPickerTravelerCounts
  /** Called with updated counts when the user changes any counter. */
  onTravelerChange?: (counts: FieldPickerTravelerCounts) => void
  /** Applied to the outer wrapper div. */
  className?: string
}

/**
 * Internal — not exported from index.ts.
 * FieldPickerCalendar is fully controlled: all selection state is owned by the
 * parent FieldPicker (so it survives the panel closing) and supplied via props.
 */
export interface CalendarPanelProps {
  activeTab: CalendarDatePickerTab
  onTabChange: (tab: CalendarDatePickerTab) => void
  startDate: Date | null
  endDate: Date | null
  onDateChange: (range: FieldPickerDateRange) => void
  flexibility: FieldPickerFlexibility
  onFlexibilityChange: (value: FieldPickerFlexibility) => void
  tripLength: FieldPickerTripLength | null
  onTripLengthChange: (value: FieldPickerTripLength) => void
  includeWeekend: boolean
  onIncludeWeekendChange: (value: boolean) => void
  selectedMonth: number | null
  displayYear: number
  onMonthSelect: (month: number) => void
  onYearChange: (year: number) => void
}

/** Internal — not exported from index.ts */
export interface TravelerPanelProps {
  adults: number
  children: number
  pets: number
  rooms: number
  onTravelerChange: (counts: FieldPickerTravelerCounts) => void
}
