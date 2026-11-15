import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { ProgressBar, ProgressCircle } from '.'

const meta = {
  title: 'Feedback/ProgressBar',
  component: ProgressBar,
  args: { value: 60, showLabel: true, label: 'Upload progress' },
  argTypes: { value: { control: { type: 'range', min: 0, max: 100 } } },
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

export const Bar: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <ProgressBar {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    const bar = canvas.getByRole('progressbar')
    await expect(bar).toHaveAttribute('aria-valuenow', '60')
  },
}
export const Circle: StoryObj<typeof ProgressCircle> = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      <ProgressCircle value={25} showLabel label="Step 1 of 4" />
      <ProgressCircle value={100} showLabel label="Upload" />
      <ProgressCircle value={100} size="sm" showLabel label="Profile completion" />
      <ProgressCircle value={75} size="sm" label="Profile completion" />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('progressbar', { name: 'Step 1 of 4' })).toHaveAttribute(
      'aria-valuenow',
      '25'
    )
    // "100%" fits inside the ring's hole at both sizes (44px default, 35px sm).
    const [big, small] = canvas.getAllByText(
      (_, el) => el?.textContent === '100%' && el.tagName === 'SPAN' && el.childElementCount === 1
    )
    const textWidth = (el: HTMLElement) => {
      const range = document.createRange()
      range.selectNodeContents(el)
      return range.getBoundingClientRect().width
    }
    await expect(textWidth(big)).toBeLessThan(44)
    await expect(textWidth(small)).toBeLessThan(35)
  },
}
