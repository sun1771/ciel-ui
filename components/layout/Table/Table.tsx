'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { ArrowRight } from '@/icons'
import styles from './Table.module.css'
import type {
  TableProps,
  TableCellType,
  TableCellValue,
  TableLinkCellValue,
} from './types'

function isTableLinkCellValue(value: TableCellValue): value is TableLinkCellValue {
  if (typeof value !== 'object' || value === null || React.isValidElement(value)) {
    return false
  }
  const obj = value as unknown as Record<string, unknown>
  return 'label' in obj && 'href' in obj
}

function renderCell(value: TableCellValue, type?: TableCellType): React.ReactNode {
  if (type === 'link') {
    if (!isTableLinkCellValue(value)) return null
    return (
      <a
        href={value.href}
        className={styles.cellLink}
        target={value.target}
        rel={value.target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {value.icon && (
          <span className={styles.cellLinkIcon} aria-hidden="true">
            {value.icon}
          </span>
        )}
        <span>{value.label}</span>
        <ArrowRight size={20} aria-hidden="true" />
      </a>
    )
  }

  if (type === 'action') {
    return (
      <div className={styles.cellAction}>
        {value as React.ReactNode}
      </div>
    )
  }

  return value as React.ReactNode
}

/**
 * Table
 * Data table with optional title bar and header actions.
 * Supports three cell types: copy (text), link (href + icon), action (icon buttons).
 *
 * @see design-system/figma.md for Figma mapping (node 926:1465)
 * @see docs/components.md for usage examples
 */
export const Table = React.forwardRef<HTMLDivElement, TableProps>(
  (
    {
      title,
      actions,
      columns,
      rows,
      className,
      ...props
    },
    ref
  ) => {
    const hasTitleBar = Boolean(title || actions)

    return (
      <div
        ref={ref}
        className={cn(styles.container, className)}
        {...props}
      >
        {hasTitleBar && (
          <div className={styles.titleBar}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {actions && (
              <div className={styles.actions}>{actions}</div>
            )}
          </div>
        )}

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    scope="col"
                    className={styles.th}
                    style={col.width ? { width: col.width } : undefined}
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className={styles.tbody}>
              {rows.map((row) => (
                <tr key={row.id} className={styles.tr}>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={styles.td}
                    >
                      {renderCell(row[col.key], col.type)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
)

Table.displayName = 'Table'
