import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor } from 'storybook/test'
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
const tick = (box: HTMLElement) =>
  getComputedStyle((box.nextElementSibling as HTMLElement).querySelector('svg')!).opacity

/** Uncontrolled: `defaultChecked`, and clicks toggle the tick without any state code. */
export const Checked: Story = {
  args: { defaultChecked: true },
  play: async ({ canvas }) => {
    const box = canvas.getByRole('checkbox', { name: 'Include weekend' })
    await expect(box).toBeChecked()
    await expect(tick(box)).toBe('1')
    await userEvent.click(box)
    await expect(box).not.toBeChecked()
    await waitFor(() => expect(tick(box)).toBe('0'))
    await userEvent.click(box) // and back on, so the story ends showing the tick
    await waitFor(() => expect(tick(box)).toBe('1'))
  },
}
export const Error: Story = {
  args: { error: true },
  play: async ({ canvas }) => {
    const box = canvas.getByRole('checkbox', { name: 'Include weekend' })
    await expect(box).toHaveAttribute('aria-invalid', 'true')
    // The error must not be shown by colour alone: the outline also gets heavier.
    const visualBox = box.nextElementSibling as HTMLElement
    await expect(getComputedStyle(visualBox).boxShadow).not.toBe('none')
  },
}
export const Disabled: Story = { args: { disabled: true } }
