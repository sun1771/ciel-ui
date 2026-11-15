import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor } from 'storybook/test'
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
/** Uncontrolled: opens and closes with no state code. Closed content is inert. */
export const Uncontrolled: Story = {
  args: { onToggle: fn() },
  play: async ({ args, canvas }) => {
    const toggle = canvas.getByRole('button', { name: 'Show details' })
    await expect(canvas.queryByRole('region')).toBeNull()
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await expect(args.onToggle).toHaveBeenCalledWith(true)
    await waitFor(() => expect(canvas.getByRole('region')).toBeVisible())
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await waitFor(() => expect(canvas.queryByRole('region')).toBeNull())
  },
}
export const Small: Story = { args: { size: 'sm', defaultExpanded: true } }
export const Disabled: Story = { args: { disabled: true } }
