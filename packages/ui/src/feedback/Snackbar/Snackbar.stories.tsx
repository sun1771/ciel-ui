import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import { Snackbar } from '.'

const meta = {
  title: 'Feedback/Snackbar',
  component: Snackbar,
  args: {
    title: 'Booking saved',
    children: 'We sent the confirmation to your inbox.',
    onClose: fn(),
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'error', 'warning', 'info'] },
  },
} satisfies Meta<typeof Snackbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Dismiss notification' }))
    await expect(args.onClose).toHaveBeenCalledOnce()
  },
}
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
      {(['default', 'success', 'error', 'warning', 'info'] as const).map((v) => (
        <Snackbar key={v} {...args} variant={v} title={v} />
      ))}
    </div>
  ),
}
export const WithAction: Story = { args: { action: { label: 'Undo', onClick: fn() } } }
export const WithProgress: Story = {
  args: { showProgress: true, progress: 40 },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('progressbar', { name: 'Progress' })).toHaveAttribute(
      'aria-valuenow',
      '40'
    )
  },
}
