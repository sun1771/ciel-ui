import React from 'react'

/** Props to spread onto your trigger `<button>`. */
export interface PopoverTriggerProps {
  ref: React.Ref<HTMLButtonElement>
  type: 'button'
  'aria-haspopup': 'dialog'
  'aria-expanded': boolean
  'aria-controls': string | undefined
  disabled: boolean
  onClick: () => void
}

export interface PopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Controlled open state. */
  open?: boolean
  /** Initial open state when uncontrolled. Default: false. */
  defaultOpen?: boolean
  /** Called when the popover wants to open or close (trigger click, Escape, click outside). */
  onOpenChange?: (open: boolean) => void
  /** Prevents opening. */
  disabled?: boolean
  /**
   * Renders the trigger. Spread `props` onto a `<button>`:
   * `trigger={(props) => <button {...props}>Open</button>}`
   */
  trigger: (props: PopoverTriggerProps, state: { open: boolean }) => React.ReactNode
  /** Accessible name of the panel (it has role="dialog"). */
  panelLabel: string
  /** Extra class for the floating panel. */
  panelClassName?: string
  /** Panel content, or a function receiving `close` for content that should dismiss the popover. */
  children: React.ReactNode | ((api: { close: () => void }) => React.ReactNode)
}
