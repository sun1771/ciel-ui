import { Field } from '@cielui/react'
import { Search } from '@cielui/icons'

export default function Basic() {
  return (
    <div style={{ maxWidth: 360 }}>
      <Field
        aria-label="Search bookings"
        placeholder="Search bookings"
        iconLeft={<Search size={20} />}
      />
    </div>
  )
}
