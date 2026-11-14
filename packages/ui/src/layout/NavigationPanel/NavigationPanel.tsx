'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import type {
  NavigationPanelProps,
  NavigationMenuGroupProps,
  NavigationPanelContextValue,
} from './types'
import styles from './NavigationPanel.module.css'

/**
 * Context carrying the panel's expanded state and collapse/expand handler down
 * to descendant items (NavigationMenuItem, NavigationLogoItem) so they can
 * adapt their layout without prop drilling. Defaults to expanded when an item
 * is rendered outside a NavigationPanel.
 */
const NavigationPanelContext = React.createContext<NavigationPanelContextValue>({
  isExpanded: true,
})

export const useNavigationPanel = (): NavigationPanelContextValue =>
  React.useContext(NavigationPanelContext)

/**
 * NavigationPanel
 * A collapsible vertical sidebar navigation container. Expanded, items show an
 * icon and label; collapsed, only icons are visible and the panel shrinks to
 * icon width. Top and bottom item groups are pushed apart (justify-between) so
 * supporting items (Settings, Profile) sit at the bottom.
 *
 * @see design-system/figma.md → NavigationPanel
 * @see docs/components.md for usage examples
 */
export function NavigationPanel({
  isExpanded = true,
  onToggle,
  children,
  className,
  'aria-label': ariaLabel = 'Main navigation',
  ref,
  ...props
}: NavigationPanelProps & { ref?: React.Ref<HTMLElement> }) {
  const contextValue = React.useMemo<NavigationPanelContextValue>(
    () => ({ isExpanded, onToggle }),
    [isExpanded, onToggle]
  )

  return (
    <NavigationPanelContext.Provider value={contextValue}>
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={cn(
          styles.panel,
          isExpanded ? styles.panelExpanded : styles.panelCollapsed,
          className
        )}
        {...props}
      >
        {children}
      </nav>
    </NavigationPanelContext.Provider>
  )
}

NavigationPanel.displayName = 'NavigationPanel'

/**
 * NavigationMenuGroup
 * Groups a set of navigation items within a NavigationPanel. The panel uses
 * justify-between so a top group and a bottom group are pushed to opposite
 * ends. Pass `gap="lg"` for the top wrapper that separates the logo item from
 * the primary item group; the default `gap="none"` matches stacked item lists.
 */
export function NavigationMenuGroup({
  gap = 'none',
  children,
  className,
  ref,
  ...props
}: NavigationMenuGroupProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div
      ref={ref}
      role="group"
      className={cn(
        styles.menuGroup,
        gap === 'xxs' && styles.menuGroupGapXxs,
        gap === 'md' && styles.menuGroupGapMd,
        gap === 'lg' && styles.menuGroupGapLg,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

NavigationMenuGroup.displayName = 'NavigationMenuGroup'
