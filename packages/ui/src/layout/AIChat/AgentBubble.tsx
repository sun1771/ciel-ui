'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { AgentResponseMode } from './AgentResponseMode'
import { ResponseContent } from './ResponseContent'
import { ActionSuggestions } from './ActionSuggestions'
import { ResponseReactionBar } from './ResponseReactionBar'
import type { AgentBubbleProps } from './types'
import styles from './AIChat.module.css'

/**
 * AgentBubble — `.AI Chat Piece / Agent Bubble` (Figma node 2092:4258).
 * Composes the full agent message:
 *   AgentResponseMode (sparkle + optional thinking control)
 *   → ResponseContent (titled sections)
 *   → ActionSuggestions (follow-up Buttons)
 *   → ResponseReactionBar (Copy / Thumbs / Share / More)
 *
 * Figma variants → props:
 *   Mode=normal/thinking      → `mode`
 *   Response Loaded=True/False → `responseLoaded`
 *
 * When `responseLoaded` is false, only the AgentResponseMode header renders
 * (sparkle, plus a loader / "Thinking…" in thinking mode).
 *
 * In thinking mode the final response is ALWAYS shown once loaded; the
 * "Show Thinking" disclosure only reveals the separate `thinkingContent`
 * (the model's train of thought) — it never hides the final result.
 *
 * @see design-system/figma.md → AI Chat
 */
export const AgentBubble = React.forwardRef<HTMLDivElement, AgentBubbleProps>(
  (
    {
      mode = 'normal',
      responseLoaded = true,
      thinkingExpanded = false,
      onToggleThinking,
      thinkingContent,
      sections,
      children,
      suggestions,
      showReactionBar = true,
      onCopy,
      onThumbsUp,
      onThumbsDown,
      onShare,
      onMore,
      icon,
      labels,
      className,
      ...props
    },
    ref
  ) => {
    const thinking = mode === 'thinking'

    return (
      <div ref={ref} className={cn(styles.agentBubble, className)} {...props}>
        {/* The "Show Thinking" disclosure (with the train of thought as its
            content) lives inside AgentResponseMode. The final response below
            always stays visible — expanding only reveals the reasoning. */}
        <AgentResponseMode
          thinkingMode={thinking}
          status={responseLoaded ? 'loaded' : 'loading'}
          thinkingExpanded={thinkingExpanded}
          onToggleThinking={onToggleThinking}
          thinkingContent={thinkingContent}
          icon={icon}
          labels={labels}
        />

        {responseLoaded && (
          <div className={styles.agentContentArea}>
            <ResponseContent sections={sections}>{children}</ResponseContent>
            {suggestions && suggestions.length > 0 && (
              <ActionSuggestions suggestions={suggestions} />
            )}
          </div>
        )}

        {responseLoaded && showReactionBar && (
          <ResponseReactionBar
            labels={labels}
            onCopy={onCopy}
            onThumbsUp={onThumbsUp}
            onThumbsDown={onThumbsDown}
            onShare={onShare}
            onMore={onMore}
          />
        )}
      </div>
    )
  }
)

AgentBubble.displayName = 'AgentBubble'
