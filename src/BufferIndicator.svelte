<script lang="ts">
  import { onDestroy } from "svelte";

  export let interval = 100;

  const series = ["/", "-", "\\", "|"];
  let index = Math.floor(Math.random() * series.length);

  let timeout = setTimeout(nextIndex, interval);

  function nextIndex() {
    index = (index + 1) % series.length;
    setTimeout(nextIndex, interval);
  }

  onDestroy(() => clearTimeout(timeout));
</script>

{series[index]}
