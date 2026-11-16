'use client'

import { useState } from 'react'
import { ButtonIcon } from '@cielui/react'
import { Check, Copy } from '@cielui/icons'

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <ButtonIcon
      size="sm"
      variant="transparent"
      label={copied ? 'Copied' : 'Copy code'}
      icon={copied ? <Check size={16} /> : <Copy size={16} />}
      onClick={async () => {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
    />
  )
}
