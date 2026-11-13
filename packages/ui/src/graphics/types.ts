import type React from 'react'

/**
 * Props for design-system illustration graphics (multi-color SVG artwork).
 *
 * Unlike icons (single-color, currentColor-driven), graphics are full-color
 * illustrations. They render at their intrinsic dimensions by default; pass
 * `width`/`height` (or `className`) to scale them.
 *
 * This module is the home for scalable illustration assets. As more asset
 * types arrive (PNG, animations), add sibling folders alongside `components/`.
 */
export interface GraphicProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string
  height?: number | string
  className?: string
}
