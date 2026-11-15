import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { TextArea } from '.'

const meta = {
  title: 'Primitives/TextArea',
  component: TextArea,
  args: { label: 'Notes', placeholder: 'Anything we should know?', hint: 'Optional' },
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    const box = canvas.getByLabelText('Notes')
    await userEvent.type(box, 'Line one{Shift>}{Enter}{/Shift}Line two')
    await expect(box).toHaveValue('Line one\nLine two')
  },
}
/** The resize handle sits in the field's corner; the field can't shrink below 108px. */
export const ResizeHandle: Story = {
  play: async ({ canvas }) => {
    const box = canvas.getByLabelText('Notes')
    const field = box.parentElement!.getBoundingClientRect()
    const area = box.getBoundingClientRect()
    // The textarea fills the field (inside its 1px border), so the handle is in the corner.
    await expect(field.bottom - area.bottom).toBeLessThanOrEqual(1)
    await expect(field.right - area.right).toBeLessThanOrEqual(1)
    await expect(field.height).toBeGreaterThanOrEqual(108)
    // Dragging can't make it smaller than the minimum.
    box.style.height = '20px'
    await expect(box.getBoundingClientRect().height).toBeGreaterThanOrEqual(106)
  },
}
export const Error: Story = { args: { error: 'Too long' } }
export const Disabled: Story = { args: { disabled: true } }
