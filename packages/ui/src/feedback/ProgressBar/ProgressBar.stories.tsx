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
    <div style={{ display: 'flex', gap: 16 }}>
      <ProgressCircle value={25} showLabel label="Step 1 of 4" />
      <ProgressCircle value={75} size="sm" label="Profile completion" />
    </div>
  ),
}
