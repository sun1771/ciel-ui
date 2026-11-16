import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Info } from '@cielui/icons'
import { Button } from '../../primitives/Button'
import { DialogBox } from '.'

const meta = {
  title: 'Layout/DialogBox',
  component: DialogBox,
  args: {
    isOpen: true,
    title: 'Cancel booking?',
    children: 'You will get a full refund within 5 business days.',
    primaryLabel: 'Cancel booking',
    showSecondary: true,
    secondaryLabel: 'Keep it',
    onPrimary: fn(),
  },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof DialogBox>

export default meta
type Story = StoryObj<typeof meta>

export const Interactive: Story = {
  args: { isOpen: false },
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <div style={{ padding: 24 }}>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
        <DialogBox {...args} isOpen={open} onClose={() => setOpen(false)} />
      </div>
    )
  },
  play: async ({ canvasElement, step }) => {
    // The dialog renders in a portal on document.body.
    const body = within(canvasElement.ownerDocument.body)
    const opener = body.getByRole('button', { name: 'Open dialog' })

    await step('opening moves focus into the dialog', async () => {
      await userEvent.click(opener)
      const dialog = await body.findByRole('dialog')
      await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true))
    })

    await step('Tab is trapped inside the dialog', async () => {
      const dialog = body.getByRole('dialog')
      for (let i = 0; i < 6; i++) {
        await userEvent.tab()
        await expect(dialog.contains(document.activeElement)).toBe(true)
      }
      await userEvent.tab({ shift: true })
      await expect(dialog.contains(document.activeElement)).toBe(true)
    })

    await step('Escape closes and focus returns to the opener', async () => {
      await userEvent.keyboard('{Escape}')
      await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument())
      await expect(opener).toHaveFocus()
    })
  },
}

export const Open: Story = {}
export const WithIcon: Story = { args: { icon: <Info size={24} /> } }
export const SingleAction: Story = { args: { showSecondary: false, primaryLabel: 'OK' } }
