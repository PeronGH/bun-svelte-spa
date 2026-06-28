<script lang="ts">
  import { SiBun, SiSvelte, SiGithub } from "@icons-pack/svelte-simple-icons";
  import Counter from "./lib/Counter.svelte";
</script>

<main class="mx-auto mt-16 max-w-2xl px-4 text-center">
  <h1 class="text-4xl font-bold tracking-tight">Bun + Svelte 5</h1>
  <p class="mt-2 text-gray-600">
    A pure frontend SPA, bundled by Bun, styled with Tailwind.
  </p>
  <div class="mt-6">
    <Counter />
  </div>

  <footer class="mt-10 flex items-center justify-center gap-5 text-gray-400">
    <a
      href="https://bun.com"
      aria-label="Bun"
      class="transition-colors hover:text-black"
    >
      <SiBun size={22} />
    </a>
    <a
      href="https://svelte.dev"
      aria-label="Svelte"
      class="transition-colors hover:text-[#ff3e00]"
    >
      <SiSvelte size={22} />
    </a>
    <a
      href="https://github.com/PeronGH/bun-svelte-spa"
      aria-label="GitHub"
      class="transition-colors hover:text-black"
    >
      <SiGithub size={22} />
    </a>
  </footer>
</main>
