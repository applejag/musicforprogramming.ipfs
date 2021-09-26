<script lang="ts">
  import Section from "./Section.svelte";
  import { getAllEpisodeData } from "../libs/episodes-repo";

  export let currentEpisodeId: string = null;
</script>

<Section title="Episodes">
  <ol>
    {#each getAllEpisodeData() as epi (epi.id)}
      <li>
        {#if epi.id === currentEpisodeId}
          <span class="selected">{epi.name}</span>
        {:else}
          <a href="?{epi.id}">{epi.name}</a>
        {/if}
      </li>
    {/each}
  </ol>
</Section>

<style lang="scss">
  @import "../styles/variables.scss";

  ol {
    list-style: none;
    padding: 0;
    column-count: 1;

    @media (min-width: $size_medium) {
      column-count: 2;
    }
    @media (min-width: $size_large) {
      column-count: 3;
    }
  }
</style>
