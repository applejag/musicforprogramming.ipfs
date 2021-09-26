<script lang="ts">
  import Section from "./sections/Section.svelte";
  import EpisodeListSection from "./sections/EpisodeListSection.svelte";
  import IntroSection from "./sections/IntroSection.svelte";
  import { getEpisodeById, getLatestEpisode } from "./libs/episodes-repo";
  import EpisodeSection from "./sections/EpisodeSection.svelte";

  const searchKeys = Array.from(
    new URLSearchParams(window.location.search).keys()
  );

  const episodeId = searchKeys.find(getEpisodeById);
  const currentEpisode = getEpisodeById(episodeId) ?? getLatestEpisode();
</script>

<IntroSection />

<EpisodeSection {currentEpisode} />

<EpisodeListSection currentEpisodeId={currentEpisode.id} />

<Section title="Meta">
  <div>[MFP_01-52.torrent]</div>
  <div>[About] [Credits] [folder.jpg] [RSS] [SublimeText.tmTheme]</div>
  <div>[iTunes] [Facebook] [Twitter]</div>
  <div>[Enterprise Mode] [Switch Theme]</div>
</Section>

<style type="scss" global>
  @import "./styles/_global.scss";
</style>
