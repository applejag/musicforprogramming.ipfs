<script lang="ts">
  import EpisodeListSection from "./sections/EpisodeListSection.svelte";
  import IntroSection from "./sections/IntroSection.svelte";
  import { getEpisodeById, getLatestEpisode } from "./libs/episodes-repo";
  import EpisodeSection from "./sections/EpisodeSection.svelte";
  import MetaSection from "./sections/MetaSection.svelte";
  import AboutSection from "./sections/AboutSection.svelte";
  import CreditsSection from "./sections/CreditsSection.svelte";
  import { addWindowEventListener } from "./libs/util";

  let searchParams = new URLSearchParams(window.location.search);
  $: searchKeys = Array.from(searchParams.keys());
  $: currentEpisode = getEpisodeFromSearchKeys(searchKeys);

  function getEpisodeFromSearchKeys(keys) {
    const episodeId = keys.find(getEpisodeById);
    return getEpisodeById(episodeId) ?? getLatestEpisode();
  }

  function onstatechanged() {
    console.log("state changed", window.location.search);
    searchParams = new URLSearchParams(window.location.search);
  }

  addWindowEventListener("onpushstate", onstatechanged);
</script>

<svelte:window on:popstate={onstatechanged} />

<div class="container f-left">
  <IntroSection />
</div>

<div class="container f-right">
  {#if searchParams.has("about")}
    <AboutSection />
  {:else if searchParams.has("credits")}
    <CreditsSection />
  {:else}
    <EpisodeSection {currentEpisode} />
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
