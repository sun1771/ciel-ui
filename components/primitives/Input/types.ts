import type { FieldProps } from '../Field/types'

/**
 * Props for the Input component — Label + Field + hint/error text.
 * All FieldProps (and therefore all native InputHTMLAttributes) pass
 * through to the inner <input> element.
 * className applies to the outer wrapper div.
 */
export interface InputProps extends FieldProps {
  /** Optional label text rendered above the field via the Label component. */
  label?: string
  /** Optional hint text shown below the field; hidden when error is non-empty. */
  hint?: string
}
