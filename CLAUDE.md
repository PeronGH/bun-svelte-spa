---
description: Svelte 5 pure-frontend SPA bundled by Bun. No Vite, no server.
globs: "*.ts, *.svelte, *.html, *.css, *.js, package.json"
alwaysApply: false
---

Pure-frontend **Svelte 5** SPA bundled by **Bun** ([`bun-plugin-svelte`](https://github.com/oven-sh/bun/tree/main/packages/bun-plugin-svelte) + [`bun-plugin-tailwind`](https://github.com/oven-sh/bun/tree/main/packages/bun-plugin-tailwind)), styled with **Tailwind CSS v4**. No backend; `bun run build` emits static files to `dist/`.

## Toolchain

Use Bun, never Node/npm/pnpm/Vite. `bun add`/`bun add -d` for deps (don't edit `package.json` by hand), `bunx` instead of `npx`. `.env` is loaded automatically.

## Scripts

- `bun run dev` — dev server with HMR at http://localhost:3000
- `bun run build` — production bundle to `dist/`
- `bun run typecheck` — `svelte-check`
- `bun run lint` — ESLint + Prettier check
- `bun run format` — Prettier write

## Layout

- `index.html` — entry; loads `src/main.ts` and `src/app.css`.
- `src/main.ts` — mounts the app (`mount()`) and wires HMR.
- `src/app.css` — Tailwind entry (`@import "tailwindcss";`).
- `src/App.svelte` — root component; `src/lib/` — other components.
- `static/` — assets referenced from `index.html`.
- `build.ts` — production build; `bunfig.toml` — dev-server plugins.

## Conventions

- Use **runes** (`$state`, `$derived`, `$effect`, `$props`), not legacy `export let` / `$:`.
- Components are `.svelte` with `<script lang="ts">`. No Svelte preprocessors, and `<style>` only (no `<style lang>`, no `@apply`/`@tailwind` inside it).
- Style with Tailwind utility classes in markup; global CSS goes in `src/app.css`.
- Reference static assets by path/import — Bun hashes them and rewrites the reference.
- Icons: `@lucide/svelte` (UI) and `@icons-pack/svelte-simple-icons` (brand logos).
- Lazy-load heavy/route components with `await import("./X.svelte")`.
- Run `bun run lint` and `bun run typecheck` before committing.
