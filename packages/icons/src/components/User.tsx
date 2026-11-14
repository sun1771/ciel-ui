import React from 'react'
import type { IconProps } from '../types'

export function User({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
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
        <>
          <path
            d="M13.3334 14V12.6667C13.3334 11.9594 13.0525 11.2811 12.5524 10.781C12.0523 10.281 11.374 10 10.6667 10H5.33341C4.62617 10 3.94789 10.281 3.4478 10.781C2.9477 11.2811 2.66675 11.9594 2.66675 12.6667V14"
            stroke={color}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.00008 7.33333C9.47284 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.47284 2 8.00008 2C6.52732 2 5.33341 3.19391 5.33341 4.66667C5.33341 6.13943 6.52732 7.33333 8.00008 7.33333Z"
            stroke={color}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {size === 20 && (
        <>
          <path
            d="M16.6668 17.5V15.8333C16.6668 14.9493 16.3156 14.1014 15.6905 13.4763C15.0654 12.8512 14.2176 12.5 13.3335 12.5H6.66683C5.78277 12.5 4.93493 12.8512 4.30981 13.4763C3.68469 14.1014 3.3335 14.9493 3.3335 15.8333V17.5"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.0002 9.16667C11.8411 9.16667 13.3335 7.67428 13.3335 5.83333C13.3335 3.99238 11.8411 2.5 10.0002 2.5C8.15921 2.5 6.66683 3.99238 6.66683 5.83333C6.66683 7.67428 8.15921 9.16667 10.0002 9.16667Z"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {size === 24 && (
        <>
          <path
            d="M20.0002 21V19C20.0002 17.9391 19.5788 16.9217 18.8287 16.1716C18.0785 15.4214 17.0611 15 16.0002 15H8.00024C6.93938 15 5.92196 15.4214 5.17182 16.1716C4.42167 16.9217 4.00024 17.9391 4.00024 19V21"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0002 11C14.2094 11 16.0002 9.20914 16.0002 7C16.0002 4.79086 14.2094 3 12.0002 3C9.79111 3 8.00024 4.79086 8.00024 7C8.00024 9.20914 9.79111 11 12.0002 11Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {size === 32 && (
        <>
          <path
            d="M26.6668 28V25.3333C26.6668 23.9188 26.1049 22.5623 25.1047 21.5621C24.1045 20.5619 22.748 20 21.3335 20H10.6668C9.25234 20 7.89579 20.5619 6.89559 21.5621C5.8954 22.5623 5.3335 23.9188 5.3335 25.3333V28"
            stroke={color}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.0002 14.6667C18.9457 14.6667 21.3335 12.2789 21.3335 9.33333C21.3335 6.38781 18.9457 4 16.0002 4C13.0546 4 10.6668 6.38781 10.6668 9.33333C10.6668 12.2789 13.0546 14.6667 16.0002 14.6667Z"
            stroke={color}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  )
}
