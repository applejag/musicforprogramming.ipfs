<script lang="ts">
  import Section from "./base/Section.svelte";
  import { getAllEpisodeData, getRandomEpisode } from "../libs/episodes-repo";
  import Link from "../Link.svelte";
  import { navigate } from "../libs/util";

  export let currentEpisodeId: string = null;

  function onClickRandomEpisode() {
    const epi = getRandomEpisode();
    navigate(`?episode=${epi.number}`);
  }
</script>

<Section title="Episodes">
  <ol>
    {#each getAllEpisodeData() as epi (epi.id)}
      <li>
        {#if epi.id === currentEpisodeId}
          <span class="selected">{epi.name}</span>
        {:else}
          <Link href="?episode={epi.number}">{epi.name}</Link>
        {/if}
      </li>
    {/each}
    <li>
      <button class="link" on:click={onClickRandomEpisode}
        >??: Random episode</button
      >
    </li>
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
