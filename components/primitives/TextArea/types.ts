import React from 'react'

/** Props for the TextArea component (label above, hint above field, error below). */
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Optional label text rendered above the textarea. */
  label?: string
  /** Optional hint text shown between the label and the textarea field. */
  hint?: string
  /** Non-empty string puts the textarea in error state (red border, shows error text below). */
  error?: string
  /** Optional icon rendered in the top-right corner of the textarea field. */
  iconRight?: React.ReactNode
  /** Applied to the outer wrapper div, not the native <textarea>. */
  className?: string
}
