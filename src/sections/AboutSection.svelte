<script lang="ts">
  import MainSection from "./base/MainSection.svelte";
</script>

<MainSection title="About">
  <p>
    Through years of trial and error - skipping around internet radio stations,
    playing our entire music collections on shuffle, or just hammering single
    albums on repeat, we have found that the most effective music to aid
    prolonged periods of intense concentration tends to have a mixture of the
    following qualities:
  </p>

  <ul>
    <li>Drones</li>
    <li>Noise</li>
    <li>Fuzz</li>
    <li>Field recordings</li>
    <li>Vagueness (Hypnagogia)</li>
    <li>Textures without rhythm</li>
    <li>Minor complex chords</li>
    <li>Early music (Baroque, lute, harpsichord)</li>
    <li>Very few drums or vocals</li>
    <li>Synth arpeggios</li>
    <li>Awesome / daunting / foreboding</li>
    <li>Walls of reverb</li>
  </ul>

  <p>
    Music possessing these qualities can often provide just the right amount of
    interest to occupy the parts of your brain that would otherwise be left free
    to wander and lead to distraction during your work.
  </p>

  <p>Keyboard controls:</p>
  <ul>
    <li><kbd>[SPACE]</kbd> play / pause</li>

    <li><kbd>[LEFT]</kbd> previous episode</li>

    <li><kbd>[RIGHT]</kbd> next episode</li>
  </ul>

  <p>Progress indicator:</p>
  <ul>
    <li><code>[&gt;]</code> current time, playing</li>
    <li><code>[|]</code> current time, paused</li>
    <li><code>[-----]</code> unbuffered audio</li>
    <li><code>[=====]</code> buffered audio</li>
  </ul>
</MainSection>

<style lang="scss">
  @import "../styles/variables.scss";

  ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
  }

  kbd {
    font: inherit;
    color: $palette_purple;
  }

  code {
    color: $palette_grey;
  }
</style>
