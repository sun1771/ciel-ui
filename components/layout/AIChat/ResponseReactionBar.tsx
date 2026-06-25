'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Copy, ThumbsUp, ThumbsDown, Share, MoreVertical } from '@/icons'
import { ButtonIcon } from '@/components/primitives/Button'
import type { ResponseReactionBarProps } from './types'
import styles from './AIChat.module.css'

/**
 * ResponseReactionBar — `.Response reaction bar` (Figma node 2090:3670).
 * A row of transparent icon buttons (Copy, Thumbs up, Thumbs down, Share, More)
 * for reacting to an agent response. Each is a reused ButtonIcon (transparent, sm).
 *
 * @see design-system/figma.md → AI Chat
 */
export const ResponseReactionBar = React.forwardRef<HTMLDivElement, ResponseReactionBarProps>(
  ({ onCopy, onThumbsUp, onThumbsDown, onShare, onMore, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.reactionBar, className)} {...props}>
        <ButtonIcon
          variant="transparent"
          size="sm"
          label="Copy"
          icon={<Copy size={16} />}
          onClick={onCopy}
        />
        <ButtonIcon
          variant="transparent"
          size="sm"
          label="Good response"
          icon={<ThumbsUp size={16} />}
          onClick={onThumbsUp}
        />
        <ButtonIcon
          variant="transparent"
          size="sm"
          label="Bad response"
          icon={<ThumbsDown size={16} />}
          onClick={onThumbsDown}
        />
        <ButtonIcon
          variant="transparent"
          size="sm"
          label="Share"
          icon={<Share size={16} />}
          onClick={onShare}
        />
        <ButtonIcon
          variant="transparent"
          size="sm"
          label="More options"
          icon={<MoreVertical size={16} />}
          onClick={onMore}
        />
      </div>
    )
  },
)

ResponseReactionBar.displayName = 'ResponseReactionBar'
