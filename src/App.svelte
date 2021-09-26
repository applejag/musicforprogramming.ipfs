<script lang="ts">
  import EpisodeListSection from "./sections/EpisodeListSection.svelte";
  import IntroSection from "./sections/IntroSection.svelte";
  import { getEpisodeById, getLatestEpisode } from "./libs/episodes-repo";
  import EpisodeSection from "./sections/EpisodeSection.svelte";
  import MetaSection from "./sections/MetaSection.svelte";
  import AboutSection from "./sections/AboutSection.svelte";
  import type { SvelteComponent } from "svelte";
  import CreditsSection from "./sections/CreditsSection.svelte";

  const searchParams = new URLSearchParams(window.location.search);
  const searchKeys = Array.from(searchParams.keys());

  function getEpisodeFromURL() {
    const episodeId = searchKeys.find(getEpisodeById);
    return getEpisodeById(episodeId) ?? getLatestEpisode();
  }
</script>

<div class="container f-left">
  <IntroSection />
</div>

<div class="container f-right">
  {#if searchParams.has("about")}
    <AboutSection />
  {:else if searchParams.has("credits")}
    <CreditsSection />
  {:else}
    <EpisodeSection currentEpisode={getEpisodeFromURL()} />
  {/if}
</div>

<div class="container f-left">
  <EpisodeListSection />
  <MetaSection />
</div>

<style type="scss" global>
  @import "./styles/_global.scss";
  @import "./styles/variables.scss";

  @media (min-width: $size_medium) {
    .container {
      width: 50%;
      &.f-left {
        float: left;
      }

      &.f-right {
        float: right;
      }
    }
  }
</style>
