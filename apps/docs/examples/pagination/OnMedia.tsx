'use client'

import { Pagination } from '@cielui/react'

/** `tone="onMedia"`: white dots with a shadow, for use on photos (CardMedia uses it). */
export default function OnMedia() {
  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'end center',
        height: 160,
        maxWidth: 360,
        padding: 12,
        borderRadius: 8,
        background: 'linear-gradient(135deg, #3b4a8f, #c96f4a)',
      }}
    >
      <Pagination tone="onMedia" defaultPage={1} totalPages={4} labels={{ navigation: 'Photos' }} />
    </div>
  )
}
