import type { Meta, StoryObj } from '@storybook/react-vite'
import { Separator } from '.'

const meta = {
  title: 'Primitives/Separator',
  component: Separator,
  args: { orientation: 'horizontal' },
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: (args) => (
    <div style={{ width: 240 }}>
      <p>Above</p>
      <Separator {...args} />
      <p>Below</p>
    </div>
  ),
}
export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, height: 32, alignItems: 'center' }}>
      <span>Left</span>
      <Separator {...args} />
      <span>Right</span>
    </div>
  ),
}
