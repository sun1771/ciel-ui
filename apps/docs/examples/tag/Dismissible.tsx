'use client'

import { useState } from 'react'
import { Tag } from '@acme/ui'

export default function Dismissible() {
  const [filters, setFilters] = useState(['Free cancellation', 'Breakfast', 'Pool'])
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {filters.map((f) => (
        <Tag key={f} onDismiss={() => setFilters((all) => all.filter((x) => x !== f))}>
          {f}
        </Tag>
      ))}
      {filters.length === 0 && <span>No filters</span>}
    </div>
  )
}
