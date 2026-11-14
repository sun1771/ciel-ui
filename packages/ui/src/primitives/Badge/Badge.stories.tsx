import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '.'

const meta = {
  title: 'Primitives/Badge',
  component: Badge,
  // Two characters on purpose: axe skips contrast checks on single-character text.
  args: { children: '12', variant: 'default', type: 'default' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'information', 'warning'],
    },
    type: { control: 'inline-radio', options: ['default', 'dot'] },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12 }}>
      {(['default', 'error', 'success', 'information', 'warning'] as const).map((v) => (
        <Badge key={v} {...args} variant={v} />
      ))}
    </div>
  ),
}
export const Dot: Story = { args: { type: 'dot', children: undefined } }
