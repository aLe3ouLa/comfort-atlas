# Code conventions

These are the patterns already in use across the codebase. Follow them
when adding or changing code so the codebase stays consistent.

## Naming

- Files and folders: `kebab-case` (`globe.tsx`, `your-comfort-food.css`,
  `comfort-foods.ts`).
- Components: `PascalCase`, exported as a named export —
  `export const ExploreGlobe = () => { ... }`, not a default export.
- Functions and variables: `camelCase`. Helper/derivation functions read as
  verbs (`getFoodEmoji`, `getDailyComfortFood`, `selectCountry`).
- Types: `PascalCase`, declared with `type`, not `interface`
  (`type ComfortFood = { ... }`).

## Components

- One component per file. A section under `src/layout/sections/` is always
  a `<name>.tsx` + `<name>.css` pair, imported with a relative
  `import "./<name>.css"` at the top of the `.tsx` file.
- Props are typed with an inline `type <Component>Props = { ... }` above the
  component, not exported unless another module needs it.
- Prefer plain function components with hooks (`useState`, `useEffect`,
  `useRef`) over class components or external state libraries.
- Keep derived values (filtered lists, computed labels) as plain `const`s in
  the render body rather than `useMemo` unless there's a measured
  performance reason — this app's data sets are small.

## TypeScript

- `verbatimModuleSyntax` is enabled in `tsconfig.app.json`: always write
  `import type { Foo } from "..."` for type-only imports, never a bare
  `import { Foo }` for a type. Mixing a type and a value from the same
  module needs two import statements (or `import { type Foo, bar } from`).
- `noUnusedLocals` / `noUnusedParameters` are enabled — don't leave unused
  imports or params; delete rather than prefix with `_`.
- Avoid `any`. If a browser API needs a narrower type than what `lib.dom`
  provides, write a small local type instead.

## Data

- `src/data/comfort-foods.ts` is the single source of truth for dish
  content (country, dish name, description) and the per-country emoji map.
  Don't inline dish data in a component — add it here.
- Derived/lookup helpers (`getFoodEmoji`, `getDailyComfortFood`,
  `countryCount`) live alongside the data, not in the components that use
  them.

## Shared logic

- Logic that doesn't depend on React (building the stamp SVG string,
  triggering a file download, formatting text) belongs in `src/utils/` as
  plain exported functions — see `src/utils/comfort-stamp.ts`. Components
  call these functions; they don't reimplement them.
- If the same interaction needs to happen from multiple entry points (e.g.
  selecting a country from the globe, from search results, or from "Spin me
  somewhere new"), route them all through one handler in the owning
  component (see `selectCountry` in `explore-globe.tsx`) rather than
  duplicating the state updates at each call site.

## Accessibility

- Prefer a real `<button>` over a custom ARIA-role control wherever
  possible — it gets focus, keyboard activation, and `:focus-visible`
  styling for free. Where one is genuinely needed (a swatch picker, say),
  give it `aria-label`/`aria-pressed` explicitly — see the `stamp-swatch`
  buttons in `your-comfort-food.tsx`.
- A canvas/WebGL or SVG visualization that duplicates an already-accessible
  control rather than being the only way to reach that content should be
  `aria-hidden="true"` instead of getting a manual `role`/`tabIndex`/
  `onKeyDown` retrofit — see the `<canvas>` in `globe.tsx`, which duplicates
  the search list one section stacks it next to.
- Live-updating content (search results, the selected-country card, the
  generated comfort card) uses `aria-live="polite"`.
- Decorative-only elements (icons, emoji, background SVG shapes) get
  `aria-hidden="true"`.

## Linting & type-checking

- `npm run lint` runs Oxlint (`.oxlintrc.json`) — currently enforces
  `react/rules-of-hooks` and `react/only-export-components`.
- `npm run build` runs `tsc -b` before `vite build` — treat a red
  type-check as a blocker, not a warning.
