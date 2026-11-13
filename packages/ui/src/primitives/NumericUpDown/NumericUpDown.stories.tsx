import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { NumericUpDown } from '.'

const meta = {
  title: 'Primitives/NumericUpDown',
  component: NumericUpDown,
  args: { min: 0, max: 3 },
} satisfies Meta<typeof NumericUpDown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(0)
    return <NumericUpDown {...args} value={value} onChange={setValue} />
  },
  play: async ({ canvas }) => {
    const dec = canvas.getByRole('button', { name: 'Decrease' })
    const inc = canvas.getByRole('button', { name: 'Increase' })
    await expect(dec).toBeDisabled() // at min
    await userEvent.click(inc)
    await userEvent.click(inc)
    await userEvent.click(inc)
    await expect(canvas.getByText('3')).toBeInTheDocument()
    await expect(inc).toBeDisabled() // at max
  },
}
export const Localised: Story = {
  args: { value: 2, labels: { decrease: 'Verringern', increase: 'Erhöhen' } },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Erhöhen' })).toBeInTheDocument()
  },
}
export const Disabled: Story = { args: { value: 1, disabled: true } }
