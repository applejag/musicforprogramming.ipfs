<script>
  import GlitchText from "../GlitchText.svelte";
  import Link from "../Link.svelte";

  import MainSection from "./base/MainSection.svelte";
</script>

<MainSection title="Credits">
  <div>
    <p>
      This web page was stumbled together by <Link
        href="https://github.com/jilleJr">jilleJr</Link
      > in Visual Studio Code. It is a dApp port of the wonderful <Link
        href="https://musicforprogramming.net">musicforprogramming.net</Link
      >, rewritten in Svelte in the plan of hosting it <Link
        href="https://ipfs.io">IPFS</Link
      >.
    </p>

    <p>
      This site was <em>originally</em> knocked together by <Link
        href="http://datassette.net">Datassette</Link
      > in SublimeText (for which a <Link
        href="/files/monokai_datashat_edit.tmTheme.xml"
        download>theme file</Link
      > is available). Episodes are faffed with using iZotope Ozone and Adobe Audition
      to maintain comparable loudness and frequency presence between episodes.
    </p>

    <p>
      Music For Programming does not make any profit, nor do any of the episode
      contributors. We do not carry any advertising and never will. The episodes
      should be considered promotional samples for the artists' work contained
      within them. If you are one of those artists and are not happy about this
      situation, please contact us.
    </p>
  </div>

  <div class="submissions">
    <p>Submissions are currently closed.</p>

    <p>
      <del>
        If these mixes sound similar to your own concentration playlists, and
        you have decent audio production chops then please get in touch to
        contribute an episode.
      </del>
    </p>
  </div>

  <p>Huge glistening wads of thanks to all contributors so far &lt;3</p>

  <p>Happy <GlitchText /></p>

  <pre><code>
//  __/\\\\____________/\\\\__/\\\\\\\\\\\\\\\__/\\\\\\\\\\\\\___
//   _\/\\\\\\________/\\\\\\_\/\\\///////////__\/\\\/////////\\\_
//    _\/\\\//\\\____/\\\//\\\_\/\\\_____________\/\\\_______\/\\\_
//     _\/\\\\///\\\/\\\/_\/\\\_\/\\\\\\\\\\\_____\/\\\\\\\\\\\\\/__
//      _\/\\\__\///\\\/___\/\\\_\/\\\///////______\/\\\/////////____
//       _\/\\\____\///_____\/\\\_\/\\\_____________\/\\\_____________
//        _\/\\\_____________\/\\\_\/\\\_____________\/\\\_____________
//         _\/\\\_____________\/\\\_\/\\\_____________\/\\\_____________
//          _\///______________\///__\///______________\///______________
  </code></pre>
</MainSection>

<style lang="scss">
  @import "../styles/variables.scss";

  .submissions {
    color: $palette_purple;
  }

  pre code {
    color: $palette_grey;
  }
</style>
