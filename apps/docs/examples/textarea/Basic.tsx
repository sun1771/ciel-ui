import { TextArea } from '@acme/ui'

export default function Basic() {
  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 420 }}>
      <TextArea label="Notes for the host" placeholder="Arriving late?" hint="Optional" />
      <TextArea label="Message" defaultValue="Hi" error="Please write at least 10 characters" />
    </div>
  )
}
