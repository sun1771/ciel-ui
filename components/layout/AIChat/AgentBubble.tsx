'use client'

import React from 'react'
import { cn } from '@/lib/utils'
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
 * @see design-system/figma.md → AI Chat
 */
export const AgentBubble = React.forwardRef<HTMLDivElement, AgentBubbleProps>(
  (
    {
      mode = 'normal',
      responseLoaded = true,
      thinkingExpanded = false,
      onToggleThinking,
      sections,
      children,
      suggestions,
      showReactionBar = true,
      onCopy,
      onThumbsUp,
      onThumbsDown,
      onShare,
      onMore,
      className,
      ...props
    },
    ref,
  ) => {
    const thinking = mode === 'thinking'
    // In thinking mode, response content is only shown once expanded.
    const showContent = responseLoaded && (!thinking || thinkingExpanded)

    return (
      <div ref={ref} className={cn(styles.agentBubble, className)} {...props}>
        <AgentResponseMode
          thinkingMode={thinking}
          status={responseLoaded ? 'loaded' : 'loading'}
          thinkingExpanded={thinkingExpanded}
          onToggleThinking={onToggleThinking}
        />

        {showContent && (
          <div className={styles.agentContentArea}>
            <ResponseContent sections={sections}>{children}</ResponseContent>
            {suggestions && suggestions.length > 0 && (
              <ActionSuggestions suggestions={suggestions} />
            )}
          </div>
        )}

        {responseLoaded && showReactionBar && (
          <ResponseReactionBar
            onCopy={onCopy}
            onThumbsUp={onThumbsUp}
            onThumbsDown={onThumbsDown}
            onShare={onShare}
            onMore={onMore}
          />
        )}
      </div>
    )
  },
)

AgentBubble.displayName = 'AgentBubble'
