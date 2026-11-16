import { Loader } from '@acme/ui'

export default function Sizes() {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
      <Loader size="lg" label="Loading results" />
      <Loader size="md" />
      <Loader size="sm" />
      <Loader size="xs" />
      <Loader size="xxs" />
    </div>
  )
}
