import React from 'react'
import type { IconProps } from '../types'

export function ArrowDownRight({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}: IconProps) {
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
        <path
          d="M4.69995 4.70013L11.2996 11.2998M11.2996 11.2998V4.70013M11.2996 11.2998H4.69995"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {size === 20 && (
        <path
          d="M5.875 5.87518L14.1246 14.1248M14.1246 14.1248L14.1246 5.87518M14.1246 14.1248L5.875 14.1248"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {size === 24 && (
        <path
          d="M7.05005 7.05023L16.9495 16.9497M16.9495 16.9497V7.05023M16.9495 16.9497H7.05005"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {size === 32 && (
        <path
          d="M9.3999 9.4003L22.5992 22.5996M22.5992 22.5996V9.4003M22.5992 22.5996H9.3999"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}
