<script lang="ts">
  import Section from "./sections/Section.svelte";
  import EpisodesSection from "./sections/EpisodesSection.svelte";
  import IntroSection from "./sections/IntroSection.svelte";
</script>

<IntroSection />

<Section>
  <p>07: Tahlhoff Garten + Untitled</p>
  <div>--:--:-- [PLAY] [STOP] [-30s] [+30s]</div>
</Section>

<EpisodesSection />

<Section title="Meta">
  <div>[MFP_01-52.torrent]</div>
  <div>[About] [Credits] [folder.jpg] [RSS] [SublimeText.tmTheme]</div>
  <div>[iTunes] [Facebook] [Twitter]</div>
  <div>[Enterprise Mode] [Switch Theme]</div>
</Section>

<style type="scss" global>
  @import "./styles/_global.scss";
</style>
