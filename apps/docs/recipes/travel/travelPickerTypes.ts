import type { DateRange, FieldPickerProps } from '@cielui/react'

export type { DateRange }

export interface TravelerCounts {
  adults: number
  children: number
  pets: number
  rooms: number
}

/** Calendar panel tabs — the Figma `.Calendar` `DatePicker` variant names. */
export type DatePickerTab = 'Calendar' | 'Flexible'

/** Calendar-tab flexibility options. Figma source labels use "+-"; rendered as "±". */
export type DateFlexibility =
  'Exact date' | '± 1 day' | '± 2 day' | '± 3 day' | '± 7 day' | '± 14 day'

/** Flexible-tab "How long?" options. */
export type TripLength = '1 night' | '2-3 nights' | '4-5 nights' | 'week' | '2 week' | 'month'

/** Everything the travel date picker knows; `tab` says which part the user committed to. */
export interface TravelDateSelection {
  tab: DatePickerTab
  start: Date | null
  end: Date | null
  flexibility: DateFlexibility
  tripLength: TripLength | null
  includeWeekend: boolean
  /** Flexible tab — selected month (0–11), or null. */
  month: number | null
  /** Flexible tab — year shown in the month picker. */
  year: number
}

type PickerShellProps = Omit<
  FieldPickerProps,
  'children' | 'value' | 'placeholder' | 'icon' | 'panelLabel'
>

export interface TravelDatePickerProps extends PickerShellProps {
  /** Controlled start date. Omit start and end for uncontrolled. */
  startDate?: Date | null
  /** Controlled end date. */
  endDate?: Date | null
  onDateChange?: (range: DateRange) => void
  /** Fires whenever any part of the selection changes. */
  onSelectionChange?: (selection: TravelDateSelection) => void
}

export interface TravelerPickerProps extends PickerShellProps {
  /** Controlled counts. Omit for uncontrolled. */
  travelers?: TravelerCounts
  /** Initial counts when uncontrolled. Default: 1 adult, 1 room. */
  defaultTravelers?: TravelerCounts
  onTravelerChange?: (counts: TravelerCounts) => void
}

/** The controlled Date / Flexible panel shown inside TravelDatePicker. */
export interface TravelDatePanelProps {
  activeTab: DatePickerTab
  onTabChange: (tab: DatePickerTab) => void
  startDate: Date | null
  endDate: Date | null
  onDateChange: (range: DateRange) => void
  flexibility: DateFlexibility
  onFlexibilityChange: (value: DateFlexibility) => void
  tripLength: TripLength | null
  onTripLengthChange: (value: TripLength) => void
  includeWeekend: boolean
  onIncludeWeekendChange: (value: boolean) => void
  selectedMonth: number | null
  displayYear: number
  onMonthSelect: (month: number) => void
  onYearChange: (year: number) => void
}
