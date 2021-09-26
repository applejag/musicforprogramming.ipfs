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

<IntroSection />

<EpisodeSection {currentEpisode} />

<EpisodeListSection currentEpisodeId={currentEpisode.id} />

<MetaSection />

<style type="scss" global>
  @import "./styles/_global.scss";
</style>
