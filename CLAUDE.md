# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

**The Comfort Atlas** — a single-page React app: an interactive spinning
globe (via [`cobe`](https://github.com/shuding/cobe)) where each available
country reveals a "comfort food" dish. Includes search, a random-pick
action, a daily featured dish, and a form where visitors can generate their
own downloadable comfort-food stamp (SVG, generated client-side, nothing is
submitted to a server).

There is no backend, no database, and no test suite. All content lives in
[`src/data/comfort-foods.ts`](src/data/comfort-foods.ts).

## Commands

```bash
npm run dev       # start Vite dev server
npm run build      # tsc -b && vite build — run this to verify TypeScript is clean
npm run lint        # oxlint src
npm run preview     # serve the production build
```

Always run `npm run build` (or at minimum `npx tsc -p tsconfig.app.json --noEmit`)
and `npm run lint` after changes — there is no test suite to catch mistakes
otherwise.

## Architecture

```
src/
  components/        # reusable pieces shared across sections (currently: Globe, SpiceBadge)
  data/               # comfort-foods.ts — source of truth for dish data + helpers
  layout/
    header/, footer/  # site chrome
    sections/          # one .tsx + .css pair per page section, composed in App.tsx
  utils/               # framework-agnostic helpers (e.g. comfort-stamp.ts)
```

`App.tsx` just composes `Header`, the section components in page order, and
`Footer`. Add a new section by creating a `sections/<name>.tsx` +
`sections/<name>.css` pair and wiring it into `App.tsx`.

## Conventions

Full detail lives in [docs/CONVENTIONS.md](docs/CONVENTIONS.md) (code/component
patterns) and [docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md) (CSS/design tokens).
The short version:

- **Components**: named exports, `PascalCase` component names, `kebab-case`
  file and folder names. Each component imports its own colocated `.css`
  file directly (no CSS modules, no CSS-in-JS).
- **Types**: `verbatimModuleSyntax` is on — always use `import type { X }`
  for type-only imports, or the build fails.
- **Styling**: never hardcode a color or spacing value in a component —
  use the CSS custom properties defined in `src/index.css` (`--color-*`,
  `--space-*`). Any custom `@keyframes` animation needs a matching
  `@media (prefers-reduced-motion: reduce)` override.
- **Data**: `comfort-foods.ts` is the single source of truth for dishes —
  don't duplicate dish data in components. Add derived helpers (like
  `getFoodEmoji`, `getDailyComfortFood`) there, not inline in components.
- **Shared logic**: framework-agnostic helpers (e.g. building/downloading
  the SVG stamp) belong in `src/utils/`, not duplicated per-component.
- **Accessibility**: prefer real `<button>`/`<a>` elements over custom
  ARIA-role controls — this app has no framework form/button primitives to
  fall back on, so a real element is the cheapest way to get focus and
  keyboard behavior for free (see the `stamp-swatch` buttons in
  `your-comfort-food.tsx`). A canvas/SVG visualization that duplicates an
  already-accessible control (e.g. `Globe` duplicating the search list in
  `explore-globe.tsx`) should be `aria-hidden` rather than retrofitted with
  manual roles.
- No global state library — local `useState` in the owning section is the
  norm; lift state only as far as it needs to go (see `explore-globe.tsx`).
