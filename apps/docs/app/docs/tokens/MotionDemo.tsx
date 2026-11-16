'use client'

import React from 'react'
import { Button } from '@cielui/react'
import styles from './tokens.module.css'

type Row = { name: string; value: string; note?: string; bezier?: number[] }

/**
 * Plays each motion token: a dot crosses its track using that duration (with
 * the standard easing) or that easing (with the slow duration). With reduced
 * motion the durations are 0ms, so the dots jump straight to the end.
 */
export function MotionDemo({ kind, rows }: { kind: 'duration' | 'easing'; rows: Row[] }) {
  const [moved, setMoved] = React.useState(false)
  const label = kind === 'duration' ? 'Play durations' : 'Play easings'

  return (
    <div className={styles.motion}>
      <Button size="sm" variant="outline" onClick={() => setMoved((m) => !m)}>
        {moved ? 'Play back' : label}
      </Button>
      {rows.map((row) => (
        <div key={row.name} className={styles.motionRow}>
          <div className={styles.motionMeta}>
            <code className={styles.name}>--{row.name}</code>
            <span className={styles.values}>
              <code>{row.value}</code>
              {row.note && <span>{row.note}</span>}
            </span>
          </div>
          {row.bezier && <Curve bezier={row.bezier} />}
          <div className={styles.track} aria-hidden="true">
            <span
              className={styles.dot}
              data-moved={moved || undefined}
              style={{
                transitionDuration:
                  kind === 'duration' ? `var(--${row.name})` : 'var(--ds-motion-duration-slow)',
                transitionTimingFunction:
                  kind === 'easing' ? `var(--${row.name})` : 'var(--ds-motion-easing-standard)',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

/** The easing curve: progress (up) over time (right). */
function Curve({ bezier: [x1, y1, x2, y2] }: { bezier: number[] }) {
  const p = (x: number, y: number) => `${4 + x * 40} ${44 - y * 40}`
  return (
    <svg className={styles.curve} viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
      <path d={`M${p(0, 0)} L${p(1, 0)} M${p(0, 0)} L${p(0, 1)}`} className={styles.axis} />
      <path d={`M${p(0, 0)} C${p(x1, y1)} ${p(x2, y2)} ${p(1, 1)}`} className={styles.curveLine} />
    </svg>
  )
}
