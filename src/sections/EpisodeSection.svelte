<script lang="ts">
  import AudioPlayer from "../AudioPlayer.svelte";
  import Link from "../Link.svelte";
  import type { EpisodeData } from "../libs/episodes-repo";
  import Section from "./Section.svelte";

  export let currentEpisode: EpisodeData;

  let notesLines = currentEpisode.notes
    .trim()
    .split("\n")
    .map((o) => o.trim());
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
  <p>
    {#if currentEpisode.compilerLinks.length === 1}
      Compiler link: <Link href={currentEpisode.compilerLinks[0]} />
    {:else}
      Compiler links:
      <ul>
        {#each currentEpisode.compilerLinks as link}
          <li><Link href={link} /></li>
        {/each}
      </ul>
    {/if}
  </p>
</Section>

<style lang="scss">
  @import "../styles/variables.scss";

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h2 {
    display: inline;
    font-size: inherit;
    font-weight: inherit;
  }

  .episode-name {
    color: $palette_green;
  }
</style>
