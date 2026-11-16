'use client'

import { useState } from 'react'
import { DateRangeCalendar, FieldPicker, type DateRange } from '@cielui/react'
import { Calendar } from '@cielui/icons'

const fmt = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' })

export default function DateRangePicker() {
  const [range, setRange] = useState<DateRange>({ start: null, end: null })
  const summary = range.start
    ? `${fmt.format(range.start)}${range.end ? ` – ${fmt.format(range.end)}` : ''}`
    : undefined

  return (
    <div style={{ width: 280, minHeight: 480 }}>
      <FieldPicker
        icon={<Calendar size={20} />}
        value={summary}
        placeholder="Select dates"
        panelLabel="Select date range"
      >
        <DateRangeCalendar value={range} onChange={setRange} />
      </FieldPicker>
    </div>
  )
}
