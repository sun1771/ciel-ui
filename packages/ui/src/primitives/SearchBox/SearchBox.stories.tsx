import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { MapPin } from '@acme/icons'
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
