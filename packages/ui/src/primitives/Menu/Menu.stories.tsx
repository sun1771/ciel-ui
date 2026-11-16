import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
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
/** Selectable: items have values, so clicking one selects it (no state code needed). */
export const Selectable: Story = {
  args: { defaultValue: 'price', onValueChange: fn(), 'aria-label': 'Sort by' },
  render: (args) => (
    <div style={{ width: 240 }}>
      <Menu {...args}>
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="distance">Distance</MenuItem>
      </Menu>
    </div>
  ),
  play: async ({ args, canvas }) => {
    const item = (name: string) => canvas.getByRole('menuitemradio', { name })
    await expect(item('Price')).toHaveAttribute('aria-checked', 'true')
    await userEvent.click(item('Rating'))
    await expect(item('Rating')).toHaveAttribute('aria-checked', 'true')
    await expect(item('Price')).toHaveAttribute('aria-checked', 'false')
    await expect(args.onValueChange).toHaveBeenCalledWith('rating')
    // The selected item is the one in the Tab order, and arrows still move focus.
    await expect(item('Rating')).toHaveAttribute('tabindex', '0')
    item('Rating').focus()
    await userEvent.keyboard('{ArrowDown}')
    await expect(item('Distance')).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await expect(item('Distance')).toHaveAttribute('aria-checked', 'true')
  },
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
