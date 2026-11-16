'use client'

import { useState } from 'react'
import { PackageCard } from '@cielui/react'

const DAYS = [
  'Fushimi Inari at sunrise, then Nishiki Market for lunch.',
  'Arashiyama bamboo grove and a river cruise.',
  'Day trip to Nara: deer park and Tōdai-ji.',
]

export default function Basic() {
  const [day, setDay] = useState(1)
  return (
    <div style={{ maxWidth: 380 }}>
      <PackageCard
        variant="itinerary"
        heading="Kyoto in 3 days"
        page={day}
        totalPages={DAYS.length}
        onPrevPage={() => setDay((d) => d - 1)}
        onNextPage={() => setDay((d) => d + 1)}
      >
        {DAYS[day - 1]}
      </PackageCard>
    </div>
  )
}
