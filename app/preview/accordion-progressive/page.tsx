'use client'

import React, { useState } from 'react'
import { AccordionProgressive } from '@/components/navigation/AccordionProgressive'

export default function AccordionProgressivePage() {
  const [expanded1, setExpanded1] = useState(false)
  const [expanded2, setExpanded2] = useState(true)
  const [expanded3, setExpanded3] = useState(false)
  const [expanded4, setExpanded4] = useState(true)

  return (
    <div style={{ padding: 'var(--ds-alias-spacing-xl)' }}>
      {/* Page header */}
      <div style={{
        marginBottom: 'var(--ds-alias-spacing-xl)',
        paddingBottom: 'var(--ds-alias-spacing-lg)',
        borderBottom: '1px solid var(--ds-mapped-border-default)'
      }}>
        <h1 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-typography-heading-h4-font-size)',
          fontWeight: 'var(--ds-typography-heading-h4-font-weight)',
          color: 'var(--ds-mapped-text-heading)',
          margin: 0
        }}>
          AccordionProgressive
        </h1>
        <p style={{
          fontSize: 'var(--ds-typography-body-md-font-size)',
          color: 'var(--ds-mapped-text-body)',
          marginTop: 'var(--ds-alias-spacing-xxs)'
        }}>
          Figma: NAVIGATION / Accordion Progressive — node 1683:1582
        </p>
        <p style={{
          fontSize: 'var(--ds-typography-body-sm-font-size)',
          color: 'var(--ds-mapped-text-disabled)',
          marginTop: 'var(--ds-alias-spacing-xxxs)',
          fontFamily: 'monospace'
        }}>
          import {'{'} AccordionProgressive {'}'} from &apos;@/components/navigation/AccordionProgressive&apos;
        </p>
      </div>

      {/* States — collapsed vs expanded side by side */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-typography-heading-h6-font-size)',
          fontWeight: 'var(--ds-typography-heading-h6-font-weight)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-lg)'
        }}>
          States
        </h2>

        {/* Default — collapsed */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <p style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            fontWeight: 600,
            color: 'var(--ds-mapped-text-disabled)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: 'var(--ds-alias-spacing-xs)'
          }}>
            Default — Collapsed
          </p>
          <div style={{ maxWidth: '320px' }}>
            <AccordionProgressive
              label="Parent Item"
              isExpanded={expanded1}
              onToggle={setExpanded1}
            />
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)', marginTop: 'var(--ds-alias-spacing-xxs)' }}>
            isExpanded=false (click to expand)
          </div>
        </div>

        {/* Default — expanded */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <p style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            fontWeight: 600,
            color: 'var(--ds-mapped-text-disabled)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: 'var(--ds-alias-spacing-xs)'
          }}>
            Default — Expanded
          </p>
          <div style={{ maxWidth: '320px' }}>
            <AccordionProgressive
              label="Parent Item"
              isExpanded={expanded2}
              onToggle={setExpanded2}
            >
              <div style={{
                background: 'var(--ds-mapped-surface-action-hover-light)',
                padding: '10px',
                borderRadius: 'var(--ds-alias-border-radius-md)',
                fontSize: 'var(--ds-typography-body-md-font-size)',
                color: 'var(--ds-mapped-text-heading)'
              }}>
                Content Placeholder
              </div>
            </AccordionProgressive>
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)', marginTop: 'var(--ds-alias-spacing-xxs)' }}>
            isExpanded=true (click to collapse)
          </div>
        </div>

        {/* Disabled — collapsed */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <p style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            fontWeight: 600,
            color: 'var(--ds-mapped-text-disabled)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: 'var(--ds-alias-spacing-xs)'
          }}>
            Disabled — Collapsed
          </p>
          <div style={{ maxWidth: '320px' }}>
            <AccordionProgressive
              label="Parent Item"
              isExpanded={expanded3}
              onToggle={setExpanded3}
              disabled
            />
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)', marginTop: 'var(--ds-alias-spacing-xxs)' }}>
            disabled isExpanded=false
          </div>
        </div>

        {/* Disabled — expanded */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <p style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            fontWeight: 600,
            color: 'var(--ds-mapped-text-disabled)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: 'var(--ds-alias-spacing-xs)'
          }}>
            Disabled — Expanded
          </p>
          <div style={{ maxWidth: '320px' }}>
            <AccordionProgressive
              label="Parent Item"
              isExpanded={expanded4}
              onToggle={setExpanded4}
              disabled
            >
              <div style={{
                background: 'var(--ds-mapped-surface-action-hover-light)',
                padding: '10px',
                borderRadius: 'var(--ds-alias-border-radius-md)',
                fontSize: 'var(--ds-typography-body-md-font-size)',
                color: 'var(--ds-mapped-text-heading)'
              }}>
                Content Placeholder
              </div>
            </AccordionProgressive>
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)', marginTop: 'var(--ds-alias-spacing-xxs)' }}>
            disabled isExpanded=true
          </div>
        </div>
      </section>

      {/* Interactive demo — multiple accordions */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-typography-heading-h6-font-size)',
          fontWeight: 'var(--ds-typography-heading-h6-font-weight)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-lg)'
        }}>
          Interactive group (click to toggle)
        </h2>
        <div style={{ maxWidth: '320px', display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)' }}>
          <AccordionProgressive
            label="Flights"
            isExpanded={expanded1}
            onToggle={setExpanded1}
          >
            <p style={{ margin: 0, fontSize: 'var(--ds-typography-body-md-font-size)', color: 'var(--ds-mapped-text-body)' }}>
              Search for the best flight deals across major airlines.
            </p>
          </AccordionProgressive>
          <AccordionProgressive
            label="Hotels"
            isExpanded={expanded2}
            onToggle={setExpanded2}
          >
            <p style={{ margin: 0, fontSize: 'var(--ds-typography-body-md-font-size)', color: 'var(--ds-mapped-text-body)' }}>
              Find accommodations from boutique stays to luxury resorts.
            </p>
          </AccordionProgressive>
          <AccordionProgressive
            label="Car Rental (disabled)"
            isExpanded={false}
            onToggle={() => {}}
            disabled
          />
        </div>
      </section>

      {/* Token reference */}
      <section>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-typography-heading-h6-font-size)',
          fontWeight: 'var(--ds-typography-heading-h6-font-weight)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-md)'
        }}>
          Tokens used
        </h2>
        <div style={{
          padding: 'var(--ds-alias-spacing-md)',
          background: 'var(--ds-mapped-surface-action-hover-light)',
          borderRadius: 'var(--ds-alias-border-radius-lg)',
          fontSize: 'var(--ds-typography-body-sm-font-size)',
          color: 'var(--ds-mapped-text-body)',
          fontFamily: 'monospace',
          lineHeight: 1.8
        }}>
          <div>--ds-mapped-surface-default — panel background</div>
          <div>--ds-mapped-surface-action-hover-light — hover background</div>
          <div>--ds-mapped-surface-disabled — disabled expanded header bg</div>
          <div>--ds-mapped-border-default — collapsed border</div>
          <div>--ds-mapped-border-action — expanded border (default)</div>
          <div>--ds-mapped-border-action-hover — hover border</div>
          <div>--ds-mapped-border-disabled — disabled border</div>
          <div>--ds-mapped-border-focus — focus ring</div>
          <div>--ds-mapped-text-body — label text</div>
          <div>--ds-mapped-text-action-hover — hover label text</div>
          <div>--ds-mapped-text-disabled — disabled label text</div>
          <div>--ds-mapped-icon-default — chevron (default)</div>
          <div>--ds-mapped-icon-action-hover — chevron (hover)</div>
          <div>--ds-mapped-icon-disabled — chevron (disabled)</div>
          <div>--ds-alias-border-radius-lg — corner radius (8px)</div>
          <div>--ds-alias-border-width-none — 0px border (joint edge)</div>
          <div>--ds-alias-border-width-sm — 1px border</div>
          <div>--ds-alias-border-width-md — 2px border (expanded)</div>
          <div>--ds-alias-spacing-xs — header vertical padding + gap (8px)</div>
          <div>--ds-alias-spacing-sm — horizontal padding + content padding (12px)</div>
          <div>--ds-brand-font-family-body — Inter</div>
          <div>--ds-brand-font-weight-regular — 400 (collapsed label)</div>
          <div>--ds-brand-font-weight-semi-bold — 600 (expanded label)</div>
          <div>--ds-typography-body-md-font-size — 16px</div>
          <div>--ds-typography-body-md-line-height — 20px</div>
        </div>
      </section>
    </div>
  )
}
