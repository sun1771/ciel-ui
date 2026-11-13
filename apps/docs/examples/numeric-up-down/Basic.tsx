'use client'

import { useState } from 'react'
import { NumericUpDown } from '@acme/ui'

export default function Basic() {
  const [guests, setGuests] = useState(2)
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <span id="guests-label">Guests</span>
      <NumericUpDown
        aria-labelledby="guests-label"
        value={guests}
        min={1}
        max={8}
        onChange={setGuests}
      />
    </div>
  )
}
