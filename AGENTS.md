# Repository Guidelines

## Project Structure & Module Organization
- `src/core`: shared logic/services not tied to the map engine.
- `src/map`: GIS-specific UI (`components`), layer/data helpers (`layers`), and supporting logic (`core`); keep geo concerns here.
- `src/ui`: layout chrome (`components`) and pages (currently `pages/Home.vue`) that compose map + panels.
- `public/`: static assets and sample GeoJSON (`public/data/...`); entry chain `index.html` -> `main.ts` -> `App.vue`.
- Use the `@/` alias from `vite.config.ts`/`tsconfig.app.json` for imports from `src`.

## Build, Test, and Development Commands
- `npm install` to set up locally.
- `npm run dev` starts the Vite dev server (binds to LAN because `server.host = true`).
- `npm run build` runs `vue-tsc -b` type checks and bundles for production.
- `npm run preview` serves the built bundle for smoke tests.

## Coding Style & Naming Conventions
- Vue 3 + TypeScript with `<script setup>`; PascalCase component files and tags.
- Prefer two-space indentation; keep scoped styles close to components; minimize globals beyond the reset in `App.vue`.
- Order imports: Node/third-party, then `@/`, then relatives; keep map assets under `src/map` and shared UI in `src/ui/components`.
- Place business logic in `src/core` or `src/map/core`; keep page files focused on composition.

## Testing Guidelines
- No automated runner yet; manual checks are required.
- Smoke checklist: `npm run dev`, OSM base map renders, `public/data/countries_demo.geojson` displays, toolbar/status overlays show, and drag-and-drop GeoJSON works.
- If adding tests, use Vitest + `@vue/test-utils`, mirror component names under `src/**/__tests__`, and keep fixtures small.

## Commit & Pull Request Guidelines
- Use short, imperative commit titles; history favors brief Chinese phrases (e.g., "tiaozheng buju, chuli zujian").
- One logical change per commit; isolate formatting-only updates when possible.
- PRs: state motivation, summarize UI/map impact, link issues, list verification steps (`dev`, `build`, `preview`), and attach before/after screenshots for layout or map changes.
- Mention new data files in `public/data` and any schema or interaction changes that affect map consumers.

## Security & Configuration
- Query English corpus and output it to simplified Chinese for users. Necessary words can be used in English.
- Do not commit secrets; current map uses public OSM. If credentials are needed, load via `.env` and commit an `.env.example`.
- Avoid large datasets in Git; keep small samples in `public/data` and note their source.
- For remote GeoJSON, handle CORS and provide a local fallback so preview checks remain offline-ready.
