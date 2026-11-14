import React from 'react'
import type { IconProps } from '../types'

export function Share({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
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
          d="M7.14952 8.85055L13.5 2.5M7.14952 8.85055L2.5 7.14945L13.5 2.5M7.14952 8.85055L8.85048 13.5L13.5 2.5"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {size === 20 && (
        <path
          d="M8.9369 11.0632L16.875 3.125M8.9369 11.0632L3.125 8.93681L16.875 3.125M8.9369 11.0632L11.0631 16.875L16.875 3.125"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {size === 24 && (
        <path
          d="M10.7243 13.2758L20.25 3.75M10.7243 13.2758L3.75 10.7242L20.25 3.75M10.7243 13.2758L13.2757 20.25L20.25 3.75"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {size === 32 && (
        <path
          d="M14.299 17.7011L27 5M14.299 17.7011L5 14.2989L27 5M14.299 17.7011L17.701 27L27 5"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}
