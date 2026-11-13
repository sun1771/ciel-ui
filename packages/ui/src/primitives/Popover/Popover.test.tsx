import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Popover } from '.'

const trigger = (props: React.ComponentProps<'button'>) => <button {...props}>Open</button>

describe('Popover', () => {
  it('controlled: only opens when the parent passes open', async () => {
    const onOpenChange = vi.fn()
    const { rerender } = render(
      <Popover open={false} onOpenChange={onOpenChange} trigger={trigger} panelLabel="Panel">
        content
      </Popover>
    )
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))
    expect(onOpenChange).toHaveBeenCalledWith(true)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    rerender(
      <Popover open onOpenChange={onOpenChange} trigger={trigger} panelLabel="Panel">
        content
      </Popover>
    )
    expect(screen.getByRole('dialog', { name: 'Panel' })).toHaveTextContent('content')
  })

  it('works with a parent that mirrors onOpenChange into state', async () => {
    function Parent() {
      const [open, setOpen] = useState(false)
      return (
        <Popover open={open} onOpenChange={setOpen} trigger={trigger} panelLabel="Panel">
          content
        </Popover>
      )
    }
    render(<Parent />)
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('disabled: never opens, even when open is true', () => {
    render(
      <Popover open disabled trigger={trigger} panelLabel="Panel">
        content
      </Popover>
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open' })).toHaveAttribute('aria-expanded', 'false')
  })
})
