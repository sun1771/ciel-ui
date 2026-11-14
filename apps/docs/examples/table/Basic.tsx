import { Button, Table } from '@acme/ui'

export default function Basic() {
  return (
    <Table
      title="Flight options"
      actions={
        <Button size="sm" variant="outline">
          Export
        </Button>
      }
      columns={[
        { key: 'airline', header: 'Airline' },
        { key: 'route', header: 'Route' },
        { key: 'price', header: 'Price' },
        { key: 'details', header: 'Details', type: 'link' },
      ]}
      rows={[
        {
          id: 1,
          airline: 'Sky Air',
          route: 'SFO → NRT',
          price: '$812',
          details: { label: 'View', href: '#1' },
        },
        {
          id: 2,
          airline: 'Blue Jet',
          route: 'SFO → HND',
          price: '$904',
          details: { label: 'View', href: '#2' },
        },
        {
          id: 3,
          airline: 'Coast Lines',
          route: 'OAK → NRT',
          price: '$768',
          details: { label: 'View', href: '#3' },
        },
      ]}
    />
  )
}
