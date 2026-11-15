import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import { Pagination } from '.'

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
  args: { page: 1, totalPages: 5 },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(args.page ?? 1)
    return <Pagination {...args} page={page} onChange={setPage} />
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Go to page 3' }))
    const current = canvas.getByRole('button', { name: 'Page 3, current' })
    await expect(current).toHaveAttribute('aria-current', 'page')
  },
}
/** Uncontrolled: no state code needed; `onChange` reports each page change. */
export const Uncontrolled: Story = {
  args: { page: undefined, defaultPage: 2, onChange: fn() },
  play: async ({ args, canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Page 2, current' })).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Go to page 4' }))
    await expect(canvas.getByRole('button', { name: 'Page 4, current' })).toBeInTheDocument()
    await expect(args.onChange).toHaveBeenCalledWith(4)
  },
}
export const Disabled: Story = { args: { disabled: true } }
export const Localised: Story = {
  args: {
    page: 2,
    labels: {
      navigation: 'Seiten',
      goToPage: (p: number) => `Zu Seite ${p}`,
      currentPage: (p: number) => `Seite ${p}, aktuell`,
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('navigation', { name: 'Seiten' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Seite 2, aktuell' })).toBeInTheDocument()
  },
}
