import React from 'react'
import type { IconProps } from '../types'

export function ArrowUpLeft({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
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
          d="M11.2996 11.2998L4.69995 4.70013M4.69995 4.70013L4.69995 11.2998M4.69995 4.70013L11.2996 4.70013"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {size === 20 && (
        <path
          d="M14.1246 14.1248L5.875 5.87518M5.875 5.87518L5.875 14.1248M5.875 5.87518L14.1246 5.87518"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {size === 24 && (
        <path
          d="M16.9495 16.9497L7.05005 7.05023M7.05005 7.05023L7.05005 16.9497M7.05005 7.05023L16.9495 7.05023"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {size === 32 && (
        <path
          d="M22.5992 22.5996L9.3999 9.4003M9.3999 9.4003L9.3999 22.5996M9.3999 9.4003L22.5992 9.4003"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}
