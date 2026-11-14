import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Loader } from '.'

const meta = {
  title: 'Feedback/Loader',
  component: Loader,
  args: { size: 'md', label: 'Loading results' },
  argTypes: { size: { control: 'inline-radio', options: ['lg', 'md', 'sm', 'xs', 'xxs'] } },
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('status', { name: 'Loading results' })).toBeInTheDocument()
  },
}
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {(['lg', 'md', 'sm', 'xs', 'xxs'] as const).map((s) => (
        <Loader key={s} {...args} size={s} />
      ))}
    </div>
  ),
}
