# bun-svelte-spa

A pure-frontend [Svelte 5](https://svelte.dev) single-page app bundled by [Bun](https://bun.com) — no Vite, no server. Styled with [Tailwind CSS v4](https://tailwindcss.com) and type-checked with `svelte-check`. `bun run build` emits static files you can host anywhere.

Built on the official [`bun-plugin-svelte`](https://github.com/oven-sh/bun/tree/main/packages/bun-plugin-svelte) and [`bun-plugin-tailwind`](https://github.com/oven-sh/bun/tree/main/packages/bun-plugin-tailwind).

## Usage

```sh
bun install       # install dependencies
bun run dev       # dev server with HMR at http://localhost:3000
bun run build     # bundle to ./dist
bun run typecheck # svelte-check (.ts + .svelte)
bun run lint      # ESLint + Prettier check
bun run format    # Prettier write
```

## Layout

- `index.html` — entry; loads `src/main.ts` and `src/app.css`.
- `src/main.ts` — mounts the app and wires HMR.
- `src/app.css` — Tailwind entry.
- `src/App.svelte` — root component; `src/lib/` — components.
- `static/` — assets referenced from `index.html`.
- `build.ts` — production build; `bunfig.toml` — dev-server plugins.

Icons via [`@lucide/svelte`](https://lucide.dev) (UI) and [`@icons-pack/svelte-simple-icons`](https://simpleicons.org) (brand logos).
