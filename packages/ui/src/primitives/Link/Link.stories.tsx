import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import { ArrowRight } from '@acme/icons'
import { Link } from '.'

const meta = {
  title: 'Primitives/Link',
  component: Link,
  args: { children: 'View details', href: '#details', variant: 'default' },
  argTypes: { variant: { control: 'inline-radio', options: ['default', 'in-line'] } },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithIcon: Story = { args: { iconRight: <ArrowRight size={16} /> } }
export const InLine: Story = {
  args: { variant: 'in-line' },
  render: (args) => (
    <p>
      Read our <Link {...args}>cancellation policy</Link> before booking.
    </p>
  ),
}
export const Disabled: Story = {
  args: { disabled: true, onClick: fn() },
  play: async ({ args, canvas }) => {
    const link = canvas.getByRole('link', { name: 'View details' })
    await expect(link).toHaveAttribute('aria-disabled', 'true')
    link.focus()
    await userEvent.keyboard('{Enter}')
    await expect(args.onClick).not.toHaveBeenCalled()
  },
}
