import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import { Switch } from '.'

const meta = {
  title: 'Primitives/Switch',
  component: Switch,
  args: { children: 'Notifications' },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <Switch {...args} checked={checked} onClick={() => setChecked((c) => !c)} />
  },
  play: async ({ canvas }) => {
    const sw = canvas.getByRole('switch', { name: 'Notifications' })
    await expect(sw).toHaveAttribute('aria-checked', 'false')
    await userEvent.click(sw)
    await expect(sw).toHaveAttribute('aria-checked', 'true')
    await userEvent.keyboard('{Enter}')
    await expect(sw).toHaveAttribute('aria-checked', 'false')
  },
}
export const On: Story = { args: { checked: true } }

/** Uncontrolled: no state code needed; `onCheckedChange` reports each toggle. */
export const Uncontrolled: Story = {
  args: { defaultChecked: true, onCheckedChange: fn() },
  play: async ({ args, canvas }) => {
    const sw = canvas.getByRole('switch', { name: 'Notifications' })
    await expect(sw).toHaveAttribute('aria-checked', 'true')
    await userEvent.click(sw)
    await expect(sw).toHaveAttribute('aria-checked', 'false')
    await expect(args.onCheckedChange).toHaveBeenCalledWith(false)
  },
}
export const Disabled: Story = { args: { disabled: true } }
