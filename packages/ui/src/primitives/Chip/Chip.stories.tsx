import type { Meta, StoryObj } from '@storybook/react-vite'
import { Award } from '@cielui/icons'
import { Chip } from '.'

const meta = {
  title: 'Primitives/Chip',
  component: Chip,
  args: { children: 'Cheapest', color: 'green', variant: 'light' },
  argTypes: {
    color: { control: 'select', options: ['brand', 'blue', 'green', 'orange', 'red'] },
    variant: { control: 'inline-radio', options: ['light', 'sharp'] },
    icon: { control: false },
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {(['brand', 'blue', 'green', 'orange', 'red'] as const).flatMap((color) =>
        (['light', 'sharp'] as const).map((variant) => (
          <Chip key={color + variant} {...args} color={color} variant={variant}>
            {color} {variant}
          </Chip>
        ))
      )}
    </div>
  ),
}
export const IconOnly: Story = {
  args: {
    color: 'brand',
    variant: 'sharp',
    icon: <Award size={16} />,
    children: undefined,
    role: 'img',
    'aria-label': 'Recommended',
  },
}
