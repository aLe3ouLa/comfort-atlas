# The Comfort Atlas

A one-page interactive map of comfort food from around the world. Pick a
country and discover the dish people there reach for when they need warmth,
nostalgia, or connection — then make (and download) your own comfort food
stamp.

## Features

- **Interactive globe** — drag to spin, click a marker, or search a country
  to reveal its comfort dish, with a hover tooltip preview and a fading
  trail connecting the countries you've visited.
- **Surprise me** — jump to a random country's dish.
- **Featured dish of the day** — a different dish highlighted daily,
  downloadable as a printable stamp card.
- **Your comfort food** — visitors can submit their own comfort dish and
  generate a personalized, downloadable SVG stamp in one of several color
  styles. Nothing is sent anywhere; it stays in the browser tab.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and bundling
- [Oxlint](https://oxc.rs/) for linting
- Plain CSS (no framework) driven by design tokens in
  [`src/index.css`](src/index.css)
- [`cobe`](https://github.com/shuding/cobe) for the WebGL globe

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build      # type-check and build for production
npm run preview    # preview the production build locally
npm run lint        # run oxlint
```

## Project structure

```
src/
  components/           # reusable pieces used across sections (e.g. Globe)
  data/                  # comfort-foods.ts — the single source of truth for all dish data
  layout/
    header/, footer/    # site chrome
    sections/            # one folder-free pair per page section (Hero, ExploreGlobe, ...)
  utils/                  # shared, framework-agnostic helpers (e.g. stamp SVG generation)
```

Each component/section is a colocated `.tsx` + `.css` pair, imported
directly (no CSS modules or CSS-in-JS).

See [CLAUDE.md](CLAUDE.md) for the conventions this codebase follows, and
[docs/](docs/) for more detail on styling and code conventions.

## Credits

Font: [Nunito](https://fonts.google.com/specimen/Nunito).

## License

[MIT](LICENSE)
