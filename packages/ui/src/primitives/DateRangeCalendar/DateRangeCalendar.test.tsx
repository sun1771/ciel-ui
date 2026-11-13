import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { DateRangeCalendar, type Weekday } from '.'

const MAY_2026 = new Date(2026, 4, 1) // a Friday

describe('DateRangeCalendar', () => {
  it.each([0, 1, 2, 3, 4, 5, 6] as Weekday[])(
    'weekStartsOn=%i puts May 1 2026 (Friday) in the right column',
    (weekStartsOn) => {
      const { container } = render(
        <DateRangeCalendar months={1} defaultMonth={MAY_2026} weekStartsOn={weekStartsOn} />
      )
      const cells = Array.from(container.querySelectorAll('button, [aria-hidden="true"]')).filter(
        (el) => !el.closest('[class*="monthHeader"]')
      )
      // 7 weekday headers, then leading blanks, then day 1.
      const firstDay = cells.findIndex((el) => el.textContent === '1')
      expect(firstDay - 7).toBe((5 - weekStartsOn + 7) % 7)
    }
  )

  it('controlled: shows `value` and ignores clicks until the parent updates it', async () => {
    const onChange = vi.fn()
    render(
      <DateRangeCalendar
        months={1}
        defaultMonth={MAY_2026}
        value={{ start: null, end: null }}
        onChange={onChange}
      />
    )
    const day9 = screen.getByRole('button', { name: 'Saturday, May 9' })
    await userEvent.click(day9)
    expect(onChange).toHaveBeenCalledWith({ start: new Date(2026, 4, 9), end: null })
    expect(day9).toHaveAttribute('aria-pressed', 'false')
  })

  it('opens on the month of the selected start date', () => {
    render(
      <DateRangeCalendar
        months={1}
        defaultValue={{ start: new Date(2027, 1, 14), end: null }}
        defaultMonth={MAY_2026}
      />
    )
    expect(screen.getByText('February 2027')).toBeInTheDocument()
  })
})
