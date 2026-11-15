'use client'

import { MenuItem, SelectMenu } from '@acme/ui'

export default function Basic() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', minHeight: 200 }}>
      <SelectMenu aria-label="Sort by" placeholder="Sort by" defaultValue="price">
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="distance">Distance</MenuItem>
      </SelectMenu>
      <SelectMenu aria-label="When" placeholder="Any time" variant="transparent" size="sm">
        <MenuItem value="weekend">This weekend</MenuItem>
        <MenuItem value="next-week">Next week</MenuItem>
        <MenuItem value="month">This month</MenuItem>
      </SelectMenu>
    </div>
  )
}
