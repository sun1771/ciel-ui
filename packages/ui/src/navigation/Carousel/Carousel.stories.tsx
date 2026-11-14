import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Carousel, CarouselItem } from '.'

const slide = (label: string) => (
  <div
    style={{
      width: 240,
      height: 120,
      display: 'grid',
      placeItems: 'center',
      background: 'var(--ds-mapped-surface-disabled)',
    }}
  >
    {label}
  </div>
)

const meta = {
  title: 'Navigation/Carousel',
  component: Carousel,
  args: { size: 'lg', shape: 'round', children: slide('Slide') },
  argTypes: {
    size: { control: 'inline-radio', options: ['lg', 'sm'] },
    shape: { control: 'inline-radio', options: ['round', 'rectangle'] },
    children: { control: false },
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
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
