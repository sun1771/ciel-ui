import { DateRangeCalendar } from '@acme/ui'

export default function Localised() {
  return (
    <DateRangeCalendar
      locale="de-DE"
      weekStartsOn={1}
      months={1}
      defaultMonth={new Date(2026, 4, 1)}
      labels={{ previousMonth: 'Vorheriger Monat', nextMonth: 'Nächster Monat' }}
    />
  )
}
