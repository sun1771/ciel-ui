import React from 'react'

/* ============================================================================
   AI Chat component set — type definitions
   Mirrors the Figma "AI Chat" set (node 1250:2549) and its nested pieces:
   - .AI Chat Piece / Chat input        → ChatInput
   - .AI Chat Piece / Agent Bubble       → AgentBubble
   - .AI Chat Piece / User Bubble        → UserBubble
   - .Agent Response Mode                → AgentResponseMode
   - .Response Content / item            → ResponseContent / ResponseContentItem
   - .Action suggestions                 → ActionSuggestions
   - .Response reaction bar              → ResponseReactionBar
   - AI Chat (assembled panel)           → AIChat
   ============================================================================ */

/* ── AI Chat panel (node 3814:5013) ─────────────────────────────────────── */
/** Figma "State" property on the assembled AI Chat panel. */
export type AIChatState = 'default' | 'collapsed' | 'wide'

/* ── Chat input piece (node 1263:537) ───────────────────────────────────── */
/** Figma "Status" property on .AI Chat Piece / Chat input. */
export type ChatInputStatus = 'default' | 'filled' | 'selected' | 'thinking'
/** Figma "Size" property on .AI Chat Piece / Chat input. */
export type ChatInputSize = 'sm' | 'lg'

/* ── User bubble piece (node 2132:1446) ─────────────────────────────────── */
/** Figma "Size" property on .AI Chat Piece / User Bubble. */
export type UserBubbleSize = 'sm' | 'lg'

/* ── Agent response mode (node 2078:3215) ───────────────────────────────── */
/** Figma "Status" property — whether the agent response has finished loading. */
export type AgentResponseStatus = 'loaded' | 'loading'

/* ── Shared data shapes ─────────────────────────────────────────────────── */

/** One titled section inside an agent response (.Response Content item). */
export interface ResponseSection {
  /** Bold section heading (Body/md-semibold). Omit to hide the title line. */
  title?: React.ReactNode
  /** Section body content (Body/sm). */
  content: React.ReactNode
}

/** One suggested follow-up action rendered as a Button in .Action suggestions. */
export interface ActionSuggestion {
  /** Visible button label. */
  label: string
  /** Click handler. */
  onClick?: () => void
  /** Disables this single suggestion. */
  disabled?: boolean
}

/* ── Component props ─────────────────────────────────────────────────────── */

/** .Response Content item — a section title + body with an optional divider. */
export interface ResponseContentItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Bold section heading. Omit to render content only (sectionTitle=false). */
  title?: React.ReactNode
  /** Whether to render the trailing divider. Default: true. */
  separator?: boolean
  /** Section body content. */
  children: React.ReactNode
}

/** .Response Content — a vertical stack of ResponseContentItem blocks. */
export interface ResponseContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Sections to render as ResponseContentItem blocks. */
  sections?: ResponseSection[]
  /** Custom children (overrides `sections` when provided). */
  children?: React.ReactNode
}

/** .Action suggestions — a wrapping row of suggestion Buttons. */
export interface ActionSuggestionsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Suggested follow-up actions. */
  suggestions: ActionSuggestion[]
}

/** .Response reaction bar — icon buttons for reacting to an agent response. */
export interface ResponseReactionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  onCopy?: () => void
  onThumbsUp?: () => void
  onThumbsDown?: () => void
  onShare?: () => void
  onMore?: () => void
}

/** .Agent Response Mode — the agent sparkle row + optional thinking control. */
export interface AgentResponseModeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** True shows the "Show Thinking" expander / "Thinking…" status. Default: false. */
  thinkingMode?: boolean
  /** Whether the response has loaded. Default: 'loaded'. */
  status?: AgentResponseStatus
  /** Controls the expanded state of the "Show Thinking" disclosure. */
  thinkingExpanded?: boolean
  /** Called when the "Show Thinking" disclosure is toggled. */
  onToggleThinking?: () => void
}

/** .AI Chat Piece / Agent Bubble — a full agent message. */
export interface AgentBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma "Mode" property. Default: 'normal'. */
  mode?: 'normal' | 'thinking'
  /** Figma "Response Loaded" property. Default: true. */
  responseLoaded?: boolean
  /** Controls the "Show Thinking" disclosure (thinking mode only). */
  thinkingExpanded?: boolean
  /** Called when the "Show Thinking" disclosure is toggled. */
  onToggleThinking?: () => void
  /** Response sections. Ignored when `children` is provided. */
  sections?: ResponseSection[]
  /** Custom response content (overrides `sections`). */
  children?: React.ReactNode
  /** Suggested follow-up actions. When empty, the suggestion row is omitted. */
  suggestions?: ActionSuggestion[]
  /** Whether to render the reaction bar. Default: true. */
  showReactionBar?: boolean
  onCopy?: () => void
  onThumbsUp?: () => void
  onThumbsDown?: () => void
  onShare?: () => void
  onMore?: () => void
}

/** .AI Chat Piece / User Bubble — a user message with copy/edit actions. */
export interface UserBubbleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Figma "Size" property. Default: 'sm'. */
  size?: UserBubbleSize
  /** Message text. */
  children: React.ReactNode
  /** Whether to render the copy/edit action bar. Default: true. */
  showActions?: boolean
  onCopy?: () => void
  onEdit?: () => void
}

/** .AI Chat Piece / Chat input — the bottom-attached input field. */
export interface ChatInputProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit'> {
  /** Visual status. If omitted, derived from textarea value + focus. */
  status?: ChatInputStatus
  /** Reference size — sm (320px) or lg (440px). Width is fluid (100%). */
  size?: ChatInputSize
  /** Disables the entire input. */
  disabled?: boolean
  /** Show the tag pill (only visible when filled). */
  showTag?: boolean
  /** Tag pill label. */
  tagLabel?: string
  /** Called when the tag pill is dismissed. */
  onRemoveTag?: () => void
  /** Controlled textarea value. */
  value?: string
  /** Textarea change handler. */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  /** Called with the current value when the user submits. */
  onSubmit?: (text: string) => void
  /** Placeholder text. */
  placeholder?: string
}

/** AI Chat — the full assembled chat panel. */
export interface AIChatProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit' | 'title'> {
  /** Figma "State" property. Default: 'default'. */
  state?: AIChatState
  /** Header title. Default: 'TripOn Agent'. */
  title?: string
  /** Called when the header collapse arrow is clicked. */
  onCollapse?: () => void
  /** Called when the collapsed logo is clicked to re-expand. */
  onExpand?: () => void
  /** Conversation content — UserBubble / AgentBubble children. */
  children?: React.ReactNode
  /** Controlled value of the embedded chat input. */
  inputValue?: string
  /** Change handler for the embedded chat input. */
  onInputChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  /** Submit handler for the embedded chat input. */
  onSubmit?: (text: string) => void
  /** Status override for the embedded chat input. */
  inputStatus?: ChatInputStatus
  /** Disables the embedded chat input. */
  inputDisabled?: boolean
  /** Show the tag pill in the embedded chat input. */
  showTag?: boolean
  /** Tag pill label for the embedded chat input. */
  tagLabel?: string
  /** Called when the embedded chat input tag is dismissed. */
  onRemoveTag?: () => void
  /** Placeholder for the embedded chat input. */
  placeholder?: string
}
