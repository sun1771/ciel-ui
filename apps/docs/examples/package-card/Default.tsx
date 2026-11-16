'use client'

import { useState } from 'react'
import { PackageCard } from '@acme/ui'

const OPTIONS = ['Hotel + flights, 5 nights: $1,240', 'Hotel only, 5 nights: $890']

/** The default variant: arrows without the "Day N" label. Also `loaded={false}`. */
export default function Default() {
  const [page, setPage] = useState(1)
  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 380 }}>
      <PackageCard
        heading="Lisbon packages"
        page={page}
        totalPages={OPTIONS.length}
        onPrevPage={() => setPage((p) => p - 1)}
        onNextPage={() => setPage((p) => p + 1)}
      >
        {OPTIONS[page - 1]}
      </PackageCard>
      <PackageCard
        heading="Porto packages"
        loaded={false}
        emptyText="Ask the assistant to plan this trip."
      />
    </div>
  )
}
