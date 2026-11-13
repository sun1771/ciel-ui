'use client'

import { useState } from 'react'
import { ButtonGroup, ButtonGroupItem } from '@acme/ui'
import { Calendar, Map } from '@acme/icons'

export default function Basic() {
  const [view, setView] = useState('list')
  return (
    <ButtonGroup aria-label="View">
      <ButtonGroupItem
        isSelected={view === 'list'}
        icon={<Calendar size={20} />}
        onClick={() => setView('list')}
      >
        List
      </ButtonGroupItem>
      <ButtonGroupItem
        isSelected={view === 'map'}
        icon={<Map size={20} />}
        onClick={() => setView('map')}
      >
        Map
      </ButtonGroupItem>
    </ButtonGroup>
  )
}
