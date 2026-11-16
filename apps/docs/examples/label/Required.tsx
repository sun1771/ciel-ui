import { Label } from '@cielui/react'

export default function Required() {
  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <Label htmlFor="name">Full name</Label>
      <Label htmlFor="email" variant="required">
        Email
      </Label>
    </div>
  )
}
