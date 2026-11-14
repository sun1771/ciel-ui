// React 19: components take `ref` as a regular prop (no forwardRef).
// Check object and callback refs reach the right DOM node.
import { createRef } from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Button, Card, DateRangeCalendar, Menu, MenuItem, Popover, SearchBox, Tag } from '.'

describe('ref as a prop', () => {
  it('object refs point at the root element', () => {
    const button = createRef<HTMLButtonElement>()
    const card = createRef<HTMLDivElement>()
    const tag = createRef<HTMLDivElement>()
    const calendar = createRef<HTMLDivElement>()
    render(
      <>
        <Button ref={button}>Go</Button>
        <Card ref={card} />
        <Tag ref={tag}>Tag</Tag>
        <DateRangeCalendar ref={calendar} months={1} defaultMonth={new Date(2026, 4, 1)} />
      </>
    )
    expect(button.current).toBeInstanceOf(HTMLButtonElement)
    expect(button.current).toHaveTextContent('Go')
    expect(card.current).toBeInstanceOf(HTMLDivElement)
    expect(tag.current).toHaveTextContent('Tag')
    expect(calendar.current).toHaveTextContent('May 2026')
  })

  it('callback refs are called with the element', () => {
    const cb = vi.fn()
    render(<Button ref={cb}>Go</Button>)
    expect(cb).toHaveBeenCalledWith(expect.any(HTMLButtonElement))
  })

  it('components with internal refs still expose the documented element', () => {
    const input = createRef<HTMLInputElement>()
    const popover = createRef<HTMLDivElement>()
    const menu = createRef<HTMLDivElement>()
    const cb = vi.fn()
    render(
      <>
        <SearchBox ref={input} aria-label="Search" />
        <SearchBox ref={cb} aria-label="Search 2" />
        <Popover ref={popover} trigger={(p) => <button {...p}>Open</button>} panelLabel="P">
          x
        </Popover>
        <Menu ref={menu} aria-label="Menu">
          <MenuItem>One</MenuItem>
        </Menu>
      </>
    )
    expect(input.current).toBeInstanceOf(HTMLInputElement)
    expect(cb).toHaveBeenCalledWith(expect.any(HTMLInputElement))
    expect(popover.current?.querySelector('button')).toHaveTextContent('Open')
    expect(menu.current).toHaveAttribute('role', 'menu')
  })
})
