import { Snackbar } from '@acme/ui'

export default function Variants() {
  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 440 }}>
      <Snackbar variant="success" title="Booking confirmed">
        We sent the details to your inbox.
      </Snackbar>
      <Snackbar
        variant="warning"
        title="Price changed"
        action={{ label: 'Review', href: '#review' }}
      >
        The fare went up by $12 since you started.
      </Snackbar>
      <Snackbar variant="error" title="Payment failed" showProgress progress={40}>
        Your card was declined.
      </Snackbar>
    </div>
  )
}
