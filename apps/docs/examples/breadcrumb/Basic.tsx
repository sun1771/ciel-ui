import { Breadcrumb } from '@acme/ui'

export default function Basic() {
  return (
    <Breadcrumb
      items={[
        { label: 'Home', href: '#home' },
        { label: 'Trips', href: '#trips' },
        { label: 'Tokyo, May 2026' },
      ]}
    />
  )
}
