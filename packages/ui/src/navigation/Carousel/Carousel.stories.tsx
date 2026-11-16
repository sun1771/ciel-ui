import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { Carousel, CarouselItem } from '.'

const slide = (label: string) => (
  <div
    key={label}
    style={{
      height: 140,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 8,
      background: 'var(--ds-mapped-surface-action-hover-light)',
      color: 'var(--ds-mapped-text-body)',
    }}
  >
    {label}
  </div>
)
const SLIDES = ['Lisbon', 'Kyoto', 'Oaxaca', 'Reykjavík'].map(slide)

const meta = {
  title: 'Navigation/Carousel',
  component: Carousel,
  args: { 'aria-label': 'Destinations', size: 'lg', shape: 'round', children: SLIDES },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: { control: 'inline-radio', options: ['lg', 'sm'] },
    shape: { control: 'inline-radio', options: ['round', 'rectangle'] },
    children: { control: false },
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, step }) => {
    const prev = canvas.getByRole('button', { name: 'Previous slide' })
    const next = canvas.getByRole('button', { name: 'Next slide' })
    const current = () => canvas.getByRole('button', { name: /, current$/ })
    // The page dots are named after the carousel, so two carousels differ.
    await expect(canvas.getByRole('navigation')).toHaveAccessibleName('Destinations: slides')

    await step('starts on the first slide', async () => {
      await expect(prev).toBeDisabled()
      await expect(current()).toHaveAccessibleName('Page 1, current')
      // Only the visible slide is reachable.
      await expect(canvas.getAllByRole('group')).toHaveLength(1)
    })
    await step('next / previous move one slide', async () => {
      await userEvent.click(next)
      await userEvent.click(next)
      await expect(current()).toHaveAccessibleName('Page 3, current')
      await userEvent.click(prev)
      await expect(current()).toHaveAccessibleName('Page 2, current')
    })
    await step('dots jump to a slide; next stops at the last', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Go to page 4' }))
      await expect(next).toBeDisabled()
      await expect(canvas.getByRole('group', { name: '4 / 4' })).toHaveTextContent('Reykjavík')
    })
  },
}
export const Disabled: Story = { args: { disabled: true } }
export const Items: StoryObj<typeof CarouselItem> = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <CarouselItem direction="left" label="Previous" />
      <CarouselItem direction="right" label="Next" shape="rectangle" />
      <CarouselItem direction="right" label="Next" size="sm" disabled />
    </div>
  ),
}
