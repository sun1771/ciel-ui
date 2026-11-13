'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { TripOnChatIcon } from '@acme/icons'
import { Separator } from '../../primitives/Separator'
import { Loader } from '../../feedback/Loader'
import { Expander } from '../../navigation/Expander'
import type { AgentResponseModeProps } from './types'
import styles from './AIChat.module.css'

/**
 * AgentResponseMode — `.Agent Response Mode` (Figma node 2078:3215).
 * The agent identity row: the TripOn sparkle icon, plus — in thinking mode — a
 * "Show Thinking" disclosure (loaded) or a "Thinking…" loading status (loading).
 *
 * The disclosure reuses the navigation `Expander` (size="sm"); its children are
 * the model's train of thought (`thinkingContent`). Collapsed, the Expander hugs
 * its header; expanded, it grows to fill the row so the revealed content fills
 * the width.
 *
 * Figma variants → props:
 *   Thinking Mode=False/True → `thinkingMode`
 *   Status=loaded/loading    → `status`
 *
 * @see design-system/figma.md → AI Chat
 */
export const AgentResponseMode = React.forwardRef<HTMLDivElement, AgentResponseModeProps>(
  (
    {
      thinkingMode = false,
      status = 'loaded',
      thinkingExpanded = false,
      onToggleThinking,
      thinkingContent,
      className,
      ...props
    },
    ref
  ) => {
    const isLoading = status === 'loading'

    return (
      <div
        ref={ref}
        className={cn(
          styles.agentResponseMode,
          thinkingMode && styles.agentResponseModeThinking,
          className
        )}
        {...props}
      >
        <div className={styles.responseModeRow}>
          <span className={styles.sparkle} aria-hidden="true">
            <TripOnChatIcon size={20} />
          </span>

          {isLoading && (
            <div className={styles.thinkingStatus}>
              <Loader size="xxs" label="Generating response" />
              {thinkingMode && <p className={styles.thinkingStatusText}>Thinking...</p>}
            </div>
          )}

          {thinkingMode && !isLoading && (
            <Expander
              label="Show Thinking"
              size="sm"
              isExpanded={thinkingExpanded}
              onToggle={onToggleThinking}
              className={thinkingExpanded ? styles.showThinkingFill : styles.showThinkingHug}
            >
              {thinkingContent}
            </Expander>
          )}
        </div>

        {thinkingMode && (
          <div className={styles.separatorWrap}>
            <Separator />
          </div>
        )}
      </div>
    )
  }
)

AgentResponseMode.displayName = 'AgentResponseMode'
