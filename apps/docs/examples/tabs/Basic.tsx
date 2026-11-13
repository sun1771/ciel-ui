'use client'

import { useState } from 'react'
import { TabBar, TabItem } from '@acme/ui'
import { Bed, Car, Trip } from '@acme/icons'

const TABS = [
  { id: 'stays', label: 'Stays', icon: <Bed size={20} /> },
  { id: 'flights', label: 'Flights', icon: <Trip size={20} /> },
  { id: 'cars', label: 'Cars', icon: <Car size={20} /> },
]

export default function Basic() {
  const [tab, setTab] = useState('stays')
  return (
    <TabBar aria-label="Search type">
      {TABS.map((t) => (
        <TabItem key={t.id} icon={t.icon} isSelected={tab === t.id} onClick={() => setTab(t.id)}>
          {t.label}
        </TabItem>
      ))}
    </TabBar>
  )
}
