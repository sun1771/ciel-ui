'use client'

import { useState } from 'react'
import * as Icons from '@cielui/icons'
import { SearchBox } from '@cielui/react'
import styles from './icons.module.css'

const ALL = Object.entries(Icons).filter(([, v]) => typeof v === 'function') as [
  string,
  React.ComponentType<{ size?: number }>,
][]

export function IconGallery() {
  const [query, setQuery] = useState('')
  const shown = ALL.filter(([name]) => name.toLowerCase().includes(query.toLowerCase()))
  return (
    <>
      <div className={styles.search}>
        <SearchBox
          aria-label="Search icons"
          placeholder={`Search ${ALL.length} icons`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClear={() => setQuery('')}
        />
      </div>
      <p className={styles.count} aria-live="polite">
        {shown.length} {shown.length === 1 ? 'icon' : 'icons'}
      </p>
      <ul className={styles.grid}>
        {shown.map(([name, Icon]) => (
          <li key={name} className={styles.item}>
            <Icon size={24} />
            <code>{name}</code>
          </li>
        ))}
      </ul>
    </>
  )
}
