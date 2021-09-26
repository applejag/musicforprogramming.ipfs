<script lang="ts">
  import AudioPlayer from "../AudioPlayer.svelte";
  import type { EpisodeData } from "../libs/episodes-repo";
  import Section from "./Section.svelte";

  export let currentEpisode: EpisodeData;

  let notesLines = currentEpisode.notes.split("\n").map((o) => o.trim());
</script>

<Section>
  <h2 class="episode-name">{currentEpisode.name}</h2>
  <AudioPlayer
    src={currentEpisode.fileRelUrl}
    displaySrc={currentEpisode.fileName}
  />
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
</style>
