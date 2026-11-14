'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { Button } from '../../primitives/Button'
import type { ActionSuggestionsProps } from './types'
import styles from './AIChat.module.css'

/**
 * ActionSuggestions — `.Action suggestions` (Figma node 2090:3636).
 * A wrapping row of suggested follow-up actions. Each suggestion is a reused
 * Button (variant="outline", size="sm"), which matches the Figma button spec
 * exactly: white surface, default border, 8px radius, Body/sm label.
 *
 * @see design-system/figma.md → AI Chat
 */
export function ActionSuggestions({
  suggestions,
  className,
  ref,
  ...props
}: ActionSuggestionsProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} className={cn(styles.actionSuggestions, className)} {...props}>
      {suggestions.map((suggestion, i) => (
        <Button
          key={`${suggestion.label}-${i}`}
          variant="outline"
          size="sm"
          disabled={suggestion.disabled}
          onClick={suggestion.onClick}
        >
          {suggestion.label}
        </Button>
      ))}
    </div>
  )
}

ActionSuggestions.displayName = 'ActionSuggestions'
