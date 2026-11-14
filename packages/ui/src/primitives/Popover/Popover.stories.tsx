import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor } from 'storybook/test'
import { Button } from '../Button'
import { Popover } from '.'

const meta = {
  title: 'Primitives/Popover',
  component: Popover,
  args: {
    panelLabel: 'Filters',
    onOpenChange: fn(),
    trigger: (props) => <button {...props}>Open filters</button>,
    children: ({ close }) => (
      <div style={{ display: 'grid', gap: 8 }}>
        <p style={{ margin: 0 }}>Panel content</p>
        <Button size="sm" onClick={close}>
          Done
        </Button>
      </div>
    ),
  },
  argTypes: { trigger: { control: false }, children: { control: false } },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas, step }) => {
    const trigger = canvas.getByRole('button', { name: 'Open filters' })

    await step('opens on click and links trigger to panel', async () => {
      await userEvent.click(trigger)
      const panel = canvas.getByRole('dialog', { name: 'Filters' })
      await expect(trigger).toHaveAttribute('aria-expanded', 'true')
      await expect(trigger).toHaveAttribute('aria-controls', panel.id)
      await expect(args.onOpenChange).toHaveBeenLastCalledWith(true)
    })

    await step('Escape closes and returns focus to the trigger', async () => {
      await userEvent.keyboard('{Escape}')
      await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument()
      await expect(trigger).toHaveFocus()
    })

    await step('click outside closes', async () => {
      await userEvent.click(trigger)
      await userEvent.click(document.body)
      await waitFor(() => expect(canvas.queryByRole('dialog')).not.toBeInTheDocument())
    })

    await step('content can close it via render-prop `close`', async () => {
      await userEvent.click(trigger)
      await userEvent.click(canvas.getByRole('button', { name: 'Done' }))
      await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument()
    })
  },
}

export const DefaultOpen: Story = { args: { defaultOpen: true } }

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Open filters' })
    await expect(trigger).toBeDisabled()
  },
}
