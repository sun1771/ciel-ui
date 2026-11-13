import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import { PackageCard } from '.'

const meta = {
  title: 'Layout/PackageCard',
  component: PackageCard,
  args: {
    heading: 'Kyoto highlights',
    page: 1,
    totalPages: 3,
    onAction: fn(),
    onNextPage: fn(),
    onPrevPage: fn(),
    children: 'Fushimi Inari at sunrise, then Nishiki Market for lunch.',
  },
  argTypes: { variant: { control: 'inline-radio', options: ['default', 'itinerary'] } },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PackageCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Previous page' })).toBeDisabled()
    await userEvent.click(canvas.getByRole('button', { name: 'Next page' }))
    await expect(args.onNextPage).toHaveBeenCalledOnce()
    await userEvent.click(canvas.getByRole('button', { name: 'AI actions' }))
    await expect(args.onAction).toHaveBeenCalledOnce()
  },
}
export const Itinerary: Story = { args: { variant: 'itinerary', page: 2 } }
export const NotLoaded: Story = { args: { loaded: false } }
export const CustomPageLabel: Story = {
  args: { variant: 'itinerary', formatPageLabel: (p: number) => `Tag ${p}` },
}
