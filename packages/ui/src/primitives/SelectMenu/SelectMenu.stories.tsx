import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor } from 'storybook/test'
import { MenuItem } from '../Menu'
import { SelectMenu } from '.'

const meta = {
  title: 'Primitives/SelectMenu',
  component: SelectMenu,
  args: {
    'aria-label': 'Sort by',
    placeholder: 'Sort by',
    onValueChange: fn(),
    children: [
      <MenuItem key="price" value="price">
        Price
      </MenuItem>,
      <MenuItem key="rating" value="rating">
        Rating
      </MenuItem>,
      <MenuItem key="distance" value="distance">
        Distance
      </MenuItem>,
    ],
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'outline', 'transparent'] },
    size: { control: 'inline-radio', options: ['lg', 'sm'] },
    children: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: 220 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SelectMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas, step }) => {
    const button = canvas.getByRole('button', { name: 'Sort by' })

    await step('click opens the menu; picking an option closes it', async () => {
      await userEvent.click(button)
      await expect(button).toHaveAttribute('aria-expanded', 'true')
      // The menu floats just below the button, outside the page flow.
      const menu = canvas.getByRole('menu')
      await expect(getComputedStyle(menu).position).toBe('absolute')
      const gap = menu.getBoundingClientRect().top - button.getBoundingClientRect().bottom
      await expect(gap).toBeGreaterThanOrEqual(0)
      await expect(gap).toBeLessThanOrEqual(8)
      await userEvent.click(canvas.getByRole('menuitemradio', { name: 'Rating' }))
      await expect(args.onValueChange).toHaveBeenCalledWith('rating')
      await expect(canvas.queryByRole('menu')).toBeNull()
      await expect(button).toHaveTextContent('Rating')
      await expect(button).toHaveFocus()
    })

    await step('keyboard: ArrowDown opens on the selected item, Escape closes', async () => {
      await userEvent.keyboard('{ArrowDown}')
      await waitFor(() =>
        expect(canvas.getByRole('menuitemradio', { name: 'Rating' })).toHaveFocus()
      )
      await userEvent.keyboard('{ArrowDown}{Enter}')
      await expect(button).toHaveTextContent('Distance')
      await userEvent.keyboard('{Enter}')
      await waitFor(() => expect(canvas.getByRole('menu')).toBeInTheDocument())
      await userEvent.keyboard('{Escape}')
      await expect(canvas.queryByRole('menu')).toBeNull()
      await expect(button).toHaveFocus()
    })

    await step('a click outside closes it', async () => {
      await userEvent.click(button)
      await userEvent.click(document.body)
      await expect(canvas.queryByRole('menu')).toBeNull()
    })
  },
}

export const Preselected: Story = { args: { defaultValue: 'price', variant: 'default' } }
export const Small: Story = { args: { size: 'sm', variant: 'transparent' } }

/** In a flex row that stretches its items (the default `align-items`), the
 * menu still opens right below the button, not at the bottom of the row. */
export const InStretchingRow: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: 12, minHeight: 220 }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Sort by' })
    await userEvent.click(button)
    const menu = canvas.getByRole('menu')
    const gap = menu.getBoundingClientRect().top - button.getBoundingClientRect().bottom
    await expect(gap).toBeGreaterThanOrEqual(0)
    await expect(gap).toBeLessThanOrEqual(8)
    await userEvent.keyboard('{Escape}')
  },
}
