<script lang="ts">
  let count = $state(0);
</script>

<button onclick={() => count++}>
  count is {count}
</button>

<style>
  button {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    border: 1px solid #ff3e00;
    border-radius: 0.5rem;
    background: #ff3e00;
    color: white;
    cursor: pointer;
  }
</style>
