import React from 'react'
import logo16 from './tripon-logo-16.svg'
import logo20 from './tripon-logo-20.svg'
import logo24 from './tripon-logo-24.svg'
import logo32 from './tripon-logo-32.svg'
import type { LogoProps } from './types'

// Next emits each statically-imported SVG as a static asset. Depending on the
// loader the default export is either the URL string or a StaticImageData
// object, so normalise to a URL either way.
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Next types `*.svg` imports as `any`
const url = (asset: any): string => (typeof asset === 'string' ? asset : asset.src)

const SOURCES: Record<NonNullable<LogoProps['size']>, string> = {
  16: url(logo16),
  20: url(logo20),
  24: url(logo24),
  32: url(logo32),
}

/**
 * TripOn AI brand logo. Renders the hand-tuned SVG that matches `size`
 * (16 / 20 / 24 / 32) as an `<img>`. The artwork is never recreated in code —
 * the raw SVGs are stored verbatim next to this file.
 */
export function Logo({ size = 24, alt = 'TripOn AI', className, ...props }: LogoProps) {
  return (
    <img
      src={SOURCES[size]}
      width={size}
      height={size}
      alt={alt}
      className={className}
      {...props}
    />
  )
}
