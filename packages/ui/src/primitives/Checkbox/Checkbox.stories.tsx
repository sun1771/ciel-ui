import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { Checkbox } from '.'

const meta = {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  args: { children: 'Include weekend' },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <Checkbox {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
  },
  play: async ({ canvas }) => {
    const box = canvas.getByRole('checkbox', { name: 'Include weekend' })
    await expect(box).not.toBeChecked()
    // Clicking the label text toggles it too.
    await userEvent.click(canvas.getByText('Include weekend'))
    await expect(box).toBeChecked()
    await userEvent.keyboard(' ')
    await expect(box).not.toBeChecked()
  },
}
export const Checked: Story = { args: { defaultChecked: true } }
export const Error: Story = { args: { error: true } }
export const Disabled: Story = { args: { disabled: true } }
