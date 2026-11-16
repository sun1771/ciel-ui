'use client'

import { useState } from 'react'
import { MenuItem, SearchBox } from '@cielui/react'
import { MapPin } from '@cielui/icons'

const CITIES = ['Tokyo, Japan', 'Toronto, Canada', 'Paris, France', 'Porto, Portugal']

export default function WithSuggestions() {
  const [query, setQuery] = useState('')
  const matches = query ? CITIES.filter((c) => c.toLowerCase().includes(query.toLowerCase())) : []

  return (
    <div style={{ maxWidth: 360, minHeight: 220 }}>
      <SearchBox
        aria-label="Destination"
        placeholder="Where to?"
        icon={<MapPin size={20} />}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onClear={() => setQuery('')}
      >
        {matches.length > 0 &&
          matches.map((city) => (
            <MenuItem key={city} role="option" onClick={() => setQuery(city)}>
              {city}
            </MenuItem>
          ))}
      </SearchBox>
    </div>
  )
}
