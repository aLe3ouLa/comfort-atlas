# Style guide

Plain CSS, no framework, no CSS-in-JS. One stylesheet per component,
imported directly from the matching `.tsx` file. These are the rules the
existing stylesheets already follow.

## Design tokens

All colors, spacing, and the font family are defined once as custom
properties in [`src/index.css`](../src/index.css):

```css
--color-background, --color-surface
--color-text, --color-muted
--color-primary, --color-primary-hover
--color-secondary, --color-secondary-hover
--color-accent, --color-accent-hover, --color-accent-soft, --color-accent-dark
--color-peach, --color-sage, --color-border
--space-xs, --space-sm, --space-md, --space-lg, --space-xl, --space-2xl
--font-family
```

Never hardcode a hex color or a raw `rem`/`px` spacing value in a
component's CSS — use the matching `var(--color-*)` / `var(--space-*)`.
The one accepted exception is the generated SVG stamp
(`src/utils/comfort-stamp.ts`), which is a standalone downloadable file and
can't reference CSS custom properties — its palette is defined in
`stampVariants` and should stay visually consistent with the app's tokens
even though it can't literally import them.

## Class naming

- Lowercase, hyphen-separated, scoped by a component/section prefix:
  `globe-food-card`, `daily-dish-card`, `comfort-card-stage`,
  `stamp-swatch`. No BEM double-underscore/double-dash syntax, no
  utility-class approach (no Tailwind).
- State is expressed with a modifier class (`spice-chili`,
  `spice-chili-active`) or an ARIA attribute selector
  (`[aria-pressed="true"]`, `[aria-current="location"]`), matching whichever
  the component already sets for accessibility — don't add a parallel
  `is-active`-style class if an ARIA attribute is already there to select
  on.

## Layout

- Each top-level section owns its own outer width/centering:
  `width: min(100% - 2 * var(--space-lg), 75rem); margin-inline: auto;`
  and its own vertical rhythm: `padding-block: clamp(var(--space-2xl), 8vw, 7rem);`.
- Prefer `grid`/`flex` with `gap` over margins between siblings.
- Responsive behavior is handled with a small number of `max-width`
  breakpoints matching existing usage: `52rem`, `48rem`, `36rem`. Reuse one
  of these rather than introducing a new breakpoint unless the content
  genuinely needs it.

## Motion

- Any `@keyframes` animation or CSS `transition` used for decorative
  motion must be paired with a
  `@media (prefers-reduced-motion: reduce) { ... }` block that disables or
  shortens it — every existing stylesheet with an animation does this at
  the bottom of the file.
- Keep animations short (150–350ms for interaction feedback, up to a few
  seconds for ambient/looping effects like the steam wisps) and easing
  simple (`ease`, `ease-out`).

## Cards & surfaces

- Cards use a consistent "sticker" look: 2px solid border in
  `var(--color-primary)`, a rounded corner (`1–2rem`), and a hard offset
  `box-shadow` (e.g. `0.6rem 0.6rem 0 var(--color-primary)`) rather than a
  soft blurred shadow. Reuse this look for new card-like surfaces instead
  of inventing a new elevation style.
