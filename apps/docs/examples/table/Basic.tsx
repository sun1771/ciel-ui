import { Star } from '@cielui/icons'
import { Button, ButtonIcon, Table } from '@cielui/react'

const save = (airline: string) => (
  <ButtonIcon
    label={`Save the ${airline} flight`}
    icon={<Star size={16} />}
    variant="transparent"
    size="sm"
  />
)

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
        { key: 'save', header: 'Save', type: 'action' },
      ]}
      rows={[
        {
          id: 1,
          airline: 'Sky Air',
          route: 'SFO → NRT',
          price: '$812',
          details: { label: 'View', href: '#1' },
          save: save('Sky Air'),
        },
        {
          id: 2,
          airline: 'Blue Jet',
          route: 'SFO → HND',
          price: '$904',
          details: { label: 'View', href: '#2' },
          save: save('Blue Jet'),
        },
        {
          id: 3,
          airline: 'Coast Lines',
          route: 'OAK → NRT',
          price: '$768',
          details: { label: 'View', href: '#3' },
          save: save('Coast Lines'),
        },
      ]}
    />
  )
}
