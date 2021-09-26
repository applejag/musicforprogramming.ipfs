<script lang="ts">
  import Link from "../Link.svelte";
  import Section from "./base/Section.svelte";
</script>

<Section title="Meta">
  <div>
    <Link href="/MFP_01-52.torrent" download>[MFP_01-52.torrent]</Link>
  </div>
  <div class="links-purple">
    <a href="?about">[About]</a>
    <a href="?credits">[Credits]</a>
    <Link href="/img/folder.jpg">[folder.jpg]</Link>
    <Link href="https://musicforprogramming.net/rss.php">[RSS]</Link>
    <Link href="/files/monokai_datashat_edit.tmTheme.xml" download
      >[SublimeText.tmTheme]</Link
    >
  </div>
  <div class="links-blue">
    <Link
      href="https://itunes.apple.com/us/podcast/music-for-programming/id500565620"
      >[iTunes]</Link
    >
    <Link href="https://www.facebook.com/musicforprogramming">[Facebook]</Link>
    <Link href="https://twitter.com/datassette">[Twitter]</Link>
  </div>
  <div class="links-orange">
    <Link href="">[Enterprise Mode]</Link>
    <button class="link">[Switch Theme]</button>
  </div>
</Section>
<Section title="Shameless plug">
  <div class="links-blue">
    <Link href="https://github.com/jilleJr/musicforprogramming.ipfs"
      >[GitHub]</Link
    >
    <Link href="https://javisst.space/@kalle">[Mastodon]</Link>
    <Link href="https://blog.jillejr.tech/">[WriteFreely blog]</Link>
  </div>
</Section>

<style lang="scss">
  @import "../styles/variables.scss";

  .links-purple :global(a) {
    color: $palette_purple;
  }
  .links-blue :global(a) {
    color: $palette_blue;
  }
  .links-orange :global(a),
  .links-orange button {
    color: $palette_orange;
  }
</style>
