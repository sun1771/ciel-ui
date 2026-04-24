import React from 'react'

export type AIChatStatus = 'default' | 'filled' | 'selected' | 'thinking'

export type AIChatSize = 'sm' | 'lg'

/** AIChat — floating chat input panel. Manages visual states for a conversational AI interface. */
export interface AIChatProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit'> {
  /** Visual status. If omitted, derived from textarea value + focus. */
  status?: AIChatStatus
  /** Disables the entire input panel */
  disabled?: boolean
  /** Size variant — sm (320px reference) or lg (440px reference) */
  size?: AIChatSize
  /** Show a tag chip in the input area. Only visible when status is 'filled'. */
  showTag?: boolean
  /** Label text for the tag chip */
  tagLabel?: string
  /** Called when user removes the tag */
  onRemoveTag?: () => void
  /** Controlled value for the textarea */
  value?: string
  /** Textarea change handler */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  /** Called with the current value when user submits (Enter or send button) */
  onSubmit?: (text: string) => void
  /** Textarea placeholder text */
  placeholder?: string
  className?: string
}
