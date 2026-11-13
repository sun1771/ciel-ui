'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { Sparkle } from '@acme/icons'
import { Separator } from '../../primitives/Separator'
import { Loader } from '../../feedback/Loader'
import { Expander } from '../../navigation/Expander'
import type { AgentResponseModeLabels, AgentResponseModeProps } from './types'
import styles from './AIChat.module.css'

const DEFAULT_LABELS: AgentResponseModeLabels = {
  generating: 'Generating response',
  thinking: 'Thinking...',
  showThinking: 'Show Thinking',
}

/**
 * AgentResponseMode — `.Agent Response Mode` (Figma node 2078:3215).
 * The agent identity row: the agent icon (Sparkle by default), plus — in thinking mode — a
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
      icon = <Sparkle size={20} />,
      labels,
      className,
      ...props
    },
    ref
  ) => {
    const l = { ...DEFAULT_LABELS, ...labels }
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
            {icon}
          </span>

          {isLoading && (
            <div className={styles.thinkingStatus}>
              <Loader size="xxs" label={l.generating} />
              {thinkingMode && <p className={styles.thinkingStatusText}>{l.thinking}</p>}
            </div>
          )}

          {thinkingMode && !isLoading && (
            <Expander
              label={l.showThinking}
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
