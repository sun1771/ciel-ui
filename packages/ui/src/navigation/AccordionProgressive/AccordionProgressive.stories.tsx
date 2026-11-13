import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { AccordionProgressive } from '.'

const meta = {
  title: 'Navigation/AccordionProgressive',
  component: AccordionProgressive,
  args: { label: 'Step 1 — Travellers', children: 'Two adults, one room.' },
} satisfies Meta<typeof AccordionProgressive>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return <AccordionProgressive {...args} isExpanded={open} onToggle={setOpen} />
  },
  play: async ({ canvas }) => {
    const header = canvas.getByRole('button', { name: /Step 1/ })
    await expect(header).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(header)
    await expect(header).toHaveAttribute('aria-expanded', 'true')
    await expect(canvas.getByText('Two adults, one room.')).toBeVisible()
  },
}
export const Expanded: Story = { args: { isExpanded: true } }
export const Disabled: Story = { args: { disabled: true } }
