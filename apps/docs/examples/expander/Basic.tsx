'use client'

import { useState } from 'react'
import { Expander } from '@acme/ui'

export default function Basic() {
  const [open, setOpen] = useState(false)
  return (
    <Expander label="Cancellation policy" isExpanded={open} onToggle={() => setOpen((o) => !o)}>
      Free cancellation until 48 hours before check-in.
    </Expander>
  )
}
