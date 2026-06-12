# Design

## Visual Theme

A field-operator command desk: blackened metal, clean white proof sheets, signal green, and clay-red annotations. The site should feel like a public-facing operating brief, not a soft founder bio or generic AI landing page.

## Color Palette

Use OKLCH tokens only.

- Background: near-black neutral for the main surface
- Sheet: true white for proof sheets and content surfaces
- Ink: near-white on dark, near-black on proof sheets
- Primary: signal green anchored near oklch(0.650 0.150 145)
- Accent: clay red for human judgment and annotations
- Support: deep blue for links and operational references

## Typography

System sans stack, used with high weight and scale contrast. Avoid Inter as a named token and avoid editorial serif styling. H1 should be large but not cramped, with balanced wrapping and a clear name signal.

## Layout

- First viewport: asymmetric command brief with Sam's name, role, photo, and CTA.
- Avoid repeated equal-card grids.
- Use ledgers, briefs, split bands, and proof rows to make information feel operational.
- One dominant idea per section.
- Mobile should collapse into readable stacked briefs with no hidden core content.

## Components

- Command header
- Identity plate with photo
- Proof ledger rows
- Operating-system diagram
- CTA panel
- Related AIBB route list

## Motion

Subtle first-load reveal and hover states only. Content must be visible without JavaScript. Respect reduced motion.
