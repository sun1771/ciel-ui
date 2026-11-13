import { Input } from '@acme/ui'
import { User } from '@acme/icons'

export default function States() {
  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 360 }}>
      <Input label="Full name" placeholder="Sam Kim" iconLeft={<User size={20} />} />
      <Input label="Email" placeholder="you@example.com" hint="We never share it." />
      <Input label="Email" defaultValue="sam@" error="Enter a valid email address" />
      <Input label="Booking ID" defaultValue="TRP-2041" disabled />
    </div>
  )
}
