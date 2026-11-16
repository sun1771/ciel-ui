'use client'

import { useState } from 'react'
import { DateRangeCalendar, type DateRange } from '@cielui/react'

export default function Basic() {
  const [range, setRange] = useState<DateRange>({
    start: new Date(2026, 4, 9),
    end: new Date(2026, 4, 13),
  })
  return <DateRangeCalendar value={range} onChange={setRange} />
}
