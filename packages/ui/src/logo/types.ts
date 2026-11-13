import type React from 'react'

/**
 * Props for the TripOn AI brand logo.
 *
 * The logo is a full-color brand mark, not a single-color icon — it ships as
 * four hand-tuned raster-grid SVGs (16 / 20 / 24 / 32, matching the icon size
 * scale). The raw SVG files live alongside this module and are loaded as an
 * `<img>`; they are never recreated or re-coloured in code.
 */
export interface LogoProps extends Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'width' | 'height'
> {
  /** Pixel size of the square logo. Picks the matching hand-tuned SVG. */
  size?: 16 | 20 | 24 | 32
  /** Accessible name. Defaults to "TripOn AI". Pass `alt=""` to mark decorative. */
  alt?: string
  className?: string
}
