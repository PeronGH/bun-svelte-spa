---
description: Svelte 5 pure-frontend SPA bundled by Bun. No Vite, no server.
globs: "*.ts, *.svelte, *.html, *.css, *.js, package.json"
alwaysApply: false
---

This is a **pure-frontend Svelte 5 single-page app** bundled by Bun via the official
[`bun-plugin-svelte`](https://github.com/oven-sh/bun/tree/main/packages/bun-plugin-svelte).
There is no backend — `bun run build` emits static files to `dist/` that any static host can serve.

## Toolchain

Default to Bun, never Node/npm/pnpm/Vite:

- `bun install` to install, `bun add` / `bun add -d` to change deps (never hand-edit `package.json` versions).
- `bun run <script>` for scripts, `bunx <pkg>` instead of `npx`.
- Bun loads `.env` automatically — don't add `dotenv`.

## Scripts

- `bun run dev` — fullstack dev server with HMR at http://localhost:3000 (runs `bun index.html`).
- `bun run build` — production bundle to `dist/` via `build.ts` (`Bun.build` + `SveltePlugin`).
- `bun run lint` — `eslint . && prettier --check .`
- `bun run format` — `prettier --write .`

## Layout

- `index.html` — entry; loads `src/main.ts` as a module.
- `src/main.ts` — mounts the app with Svelte's `mount()` and wires `import.meta.hot` for HMR.
- `src/App.svelte` — root component. `src/lib/` — other components.
- `bunfig.toml` — registers `bun-plugin-svelte` under `[serve.static]` for the dev server.
- `build.ts` — production build (HTML entrypoint → `dist/`).

## Conventions

- **Svelte 5 runes**: use `$state`, `$derived`, `$effect`, `$props`. Not the legacy `export let` / `$:` syntax.
- Components are `.svelte` with `<script lang="ts">`. TS in `<script>` works; the plugin is still
  pre-1.0, so **no Svelte preprocessors and no `<style lang="...">`** — plain `<style>` only.
- Browser-only code: tsconfig ships DOM libs. `@types/bun` covers `build.ts` and `import.meta.hot`.
- Run `bun run lint` before committing; both ESLint and Prettier must pass.
