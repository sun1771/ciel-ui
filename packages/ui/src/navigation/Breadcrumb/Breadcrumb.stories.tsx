import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Breadcrumb } from '.'

const meta = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  args: {
    items: [
      { label: 'Home', href: '#home' },
      { label: 'Trips', href: '#trips' },
      { label: 'Tokyo, May 2026' },
    ],
  },
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument()
    await expect(canvas.getByRole('link', { name: 'Trips' })).toHaveAttribute('href', '#trips')
    // The last item is the current page, not a link.
    await expect(canvas.queryByRole('link', { name: 'Tokyo, May 2026' })).not.toBeInTheDocument()
  },
}
