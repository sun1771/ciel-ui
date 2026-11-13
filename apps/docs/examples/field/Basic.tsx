import { Field } from '@acme/ui'
import { Search } from '@acme/icons'

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
