import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { Expander } from '.'

const meta = {
  title: 'Navigation/Expander',
  component: Expander,
  args: { label: 'Show details', size: 'lg', children: 'Free cancellation until 48h before.' },
  argTypes: { size: { control: 'inline-radio', options: ['lg', 'sm'] } },
} satisfies Meta<typeof Expander>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return <Expander {...args} isExpanded={open} onToggle={() => setOpen((o) => !o)} />
  },
  play: async ({ canvas }) => {
    const toggle = canvas.getByRole('button', { name: 'Show details' })
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
  },
}
export const Small: Story = { args: { size: 'sm', isExpanded: true } }
export const Disabled: Story = { args: { disabled: true } }
