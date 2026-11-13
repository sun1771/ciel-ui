import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import { Tag } from '.'

const meta = {
  title: 'Primitives/Tag',
  component: Tag,
  args: { children: 'Flights', size: 'lg', onDismiss: fn() },
  argTypes: { size: { control: 'inline-radio', options: ['lg', 'sm'] } },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Dismissible: Story = {
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Dismiss' }))
    await expect(args.onDismiss).toHaveBeenCalledOnce()
  },
}
export const Static: Story = { args: { onDismiss: undefined } }
export const Small: Story = { args: { size: 'sm' } }
export const Disabled: Story = { args: { disabled: true } }
