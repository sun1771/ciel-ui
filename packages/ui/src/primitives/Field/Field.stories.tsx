import type { Meta, StoryObj } from '@storybook/react-vite'
import { Search } from '@cielui/icons'
import { Field } from '.'

const meta = {
  title: 'Primitives/Field',
  component: Field,
  args: { placeholder: 'Type here', 'aria-label': 'Example field' },
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithIcons: Story = { args: { iconLeft: <Search size={20} /> } }
export const Error: Story = { args: { error: 'Required' } }
export const Disabled: Story = { args: { disabled: true } }
