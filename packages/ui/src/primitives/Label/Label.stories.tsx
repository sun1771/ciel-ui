import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Info } from '@cielui/icons'
import { Label } from '.'

const meta = {
  title: 'Primitives/Label',
  component: Label,
  args: { children: 'Email', variant: 'default' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'required'] },
    icon: { control: false },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Required: Story = {
  args: { variant: 'required' },
  play: async ({ canvas }) => {
    // "required" is announced to screen readers but visually hidden.
    const hidden = canvas.getByText('required')
    await expect(hidden).toBeInTheDocument()
    await expect(hidden.getBoundingClientRect().width).toBeLessThanOrEqual(1)
  },
}
export const WithIcon: Story = { args: { icon: <Info size={16} /> } }
