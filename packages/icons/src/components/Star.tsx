import React from 'react'
import type { IconProps } from '../types'

export function Star({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
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
      {size === 16 && (
        <path d="M8 1.333L10.06 5.507L14.667 6.18L11.333 9.427L12.12 14.013L8 11.847L3.88 14.013L4.667 9.427L1.333 6.18L5.94 5.507Z" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 20 && (
        <path d="M10 1.667L12.575 6.883L18.333 7.725L14.167 11.783L15.15 17.517L10 14.808L4.85 17.517L5.833 11.783L1.667 7.725L7.425 6.883Z" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 24 && (
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 32 && (
        <path d="M16 2.667L20.12 11.013L29.333 12.36L22.667 18.853L24.24 28.027L16 23.693L7.76 28.027L9.333 18.853L2.667 12.36L11.88 11.013Z" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
    </svg>
  )
}
