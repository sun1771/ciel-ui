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
export const Error: Story = { args: { error: 'Too long' } }
export const Disabled: Story = { args: { disabled: true } }
