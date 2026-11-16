'use client'

import { useState } from 'react'
import { Button, DialogBox } from '@cielui/react'

export default function Basic() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Cancel booking
      </Button>
      <DialogBox
        isOpen={open}
        title="Cancel booking?"
        onClose={() => setOpen(false)}
        primaryLabel="Cancel booking"
        onPrimary={() => setOpen(false)}
        showSecondary
        secondaryLabel="Keep it"
      >
        You will get a full refund within 5 business days.
      </DialogBox>
    </>
  )
}
