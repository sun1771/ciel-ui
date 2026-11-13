import React from 'react'

/** How a column's cell content is rendered */
export type TableCellType = 'copy' | 'link' | 'action'

/**
 * Value shape for a link-type cell.
 * Renders as: [icon?] [label] [ArrowRight icon]
 */
export interface TableLinkCellValue {
  label: string
  href: string
  icon?: React.ReactNode
  target?: string
}

/** Column definition — one entry per visible column */
export interface TableColumnDef {
  key: string
  header: string
  /** Defaults to 'copy' */
  type?: TableCellType
  /** Optional fixed width, e.g. '160px' or '20%' */
  width?: string
}

/**
 * A cell value can be:
 * - A primitive / React node (for copy or action types)
 * - A TableLinkCellValue object (for link type)
 */
export type TableCellValue =
  | string
  | number
  | boolean
  | React.ReactNode
  | TableLinkCellValue
  | null
  | undefined

/**
 * A single row of table data.
 * Must include a unique `id`, plus one key per column.
 */
export interface TableRowData {
  id: string | number
  [key: string]: TableCellValue
}

/** Props for the Table component */
export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional H4 title shown in the header bar */
  title?: string
  /** Optional button group or actions shown top-right in the header */
  actions?: React.ReactNode
  /** Column definitions — order determines render order */
  columns: TableColumnDef[]
  /** Row data — each row must match the column keys */
  rows: TableRowData[]
  className?: string
}
