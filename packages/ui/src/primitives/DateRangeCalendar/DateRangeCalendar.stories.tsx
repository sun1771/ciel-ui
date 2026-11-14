import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { DateRangeCalendar } from '.'

// Fixed month so stories and tests are deterministic.
const MAY_2026 = new Date(2026, 4, 1)

const meta = {
  title: 'Primitives/DateRangeCalendar',
  component: DateRangeCalendar,
  args: { defaultMonth: MAY_2026, onChange: fn() },
  argTypes: {
    months: { control: 'inline-radio', options: [1, 2] },
    weekStartsOn: { control: 'select', options: [0, 1, 2, 3, 4, 5, 6] },
    locale: { control: 'text' },
  },
} satisfies Meta<typeof DateRangeCalendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas, step }) => {
    const day = (name: string) => canvas.getByRole('button', { name })

    await step('first click sets the start', async () => {
      await userEvent.click(day('Saturday, May 9'))
      await expect(args.onChange).toHaveBeenLastCalledWith({
        start: new Date(2026, 4, 9),
        end: null,
      })
      await expect(day('Saturday, May 9')).toHaveAttribute('aria-pressed', 'true')
    })

    await step('second click sets the end', async () => {
      await userEvent.click(day('Wednesday, May 13'))
      await expect(args.onChange).toHaveBeenLastCalledWith({
        start: new Date(2026, 4, 9),
        end: new Date(2026, 4, 13),
      })
    })

    await step('clicking before the start restarts the range', async () => {
      await userEvent.click(day('Tuesday, May 5'))
      await userEvent.click(day('Monday, May 4'))
      await expect(args.onChange).toHaveBeenLastCalledWith({
        start: new Date(2026, 4, 4),
        end: null,
      })
    })
  },
}

export const Navigation: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('May 2026')).toBeInTheDocument()
    await expect(canvas.getByText('June 2026')).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Next month' }))
    await expect(canvas.getByText('July 2026')).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Previous month' }))
    await userEvent.click(canvas.getByRole('button', { name: 'Previous month' }))
    await expect(canvas.getByText('April 2026')).toBeInTheDocument()
  },
}

export const Preselected: Story = {
  args: { defaultValue: { start: new Date(2026, 4, 9), end: new Date(2026, 4, 13) } },
}

export const SingleMonth: Story = { args: { months: 1 } }

export const GermanMondayFirst: Story = {
  args: {
    locale: 'de-DE',
    weekStartsOn: 1,
    months: 1,
    labels: { previousMonth: 'Vorheriger Monat', nextMonth: 'Nächster Monat' },
  },
  play: async ({ canvasElement, canvas }) => {
    await expect(canvas.getByText('Mai 2026')).toBeInTheDocument()
    // Weekday header row starts on Monday ("Mo") in German.
    const headers = canvasElement.querySelectorAll('[aria-hidden="true"]')
    await expect(headers[0]?.textContent).toBe('Mo')
    // May 1 2026 is a Friday → 4 empty cells before it when weeks start on Monday.
    await expect(
      within(canvasElement).getByRole('button', { name: 'Freitag, 1. Mai' })
    ).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Nächster Monat' })).toBeInTheDocument()
  },
}
