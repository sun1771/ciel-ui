import type { Meta, StoryObj } from '@storybook/react-vite'
import { SelectButton } from '.'

const meta = {
  title: 'Primitives/SelectButton',
  component: SelectButton,
  args: { children: 'Any time', variant: 'outline', size: 'lg' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'outline', 'transparent'] },
    size: { control: 'inline-radio', options: ['lg', 'sm'] },
  },
} satisfies Meta<typeof SelectButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Selected: Story = { args: { isSelected: true } }
export const Disabled: Story = { args: { disabled: true } }
