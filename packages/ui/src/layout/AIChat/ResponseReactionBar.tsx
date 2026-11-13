'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { Copy, ThumbsUp, ThumbsDown, Share, MoreVertical } from '@acme/icons'
import { ButtonIcon } from '../../primitives/Button'
import type { ResponseReactionBarLabels, ResponseReactionBarProps } from './types'
import styles from './AIChat.module.css'

const DEFAULT_LABELS: ResponseReactionBarLabels = {
  copy: 'Copy',
  goodResponse: 'Good response',
  badResponse: 'Bad response',
  share: 'Share',
  moreOptions: 'More options',
}

/**
 * ResponseReactionBar — `.Response reaction bar` (Figma node 2090:3670).
 * A row of transparent icon buttons (Copy, Thumbs up, Thumbs down, Share, More)
 * for reacting to an agent response. Each is a reused ButtonIcon (transparent, sm).
 *
 * @see design-system/figma.md → AI Chat
 */
export const ResponseReactionBar = React.forwardRef<HTMLDivElement, ResponseReactionBarProps>(
  ({ labels, onCopy, onThumbsUp, onThumbsDown, onShare, onMore, className, ...props }, ref) => {
    const l = { ...DEFAULT_LABELS, ...labels }
    return (
      <div ref={ref} className={cn(styles.reactionBar, className)} {...props}>
        <ButtonIcon
          variant="transparent"
          size="sm"
          label={l.copy}
          icon={<Copy size={16} />}
          onClick={onCopy}
        />
        <ButtonIcon
          variant="transparent"
          size="sm"
          label={l.goodResponse}
          icon={<ThumbsUp size={16} />}
          onClick={onThumbsUp}
        />
        <ButtonIcon
          variant="transparent"
          size="sm"
          label={l.badResponse}
          icon={<ThumbsDown size={16} />}
          onClick={onThumbsDown}
        />
        <ButtonIcon
          variant="transparent"
          size="sm"
          label={l.share}
          icon={<Share size={16} />}
          onClick={onShare}
        />
        <ButtonIcon
          variant="transparent"
          size="sm"
          label={l.moreOptions}
          icon={<MoreVertical size={16} />}
          onClick={onMore}
        />
      </div>
    )
  }
)

ResponseReactionBar.displayName = 'ResponseReactionBar'
