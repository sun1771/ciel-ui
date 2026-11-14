import React from 'react'
import type { IconProps } from '../types'

export function ArrowUpRight({
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
          d="M4.7002 11.2998L11.2999 4.70013M11.2999 4.70013L4.7002 4.70013M11.2999 4.70013V11.2998"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {size === 20 && (
        <path
          d="M5.875 14.1248L14.1246 5.87518M14.1246 5.87518L5.875 5.87518M14.1246 5.87518V14.1248"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {size === 24 && (
        <path
          d="M7.05005 16.9497L16.9495 7.05023M16.9495 7.05023L7.05005 7.05023M16.9495 7.05023V16.9497"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {size === 32 && (
        <path
          d="M9.40015 22.5996L22.5995 9.4003M22.5995 9.4003L9.40015 9.4003M22.5995 9.4003V22.5996"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}
