<script lang="ts">
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <h1>Bun + Svelte 5</h1>
  <p>A pure frontend SPA, bundled by Bun.</p>
  <Counter />
</main>

<style>
  main {
    max-width: 40rem;
    margin: 4rem auto;
    padding: 0 1rem;
    font-family: system-ui, sans-serif;
    text-align: center;
  }
</style>
