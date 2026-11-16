import React from 'react'
import type { IconProps } from '../types'

/** Three horizontal lines: the "open menu" button of a collapsed navigation. */
export function Hamburger({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  // Drawn on the 24px grid and scaled, with the stroke weights of the other
  // icons at each size (16: 1.4, 20: 1.6, 24: 2, 32: 2.4).
  const k = size / 24
  const stroke = ({ 16: 1.4, 20: 1.6, 24: 2, 32: 2.4 } as Record<number, number>)[size] ?? 2 * k
  const line = (y: number) => `M${4 * k} ${y * k}H${20 * k}`
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d={`${line(6)}${line(12)}${line(18)}`}
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
    </svg>
  )
}
