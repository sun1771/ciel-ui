import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import { AIChat, AgentBubble, ChatInput, UserBubble } from '.'

const conversation = (
  <>
    <UserBubble>Find me a quiet hotel near the river.</UserBubble>
    <AgentBubble
      sections={[
        { title: 'Top pick', content: 'Riverside Inn — 4.8 rating, 10 min walk to the old town.' },
        { title: 'Budget option', content: 'Canal House — $120/night, breakfast included.' },
      ]}
      suggestions={[{ label: 'Show on map' }, { label: 'Compare prices' }]}
    />
  </>
)

const meta = {
  title: 'Layout/AIChat',
  component: AIChat,
  args: { state: 'default', onSubmit: fn(), children: conversation },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'wide', 'collapsed'] },
    children: { control: false },
    icon: { control: false },
  },
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div style={{ height: 640, display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AIChat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <AIChat
        {...args}
        inputValue={value}
        onInputChange={(e) => setValue(e.target.value)}
        onSubmit={(text) => {
          args.onSubmit?.(text)
          setValue('')
        }}
      />
    )
  },
  play: async ({ args, canvas, step }) => {
    const input = canvas.getByRole('textbox', { name: 'Chat input' })

    await step('empty input offers voice input', async () => {
      await expect(canvas.getByRole('button', { name: 'Voice input' })).toBeInTheDocument()
    })

    await step('Shift+Enter adds a line, Enter sends', async () => {
      await userEvent.type(input, 'Any rooms{Shift>}{Enter}{/Shift}with a balcony?')
      await expect(input).toHaveValue('Any rooms\nwith a balcony?')
      await expect(canvas.getByRole('button', { name: 'Send message' })).toBeInTheDocument()
      await userEvent.keyboard('{Enter}')
      await expect(args.onSubmit).toHaveBeenCalledWith('Any rooms\nwith a balcony?')
      await expect(input).toHaveValue('')
    })
  },
}

export const Wide: Story = { args: { state: 'wide' } }
export const Collapsed: Story = { args: { state: 'collapsed' } }
export const Localised: Story = {
  args: {
    title: 'Assistent',
    placeholder: 'Frag mich etwas…',
    labels: { collapse: 'Chat einklappen', input: 'Chat-Eingabe', voiceInput: 'Spracheingabe' },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('textbox', { name: 'Chat-Eingabe' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Chat einklappen' })).toBeInTheDocument()
  },
}

export const Thinking: StoryObj<typeof AgentBubble> = {
  render: () => (
    <div style={{ width: 320, padding: 16 }}>
      <AgentBubble mode="thinking" responseLoaded={false} />
    </div>
  ),
}

export const InputStates: StoryObj<typeof ChatInput> = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 360, padding: 16 }}>
      <ChatInput />
      <ChatInput value="Book it" status="filled" showTag tagLabel="Flights" />
      <ChatInput status="thinking" />
      <ChatInput disabled />
    </div>
  ),
}
