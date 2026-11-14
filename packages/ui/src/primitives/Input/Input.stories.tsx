import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { User } from '@acme/icons'
import { Input } from '.'

const meta = {
  title: 'Primitives/Input',
  component: Input,
  args: { label: 'Email', placeholder: 'you@example.com', hint: 'We never share it.' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    const input = canvas.getByLabelText('Email')
    await userEvent.type(input, 'sam@example.com')
    await expect(input).toHaveValue('sam@example.com')
  },
}
export const WithIcon: Story = { args: { iconLeft: <User size={20} /> } }
export const Error: Story = { args: { error: 'Enter a valid email address' } }
export const Disabled: Story = { args: { disabled: true } }
