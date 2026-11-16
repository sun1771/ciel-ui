import { Link } from '@cielui/react'
import { ArrowRight } from '@cielui/icons'

export default function Variants() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Link href="#details" iconRight={<ArrowRight size={16} />}>
        View details
      </Link>
      <p style={{ margin: 0 }}>
        Read our{' '}
        <Link variant="in-line" href="#policy">
          cancellation policy
        </Link>{' '}
        before booking.
      </p>
    </div>
  )
}
