'use client'

import { useState } from 'react'
import {
  NavigationLogoItem,
  NavigationMenuGroup,
  NavigationMenuItem,
  NavigationPanel,
  NavigationProfileItem,
} from '@cielui/react'
import { Bag, Calendar, Map, Sparkle } from '@cielui/icons'

const ITEMS = [
  { id: 'trips', label: 'Trips', icon: <Calendar size={20} /> },
  { id: 'packages', label: 'Packages', icon: <Bag size={20} /> },
  { id: 'explore', label: 'Explore', icon: <Map size={20} /> },
]

export default function Basic() {
  const [expanded, setExpanded] = useState(true)
  const [current, setCurrent] = useState('trips')
  return (
    <div style={{ height: 440, display: 'flex' }}>
      <NavigationPanel isExpanded={expanded} onToggle={() => setExpanded((e) => !e)}>
        <NavigationMenuGroup gap="lg">
          <NavigationLogoItem
            logo={<Sparkle size={32} role="img" aria-label="Acme" />}
            collapsedLogo={<Sparkle size={32} aria-hidden="true" />}
          />
          <NavigationMenuGroup gap="xxs">
            {ITEMS.map((item) => (
              <NavigationMenuItem
                key={item.id}
                icon={item.icon}
                isSelected={current === item.id}
                onClick={() => setCurrent(item.id)}
              >
                {item.label}
              </NavigationMenuItem>
            ))}
          </NavigationMenuGroup>
        </NavigationMenuGroup>
        <NavigationProfileItem userName="Sam Kim" avatarInitials="SK" />
      </NavigationPanel>
    </div>
  )
}
