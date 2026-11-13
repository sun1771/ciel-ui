'use client'

import { useState } from 'react'
import { Pagination } from '@acme/ui'

export default function Basic() {
  const [page, setPage] = useState(2)
  return <Pagination page={page} totalPages={5} onChange={setPage} />
}
