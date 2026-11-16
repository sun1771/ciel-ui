import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ArrowRight, Plus, Search, Sparkle, Expand, Calendar } from '@acme/icons'
import { Button, ButtonIcon, ButtonIconSwitching, ButtonVertical } from '.'

const meta = {
  title: 'Primitives/Button',
  component: Button,
  args: { children: 'Button', onClick: fn() },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'outline', 'transparent'] },
    size: { control: 'inline-radio', options: ['lg', 'sm'] },
    iconLeft: { control: false },
    iconRight: { control: false },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Button' }))
    await expect(args.onClick).toHaveBeenCalledOnce()
  },
}

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button {...args} variant="default">
        Default
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="transparent">
        Transparent
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
    </div>
  ),
}

export const WithIcons: Story = {
  args: { iconLeft: <Plus size={20} />, iconRight: <ArrowRight size={20} />, children: 'Add item' },
}

export const Loading: Story = { args: { isLoading: true, children: 'Saving' } }

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ args, canvas }) => {
    const button = canvas.getByRole('button', { name: 'Button' })
    await expect(button).toBeDisabled()
    await userEvent.click(button, { pointerEventsCheck: 0 })
    await expect(args.onClick).not.toHaveBeenCalled()
  },
}

export const IconOnly: StoryObj<typeof ButtonIcon> = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <ButtonIcon label="Search" icon={<Search size={20} />} />
      <ButtonIcon label="Search" icon={<Search size={20} />} variant="outline" shape="round" />
      <ButtonIcon label="Search" icon={<Search size={20} />} variant="transparent" size="sm" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    // Icon-only buttons must still have an accessible name.
    const buttons = within(canvasElement).getAllByRole('button', { name: 'Search' })
    await expect(buttons).toHaveLength(3)
    // Square, and as tall as a standard button of the same size (lg 38px, sm 30px).
    const size = (b: HTMLElement) => b.getBoundingClientRect()
    for (const [b, px] of [
      [buttons[0], 38],
      [buttons[1], 38],
      [buttons[2], 30],
    ] as const) {
      await expect(size(b).width).toBe(px)
      await expect(size(b).height).toBe(px)
    }
  },
}

/** Icon-only buttons match the height of text buttons beside them. */
export const IconWithText: StoryObj<typeof ButtonIcon> = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Button>Search</Button>
        <ButtonIcon label="Search" icon={<Search size={20} />} />
        <ButtonIcon label="Search" icon={<Search size={20} />} variant="outline" shape="round" />
        <ButtonIcon label="Search" icon={<Search size={20} />} variant="transparent" />
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Button size="sm">Search</Button>
        <ButtonIcon label="Search" icon={<Search size={16} />} size="sm" />
        <ButtonIcon
          label="Search"
          icon={<Search size={16} />}
          size="sm"
          variant="outline"
          shape="round"
        />
        <ButtonIcon label="Search" icon={<Search size={16} />} size="sm" variant="transparent" />
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const rows = canvasElement.querySelectorAll<HTMLElement>(':scope > div > div')
    await expect(rows).toHaveLength(2)
    for (const row of rows) {
      const heights = [...row.querySelectorAll('button')].map(
        (b) => b.getBoundingClientRect().height
      )
      await expect(new Set(heights).size).toBe(1)
    }
  },
}

export const IconSwitching: StoryObj<typeof ButtonIconSwitching> = {
  render: () => (
    <ButtonIconSwitching
      label="Expand"
      icon={<Sparkle size={20} />}
      hoverIcon={<Expand size={20} />}
      variant="transparent"
    />
  ),
}

export const Vertical: StoryObj<typeof ButtonVertical> = {
  render: () => (
    <ButtonVertical variant="outline" iconTop={<Calendar size={20} />} supportText="Support">
      Jan
    </ButtonVertical>
  ),
}
