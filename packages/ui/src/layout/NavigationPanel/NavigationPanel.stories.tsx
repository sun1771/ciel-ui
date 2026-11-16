import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { Bag, Calendar, Map, Sparkle } from '@acme/icons'
import {
  NavigationLogoItem,
  NavigationMenuGroup,
  NavigationMenuItem,
  NavigationPanel,
  NavigationProfileItem,
} from '.'

const meta = {
  title: 'Layout/NavigationPanel',
  component: NavigationPanel,
  args: { isExpanded: true },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof NavigationPanel>

export default meta
type Story = StoryObj<typeof meta>

const BrandMark = ({ label }: { label: string }) => (
  <span
    role={label ? 'img' : undefined}
    aria-label={label || undefined}
    style={{ display: 'inline-flex' }}
  >
    <Sparkle size={32} />
  </span>
)

export const Default: Story = {
  render: (args) => {
    const [expanded, setExpanded] = useState(args.isExpanded ?? true)
    const [selected, setSelected] = useState('trips')
    return (
      <div style={{ height: 520, display: 'flex' }}>
        <NavigationPanel isExpanded={expanded} onToggle={() => setExpanded((e) => !e)}>
          <NavigationMenuGroup gap="lg">
            <NavigationLogoItem
              logo={<BrandMark label="Acme" />}
              collapsedLogo={<BrandMark label="" />}
            />
            <NavigationMenuGroup gap="xxs">
              {[
                { id: 'trips', label: 'Trips', icon: <Calendar size={20} /> },
                { id: 'packages', label: 'Packages', icon: <Bag size={20} /> },
                { id: 'explore', label: 'Explore', icon: <Map size={20} /> },
              ].map((item) => (
                <NavigationMenuItem
                  key={item.id}
                  icon={item.icon}
                  isSelected={selected === item.id}
                  onClick={() => setSelected(item.id)}
                >
                  {item.label}
                </NavigationMenuItem>
              ))}
            </NavigationMenuGroup>
          </NavigationMenuGroup>
          <NavigationProfileItem userName="Sam Kim" avatarInitials="SK" />
        </NavigationPanel>
      </div>
    )
  },
  play: async ({ canvas, step }) => {
    await step('collapse and expand', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Collapse navigation' }))
      await userEvent.click(canvas.getByRole('button', { name: 'Expand navigation' }))
      await expect(canvas.getByRole('button', { name: 'Collapse navigation' })).toBeInTheDocument()
    })
    await step('select an item', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Explore' }))
      await expect(canvas.getByRole('button', { name: 'Explore' })).toHaveAttribute(
        'aria-current',
        'page'
      )
    })
  },
}

export const Collapsed: Story = {
  render: Default.render,
  args: { isExpanded: false },
  play: async ({ canvas }) => {
    // Labels are visually hidden when collapsed but remain the accessible names.
    const item = canvas.getByRole('button', { name: 'Packages' })
    await expect(item).toHaveAttribute('title', 'Packages')
    await expect(canvas.getByRole('button', { name: 'Expand navigation' })).toBeInTheDocument()
  },
}

const SECTIONS = [
  { label: 'Guides', items: ['Getting started', 'Theming', 'Accessibility'] },
  { label: 'Primitives', items: ['Button', 'Avatar', 'Badge', 'Chip'] },
  { label: 'Feedback', items: ['Loader', 'ProgressBar', 'Snackbar'] },
]

/** Long link lists: compact `sm` items under group headings, with `href`
 * links. The panel scrolls when the list is taller than the page. */
export const Grouped: Story = {
  args: { 'aria-label': 'Documentation' },
  render: (args) => (
    <div style={{ height: 480, display: 'flex' }}>
      <NavigationPanel {...args} style={{ ['--nav-panel-width' as string]: '220px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {SECTIONS.map((section) => (
            <NavigationMenuGroup key={section.label} label={section.label} gap="xxs">
              {section.items.map((item) => (
                <NavigationMenuItem
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  size="sm"
                  isSelected={item === 'Button'}
                >
                  {item}
                </NavigationMenuItem>
              ))}
            </NavigationMenuGroup>
          ))}
        </div>
      </NavigationPanel>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'Button' })).toHaveAttribute(
      'aria-current',
      'page'
    )
    await expect(canvas.getByText('Primitives')).toBeVisible()
  },
}
