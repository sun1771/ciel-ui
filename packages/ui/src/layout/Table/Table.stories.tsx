import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Button } from '../../primitives/Button'
import { Table } from '.'

const meta = {
  title: 'Layout/Table',
  component: Table,
  args: {
    title: 'Flight options',
    columns: [
      { key: 'airline', header: 'Airline' },
      { key: 'route', header: 'Route' },
      { key: 'price', header: 'Price' },
      { key: 'details', header: 'Details', type: 'link' },
    ],
    rows: [
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
    ],
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('table')).toBeInTheDocument()
    await expect(canvas.getAllByRole('columnheader')).toHaveLength(4)
    await expect(canvas.getAllByRole('row')).toHaveLength(3)
  },
}
export const WithActions: Story = { args: { actions: <Button size="sm">Export</Button> } }
export const NoTitle: Story = { args: { title: undefined } }
