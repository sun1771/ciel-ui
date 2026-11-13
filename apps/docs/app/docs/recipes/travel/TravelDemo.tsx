'use client'

import { TravelResultCard } from '@/recipes/travel/TravelResultCard'
import { TravelDatePicker } from '@/recipes/travel/TravelDatePicker'
import { TravelerPicker } from '@/recipes/travel/TravelerPicker'

const photo = (color: string, label: string) => (
  <div role="img" aria-label={label} style={{ width: '100%', height: '100%', background: color }} />
)

export function SearchBar() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', minHeight: 520 }}>
      <div style={{ width: 280 }}>
        <TravelDatePicker />
      </div>
      <div style={{ width: 240 }}>
        <TravelerPicker />
      </div>
    </div>
  )
}

export function Results() {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <TravelResultCard
        type="hotel"
        status="recommended"
        headline="Riverside Inn"
        ratingScore="8.8"
        tagLabel="Cheapest"
        roomInfo="1 room, king bed"
        price="$612"
        images={[photo('#c7d0ff', 'Lobby'), photo('#ffd7c2', 'Room'), photo('#c9f2d6', 'Garden')]}
      />
      <TravelResultCard
        type="flight"
        headline="SFO → NRT"
        price="$812"
        flightLegs={[
          { route: 'SFO→NRT', stops: 'Nonstop' },
          { route: 'NRT→SFO', stops: '1 stop' },
        ]}
      />
      <TravelResultCard
        type="rental car"
        headline="Compact EV"
        rating="4.4/5"
        price="$198"
        image={photo('#e5e8ff', 'Car photo')}
        carSpecs={{ fuel: 'Electric', seats: 5, doors: 4, bags: 2 }}
      />
      <TravelResultCard type="hotel" status="more" />
    </div>
  )
}
