import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { MapPin } from '@cielui/icons'
import { MenuItem } from '../Menu'
import { SearchBox } from '.'

const meta = {
  title: 'Primitives/SearchBox',
  component: SearchBox,
  args: { placeholder: 'Search', 'aria-label': 'Search' },
} satisfies Meta<typeof SearchBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <SearchBox
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
    )
  },
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox', { name: 'Search' })
    await expect(canvas.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument()
    await userEvent.type(input, 'Tokyo')
    await userEvent.click(canvas.getByRole('button', { name: 'Clear search' }))
    await expect(input).toHaveValue('')
    // Clearing returns focus to the input.
    await expect(input).toHaveFocus()
  },
}

export const CustomIcon: Story = {
  args: { icon: <MapPin size={20} />, placeholder: 'Where to?', 'aria-label': 'Destination' },
}
export const Disabled: Story = { args: { disabled: true } }

const CITIES = ['Tokyo, Japan', 'Toronto, Canada', 'Paris, France', 'Porto, Portugal']

/** Suggestions close once a location is picked, and reopen when typing again. */
export const WithSuggestions: Story = {
  args: { icon: <MapPin size={20} />, placeholder: 'Where to?', 'aria-label': 'Destination' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360, minHeight: 240 }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [query, setQuery] = useState('')
    const matches = query ? CITIES.filter((c) => c.toLowerCase().includes(query.toLowerCase())) : []
    return (
      <SearchBox
        {...args}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onClear={() => setQuery('')}
      >
        {matches.map((city) => (
          <MenuItem key={city} role="option" onClick={() => setQuery(city)}>
            {city}
          </MenuItem>
        ))}
      </SearchBox>
    )
  },
  play: async ({ canvas, step }) => {
    const input = canvas.getByRole('combobox', { name: 'Destination' })

    await step('typing opens the suggestions; picking one closes them', async () => {
      await userEvent.type(input, 'to')
      await expect(input).toHaveAttribute('aria-expanded', 'true')
      await userEvent.click(canvas.getByRole('option', { name: 'Tokyo, Japan' }))
      await expect(input).toHaveValue('Tokyo, Japan')
      await expect(canvas.queryByRole('listbox')).toBeNull()
      await expect(input).toHaveAttribute('aria-expanded', 'false')
      await expect(input).toHaveFocus()
    })

    await step('keyboard: ArrowDown into the list, Enter picks, Escape closes', async () => {
      await userEvent.clear(input)
      await userEvent.type(input, 'an') // Tokyo, Japan · Toronto, Canada · Paris, France
      await userEvent.keyboard('{ArrowDown}')
      await expect(canvas.getByRole('option', { name: 'Tokyo, Japan' })).toHaveFocus()
      await userEvent.keyboard('{ArrowDown}{Enter}')
      await expect(input).toHaveValue('Toronto, Canada')
      await expect(canvas.queryByRole('listbox')).toBeNull()
      await userEvent.keyboard('{Backspace}')
      await expect(canvas.getByRole('listbox')).toBeInTheDocument()
      await userEvent.keyboard('{Escape}')
      await expect(canvas.queryByRole('listbox')).toBeNull()
    })

    await step('a click outside closes it', async () => {
      await userEvent.clear(input)
      await userEvent.type(input, 'o')
      await expect(canvas.getByRole('listbox')).toBeInTheDocument()
      await userEvent.click(document.body)
      await expect(canvas.queryByRole('listbox')).toBeNull()
    })
  },
}
