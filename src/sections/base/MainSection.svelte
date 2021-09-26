<script lang="ts">
  import Section from "./Section.svelte";
  export let title: string;

  $: {
    document.title = `musicForProgramming("${title}")`;
  }
</script>

<Section>
  <h2>{title}</h2>
  <slot />
</Section>

<style lang="scss">
  @import "../../styles/variables.scss";

  h2 {
    display: block;
    font-size: inherit;
    font-weight: inherit;

    color: $palette_green;
  }
</style>
