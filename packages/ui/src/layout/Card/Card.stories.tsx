import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import { ArrowRight, Star, User } from '@cielui/icons'
import { Button } from '../../primitives/Button'
import { Chip } from '../../primitives/Chip'
import { Card, CardBody, CardFooter, CardHeader, CardMedia, CardMetric, CardPrice } from '.'

const swatch = (color: string, label: string) => (
  <div role="img" aria-label={label} style={{ width: '100%', height: '100%', background: color }} />
)

const meta = {
  title: 'Layout/Card',
  component: Card,
  args: { isSelected: false, loading: false, children: null },
  argTypes: { children: { control: false } },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

/** A generic product card composed from the Card parts. */
export const Composed: Story = {
  render: (args) => (
    <Card {...args}>
      <CardMedia>{swatch('#c7d0ff', 'Product photo')}</CardMedia>
      <CardHeader title="Noise-cancelling headphones" titleAs="h3">
        <Chip color="green" variant="light">
          In stock
        </Chip>
      </CardHeader>
      <CardBody>
        <CardMetric icon={<Star size={16} />}>4.8 (2,104)</CardMetric>
        <CardMetric icon={<User size={16} />}>Ships in 2 days</CardMetric>
      </CardBody>
      <CardFooter
        action={
          <Button variant="transparent" size="sm" iconRight={<ArrowRight size={16} />}>
            Details
          </Button>
        }
      >
        <CardPrice value="$249" suffix="incl. VAT" />
      </CardFooter>
    </Card>
  ),
}

export const Selected: Story = { ...Composed, args: { isSelected: true } }

export const Loading: Story = {
  args: { loading: true },
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('[aria-busy="true"]')).not.toBeNull()
  },
}

export const MediaCarousel: Story = {
  args: { onClick: fn() },
  render: () => (
    <Card>
      <CardMedia
        images={[
          swatch('#c7d0ff', 'Photo 1 of 3'),
          swatch('#ffd7c2', 'Photo 2 of 3'),
          swatch('#c9f2d6', 'Photo 3 of 3'),
        ]}
      />
      <CardHeader title="Harbour view room" />
    </Card>
  ),
  play: async ({ canvas }) => {
    const prev = canvas.getByRole('button', { name: 'Previous image' })
    const next = canvas.getByRole('button', { name: 'Next image' })
    await expect(canvas.getByRole('img', { name: 'Photo 1 of 3' })).toBeInTheDocument()
    await expect(prev).toBeDisabled()
    await userEvent.click(next)
    await userEvent.click(next)
    await expect(canvas.getByRole('img', { name: 'Photo 3 of 3' })).toBeInTheDocument()
    await expect(next).toBeDisabled()
    await userEvent.click(canvas.getByRole('button', { name: 'Go to page 1' }))
    await expect(canvas.getByRole('img', { name: 'Photo 1 of 3' })).toBeInTheDocument()
  },
}
