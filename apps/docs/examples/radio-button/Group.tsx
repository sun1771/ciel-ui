'use client'

import { useState } from 'react'
import { RadioButton } from '@acme/ui'

const CABINS = ['Economy', 'Premium', 'Business']

export default function Group() {
  const [cabin, setCabin] = useState('Economy')
  return (
    <fieldset style={{ border: 0, padding: 0, display: 'grid', gap: 10 }}>
      <legend style={{ marginBottom: 8 }}>Cabin</legend>
      {CABINS.map((c) => (
        <RadioButton
          key={c}
          name="cabin"
          value={c}
          checked={cabin === c}
          onChange={() => setCabin(c)}
        >
          {c}
        </RadioButton>
      ))}
    </fieldset>
  )
}
