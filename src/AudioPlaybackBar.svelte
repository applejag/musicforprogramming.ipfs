<script lang="ts">
  import type TimeRange from "./libs/time-range";

  export let buffered: TimeRange[] = [];
  export let width = 40;
  export let duration = 0;
  export let currentTime = 0;
  export let isPlaying = false;

  enum SectionState {
    Empty,
    Buffered,
  }

  $: sections = recreateSectionsArray(width, duration, buffered);
  $: currentIndex =
    duration == 0 ? 0 : Math.round((width * currentTime) / duration);

  function recreateSectionsArray(
    w: number,
    dur: number,
    timeRanges: TimeRange[]
  ): SectionState[] {
    const arr: SectionState[] = [];
    for (let i = 0; i < w; i++) {
      arr.push(SectionState.Empty);
    }
    if (dur <= 0) {
      return arr;
    }
    for (const range of timeRanges) {
      const startIndex = Math.round((width * range.start) / dur);
      const endIndex = Math.round((width * range.end) / dur);
      for (let i = startIndex; i < endIndex; i++) {
        arr[i] = SectionState.Buffered;
      }
    }
    return arr;
  }
</script>

<pre
  class="audio-playback">
[{#each sections as s, i}
  {#if i == currentIndex}<span class="current">{#if isPlaying}&gt;{:else}|{/if}</span
    >{:else if s == SectionState.Buffered}<span class="buffered">=</span
    >{:else}<span class="empty">-</span>{/if}{/each}]
</pre>

<style lang="scss">
  @import "./styles/variables.scss";

  .audio-playback {
    color: $palette_grey;
    margin: 0;

    .current {
      color: $palette_dirty_white;
    }
  }
</style>
