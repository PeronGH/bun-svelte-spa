# bun-svelte-spa

A pure-frontend [Svelte 5](https://svelte.dev) single-page app bundled by [Bun](https://bun.com) via the official [`bun-plugin-svelte`](https://github.com/oven-sh/bun/tree/main/packages/bun-plugin-svelte). No Vite.

## Usage

```sh
bun install      # install dependencies
bun run dev      # start the dev server with HMR (http://localhost:3000)
bun run build    # bundle to ./dist (static files for any host)
bun run lint     # eslint + prettier --check
bun run format   # prettier --write
```

## Layout

- `index.html` — entry point; loads `src/main.ts` as a module.
- `src/main.ts` — mounts the Svelte app and wires up HMR.
- `src/App.svelte` — root component.
- `src/lib/` — components.
- `bunfig.toml` — registers the Svelte plugin for the dev server.
- `build.ts` — production build via `Bun.build` with the Svelte plugin.
