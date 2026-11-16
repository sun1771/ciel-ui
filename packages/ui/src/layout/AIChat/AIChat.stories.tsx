import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import { AIChat, AgentBubble, ChatInput, UserBubble } from '.'

const conversation = (
  <>
    <UserBubble>I’m going to Prague in May. Where should I stay?</UserBubble>
    <AgentBubble
      sections={[
        {
          title: 'Old Town',
          content: 'Walkable to most sights, lively in the evenings, pricier.',
        },
        { title: 'Vinohrady', content: 'Quieter, leafy streets and cafés, 15 minutes by tram.' },
      ]}
    />
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
  args: { onSubmit: fn(), onStateChange: fn(), children: conversation },
  argTypes: {
    defaultState: { control: 'inline-radio', options: ['default', 'wide', 'collapsed'] },
    state: { control: false },
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

export const Wide: Story = { args: { defaultState: 'wide' } }
export const Collapsed: Story = { args: { defaultState: 'collapsed' } }

/** Collapse and expand work with no state code; expanding restores the earlier width. */
export const CollapseAndExpand: Story = {
  args: { defaultState: 'wide' },
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Collapse chat' }))
    await expect(args.onStateChange).toHaveBeenLastCalledWith('collapsed')
    await expect(canvas.queryByRole('textbox')).toBeNull()
    await userEvent.click(canvas.getByRole('button', { name: 'Expand chat' }))
    await expect(args.onStateChange).toHaveBeenLastCalledWith('wide')
    await expect(canvas.getByRole('textbox', { name: 'Chat input' })).toBeInTheDocument()
  },
}

/** The conversation scrolls: it opens on the newest message and the oldest can be reached. */
export const Scrolling: Story = {
  play: async ({ canvas }) => {
    const log = canvas.getByRole('log', { name: 'Assistant' })
    await expect(log.scrollHeight).toBeGreaterThan(log.clientHeight)
    // Starts at the bottom (newest message).
    await expect(log.scrollTop + log.clientHeight).toBeGreaterThanOrEqual(log.scrollHeight - 2)
    // The first message can be scrolled fully into view.
    log.scrollTop = 0
    const first = canvas.getByText('I’m going to Prague in May. Where should I stay?')
    await expect(first.getBoundingClientRect().top).toBeGreaterThanOrEqual(
      log.getBoundingClientRect().top
    )
  },
}
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
