import { Pagination } from '@cielui/react'

export default function Basic() {
  return <Pagination defaultPage={2} totalPages={5} labels={{ navigation: 'Result pages' }} />
}
