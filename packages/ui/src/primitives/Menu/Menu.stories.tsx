import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { Check, Settings, User } from '@acme/icons'
import { Menu, MenuItem } from '.'

const meta = {
  title: 'Primitives/Menu',
  component: Menu,
  args: { size: 'lg', 'aria-label': 'Account', children: null },
  argTypes: { size: { control: 'inline-radio', options: ['lg', 'sm'] } },
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 240 }}>
      <Menu {...args}>
        <MenuItem iconLeft={<User size={20} />}>Profile</MenuItem>
        <MenuItem iconLeft={<Settings size={20} />} isSelected iconRight={<Check size={20} />}>
          Settings
        </MenuItem>
        <MenuItem>Sign out</MenuItem>
      </Menu>
    </div>
  ),
}
export const Keyboard: Story = {
  render: Default.render,
  play: async ({ canvas, step }) => {
    const item = (name: string) => canvas.getByRole('menuitem', { name })
    await step('only the selected item is in the Tab order', async () => {
      await expect(item('Settings')).toHaveAttribute('tabindex', '0')
      await expect(item('Profile')).toHaveAttribute('tabindex', '-1')
    })
    await step('arrows, Home and End move focus and wrap', async () => {
      item('Settings').focus()
      await userEvent.keyboard('{ArrowDown}')
      await expect(item('Sign out')).toHaveFocus()
      await userEvent.keyboard('{ArrowDown}')
      await expect(item('Profile')).toHaveFocus()
      await userEvent.keyboard('{ArrowUp}')
      await expect(item('Sign out')).toHaveFocus()
      await userEvent.keyboard('{Home}')
      await expect(item('Profile')).toHaveFocus()
      await userEvent.keyboard('{End}')
      await expect(item('Sign out')).toHaveFocus()
      await expect(item('Sign out')).toHaveAttribute('tabindex', '0')
    })
  },
}

export const Small: Story = { render: Default.render, args: { size: 'sm' } }
