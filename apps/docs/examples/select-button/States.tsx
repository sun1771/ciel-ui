'use client'

import { SelectButton } from '@cielui/react'

export default function States() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <SelectButton variant="outline">Closed</SelectButton>
      <SelectButton variant="outline" isSelected>
        Open
      </SelectButton>
      <SelectButton variant="outline" disabled>
        Disabled
      </SelectButton>
    </div>
  )
}
