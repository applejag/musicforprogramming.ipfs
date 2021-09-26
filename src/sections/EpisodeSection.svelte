<script lang="ts">
  import type { EpisodeData } from "../episodes/EpisodeRepository";
  import Section from "./Section.svelte";

  export let currentEpisode: EpisodeData;

  let notesLines = currentEpisode.notes.split("\n").map((o) => o.trim());
</script>

<Section>
  <h2 class="episode-name">{currentEpisode.name}</h2>
  <div class="audio-controls">--:--:-- [PLAY] [STOP] [-30s] [+30s]</div>
  <p>
    {#each notesLines as note}
      {note}<br />
    {/each}
  </p>
</Section>

<style lang="scss">
  @import "../styles/variables.scss";

  h2 {
    display: inline;
    font-size: inherit;
    font-weight: inherit;
  }

  .episode-name {
    color: $palette_green;
  }

  .audio-controls {
    margin: 1rem 0;
    color: $palette_grey;
  }
</style>
