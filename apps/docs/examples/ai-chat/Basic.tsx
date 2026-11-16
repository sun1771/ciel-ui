'use client'

import { useState } from 'react'
import { AIChat, AgentBubble, UserBubble } from '@cielui/react'

export default function Basic() {
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState<string[]>(['Find me a quiet hotel near the river.'])

  return (
    <div style={{ height: 560, display: 'flex' }}>
      <AIChat
        title="Trip assistant"
        inputValue={value}
        onInputChange={(e) => setValue(e.target.value)}
        onSubmit={(text) => {
          setMessages((m) => [...m, text])
          setValue('')
        }}
      >
        {messages.map((m, i) => (
          <UserBubble key={i}>{m}</UserBubble>
        ))}
        <AgentBubble
          sections={[
            {
              title: 'Top pick',
              content: 'Riverside Inn: 4.8 rating, 10 minutes’ walk to the old town.',
            },
            { title: 'Budget option', content: 'Canal House: $120/night, breakfast included.' },
          ]}
          suggestions={[{ label: 'Show on map' }, { label: 'Compare prices' }]}
        />
      </AIChat>
    </div>
  )
}
