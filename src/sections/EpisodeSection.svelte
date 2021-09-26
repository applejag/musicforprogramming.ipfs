<svelte:options immutable />

<script lang="ts">
  import AudioPlayer from "../AudioPlayer.svelte";
  import Link from "../Link.svelte";
  import type { EpisodeData } from "../libs/episodes-repo";
  import MainSection from "./base/MainSection.svelte";

  export let currentEpisode: EpisodeData;

  $: notesLines = currentEpisode.notes
    .trim()
    .split("\n")
    .map((o) => o.trim());
</script>

<MainSection title={currentEpisode.name}>
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
</MainSection>

<style lang="scss">
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
