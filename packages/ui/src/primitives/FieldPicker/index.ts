export { FieldPicker } from './FieldPicker'
export type {
  FieldPickerProps,
  FieldPickerType,
  FieldPickerDateRange,
  FieldPickerTravelerCounts,
  FieldPickerDateSelection,
  FieldPickerFlexibility,
  FieldPickerTripLength,
  CalendarDatePickerTab,
} from './types'
// TEMPORARY (Phase 1 extracts a generic DatePicker): the docs preview renders the
// open calendar panel directly, so expose it and its helpers.
export {
  FieldPickerCalendar,
  MONTH_NAMES,
  MONTH_ABBR,
  flexibilityDays,
} from './FieldPickerCalendar'
