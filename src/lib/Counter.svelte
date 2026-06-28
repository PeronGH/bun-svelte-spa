<script lang="ts">
  import { Plus } from "@lucide/svelte";

  let count = $state(0);
</script>

<button
  onclick={() => count++}
  class="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-orange-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-orange-700"
>
  <Plus class="size-4" />
  count is {count}
</button>
