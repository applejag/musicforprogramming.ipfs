<script lang="ts">
  import EpisodeListSection from "./sections/EpisodeListSection.svelte";
  import IntroSection from "./sections/IntroSection.svelte";
  import { getEpisodeById, getEpisodeByNumber, getLatestEpisode } from "./libs/episodes-repo";
  import EpisodeSection from "./sections/EpisodeSection.svelte";
  import MetaSection from "./sections/MetaSection.svelte";
  import AboutSection from "./sections/AboutSection.svelte";
  import CreditsSection from "./sections/CreditsSection.svelte";
  import { addWindowEventListener } from "./libs/util";
  import queryString from "query-string";

  enum CurrentPage {
    About,
    Credits,
    Episode,
  }

  let searchParams = new URLSearchParams(window.location.search);
  $: searchKeys = Array.from(searchParams.keys());
  $: currentEpisode = getEpisodeFromSearchKeys(searchKeys);
  $: currentPage = getCurrentPageFromSearchParams(searchParams);

  function getCurrentPageFromSearchParams(
    params: URLSearchParams
  ): CurrentPage {
    if (params.has("about")) {
      return CurrentPage.About;
    } else if (params.has("credits")) {
      return CurrentPage.Credits;
    } else {
      return CurrentPage.Episode;
    }
  }

  function getEpisodeNumberFromQueryParams(): string {
    const episodeNumber = queryString.parse(location.search).episode;
    return Array.isArray(episodeNumber) ? episodeNumber[0] : episodeNumber;
  }

  function getEpisodeFromSearchKeys(keys: string[]) {
    const episodeId = keys.find(getEpisodeById);
    const episodeNumber = getEpisodeNumberFromQueryParams();
    return getEpisodeByNumber(episodeNumber) ??
          getEpisodeById(episodeId) ??
          getLatestEpisode();
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
  {#if currentPage === CurrentPage.About}
    <AboutSection />
  {:else if currentPage === CurrentPage.Credits}
    <CreditsSection />
  {:else}
    <EpisodeSection {currentEpisode} />
  {/if}
</div>

<div class="container f-left">
  <EpisodeListSection
    currentEpisodeId={currentPage === CurrentPage.Episode && currentEpisode.id}
  />
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
