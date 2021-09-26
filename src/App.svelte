<script lang="ts">
  import EpisodeListSection from "./sections/EpisodeListSection.svelte";
  import IntroSection from "./sections/IntroSection.svelte";
  import { getEpisodeById, getLatestEpisode } from "./libs/episodes-repo";
  import EpisodeSection from "./sections/EpisodeSection.svelte";
  import MetaSection from "./sections/MetaSection.svelte";

  const searchKeys = Array.from(
    new URLSearchParams(window.location.search).keys()
  );

  const episodeId = searchKeys.find(getEpisodeById);
  const currentEpisode = getEpisodeById(episodeId) ?? getLatestEpisode();
</script>

<div class="container f-left">
  <IntroSection />
</div>

<div class="container f-right">
  <EpisodeSection {currentEpisode} />
</div>

<div class="container f-left">
  <EpisodeListSection currentEpisodeId={currentEpisode.id} />
  <MetaSection />
</div>

<style type="scss">
  :global {
    @import "./styles/_global.scss";
  }

  @import "./styles/variables.scss";

  @media (min-width: $size_medium) {
    .f-left {
      float: left;
    }

    .f-right {
      float: right;
    }

    .container {
      width: 50%;
    }
  }
</style>
