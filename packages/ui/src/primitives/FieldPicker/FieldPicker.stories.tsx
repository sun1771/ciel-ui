import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Calendar } from '@cielui/icons'
import { DateRangeCalendar, type DateRange } from '../DateRangeCalendar'
import { FieldPicker } from '.'

const meta = {
  title: 'Primitives/FieldPicker',
  component: FieldPicker,
  args: {
    icon: <Calendar size={20} />,
    placeholder: 'Select dates',
    panelLabel: 'Select date range',
    children: null,
  },
  argTypes: { icon: { control: false }, children: { control: false } },
  decorators: [
    (Story) => (
      <div style={{ width: 280, minHeight: 460 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FieldPicker>

export default meta
type Story = StoryObj<typeof meta>

const fmt = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' })

export const WithDateRange: Story = {
  render: (args) => {
    const [range, setRange] = useState<DateRange>({ start: null, end: null })
    const value = range.start
      ? `${fmt.format(range.start)}${range.end ? ` – ${fmt.format(range.end)}` : ''}`
      : undefined
    return (
      <FieldPicker {...args} value={value}>
        <DateRangeCalendar defaultMonth={new Date(2026, 4, 1)} value={range} onChange={setRange} />
      </FieldPicker>
    )
  },
  play: async ({ canvasElement, canvas }) => {
    const trigger = canvas.getByRole('button', { name: /Select dates/ })
    await userEvent.click(trigger)
    const panel = within(canvasElement).getByRole('dialog', { name: 'Select date range' })
    await userEvent.click(within(panel).getByRole('button', { name: 'Saturday, May 9' }))
    await userEvent.click(within(panel).getByRole('button', { name: 'Wednesday, May 13' }))
    // The field summarises the selection.
    await expect(trigger).toHaveTextContent('May 9 – May 13')
  },
}

export const Placeholder: Story = {}
export const Disabled: Story = { args: { disabled: true } }
