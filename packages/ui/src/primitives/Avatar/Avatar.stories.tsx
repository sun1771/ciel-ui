import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from '.'

const meta = {
  title: 'Primitives/Avatar',
  component: Avatar,
  args: { size: 'md', type: 'initials', initials: 'SK', alt: 'Sam Kim' },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    type: { control: 'inline-radio', options: ['initials', 'icon', 'image'] },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Initials: Story = {}
export const Icon: Story = { args: { type: 'icon' } }
export const Image: Story = {
  args: {
    type: 'image',
    src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"%3E%3Crect width="40" height="40" fill="%23667aff"/%3E%3C/svg%3E',
  },
}
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
  ),
}
