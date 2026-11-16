'use client'

import { useState } from 'react'
import { AccordionProgressive } from '@cielui/react'

export default function Basic() {
  const [step, setStep] = useState<number | null>(0)
  const steps = ['Travellers', 'Contact details', 'Payment']
  return (
    <div style={{ display: 'grid', gap: 8, maxWidth: 480 }}>
      {steps.map((label, i) => (
        <AccordionProgressive
          key={label}
          label={`${i + 1}. ${label}`}
          isExpanded={step === i}
          onToggle={(open) => setStep(open ? i : null)}
        >
          Fields for “{label}” go here.
        </AccordionProgressive>
      ))}
    </div>
  )
}
