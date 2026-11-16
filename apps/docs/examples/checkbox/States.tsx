'use client'

import { useState } from 'react'
import { Checkbox } from '@cielui/react'

export default function States() {
  const [weekend, setWeekend] = useState(true)
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Checkbox checked={weekend} onChange={(e) => setWeekend(e.target.checked)}>
        Include weekend
      </Checkbox>
      <Checkbox>Flexible dates</Checkbox>
      <Checkbox error>I accept the terms</Checkbox>
      <Checkbox disabled>Unavailable option</Checkbox>
    </div>
  )
}
