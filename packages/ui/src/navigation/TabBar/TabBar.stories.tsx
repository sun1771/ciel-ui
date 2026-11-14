import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { TabBar, TabItem } from '.'

const meta = {
  title: 'Navigation/TabBar',
  component: TabBar,
  args: { 'aria-label': 'Results', children: null },
} satisfies Meta<typeof TabBar>

export default meta
type Story = StoryObj<typeof meta>

const TABS = ['Hotels', 'Flights', 'Cars']

export const Default: Story = {
  render: (args) => {
    const [tab, setTab] = useState('Hotels')
    return (
      <TabBar {...args}>
        {TABS.map((t) => (
          <TabItem key={t} isSelected={tab === t} onClick={() => setTab(t)}>
            {t}
          </TabItem>
        ))}
      </TabBar>
    )
  },
  play: async ({ canvas, step }) => {
    const tab = (name: string) => canvas.getByRole('tab', { name })

    await step('only the selected tab is in the tab order (roving tabindex)', async () => {
      await expect(tab('Hotels')).toHaveAttribute('tabindex', '0')
      await expect(tab('Flights')).toHaveAttribute('tabindex', '-1')
    })

    await step('arrow keys, Home and End move focus', async () => {
      tab('Hotels').focus()
      await userEvent.keyboard('{ArrowRight}')
      await expect(tab('Flights')).toHaveFocus()
      await userEvent.keyboard('{End}')
      await expect(tab('Cars')).toHaveFocus()
      await userEvent.keyboard('{ArrowRight}') // wraps
      await expect(tab('Hotels')).toHaveFocus()
      await userEvent.keyboard('{ArrowLeft}') // wraps back
      await expect(tab('Cars')).toHaveFocus()
      await userEvent.keyboard('{Home}')
      await expect(tab('Hotels')).toHaveFocus()
    })

    await step('click selects', async () => {
      await userEvent.click(tab('Cars'))
      await expect(tab('Cars')).toHaveAttribute('aria-selected', 'true')
    })
  },
}
