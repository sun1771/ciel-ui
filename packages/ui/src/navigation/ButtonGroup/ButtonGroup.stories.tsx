import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { Calendar, Map } from '@acme/icons'
import { ButtonGroup, ButtonGroupItem } from '.'

const meta = {
  title: 'Navigation/ButtonGroup',
  component: ButtonGroup,
  args: { 'aria-label': 'View', children: null },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [view, setView] = useState('list')
    return (
      <ButtonGroup {...args}>
        <ButtonGroupItem
          isSelected={view === 'list'}
          icon={<Calendar size={20} />}
          onClick={() => setView('list')}
        >
          List
        </ButtonGroupItem>
        <ButtonGroupItem
          isSelected={view === 'map'}
          icon={<Map size={20} />}
          onClick={() => setView('map')}
        >
          Map
        </ButtonGroupItem>
      </ButtonGroup>
    )
  },
  play: async ({ canvas }) => {
    const map = canvas.getByRole('button', { name: 'Map' })
    await userEvent.click(map)
    await expect(map).toHaveAttribute('aria-pressed', 'true')
    await expect(canvas.getByRole('button', { name: 'List' })).toHaveAttribute(
      'aria-pressed',
      'false'
    )
  },
}

export const IconOnly: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupItem isSelected icon={<Calendar size={20} />} aria-label="Calendar view" />
      <ButtonGroupItem icon={<Map size={20} />} aria-label="Map view" />
    </ButtonGroup>
  ),
}
