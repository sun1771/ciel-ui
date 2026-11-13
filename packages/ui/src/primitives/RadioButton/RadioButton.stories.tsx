import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { RadioButton } from '.'

const meta = {
  title: 'Primitives/RadioButton',
  component: RadioButton,
  args: { children: 'Economy', name: 'cabin' },
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const Group: Story = {
  render: () => {
    const [value, setValue] = useState('economy')
    return (
      <fieldset style={{ border: 0, display: 'grid', gap: 8 }}>
        <legend>Cabin</legend>
        {['economy', 'business', 'first'].map((v) => (
          <RadioButton
            key={v}
            name="cabin"
            value={v}
            checked={value === v}
            onChange={() => setValue(v)}
          >
            {v[0].toUpperCase() + v.slice(1)}
          </RadioButton>
        ))}
      </fieldset>
    )
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('radio', { name: 'Economy' })).toBeChecked()
    await userEvent.click(canvas.getByText('Business'))
    await expect(canvas.getByRole('radio', { name: 'Business' })).toBeChecked()
    await expect(canvas.getByRole('radio', { name: 'Economy' })).not.toBeChecked()
  },
}
export const Disabled: Story = { args: { disabled: true } }
