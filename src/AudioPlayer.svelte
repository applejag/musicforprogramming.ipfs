<script lang="ts">
  import Link from "./Link.svelte";
  import {
    fetchContentLengthBytes,
    newAudioContext,
    secondsToHHMMSS,
  } from "./libs/util";
  import AudioPlaybackBar from "./AudioPlaybackBar.svelte";
  import type TimeRange from "./libs/time-range";

  export let src: string;
  export let displaySrc: string = src;

  let audio: HTMLAudioElement;
  let timeString = "--:--:--";

  enum PlayState {
    Loading,
    Stopped,
    Playing,
    Paused,
  }
  let state = PlayState.Loading;
  let buffered: TimeRange[] = [];
  let currentTime = 0;
  let duration = 0;

  $: fileSizePromise = fetchFileSize(src);

  async function fetchFileSize(src: string): Promise<string | null> {
    state = PlayState.Loading;
    updateTimeString();
    const bytes = await fetchContentLengthBytes(src);
    if (!bytes) {
      return null;
    }
    return Math.floor(bytes / 1000 / 1000) + "mb";
  }

  function updateTimeString() {
    if (state === PlayState.Loading) {
      timeString = "--:--:--";
    } else if (state === PlayState.Stopped) {
      timeString = secondsToHHMMSS(duration);
    } else {
      timeString = secondsToHHMMSS(currentTime);
    }
  }

  function onloadedmetadata() {
    state = PlayState.Stopped;
    duration = audio.duration;
    updateTimeString();
  }

  const audioContext = newAudioContext();
  function beep() {
    if (!audioContext) {
      return;
    }
    const oscillator = audioContext.createOscillator();
    oscillator.type = "square";
    oscillator.frequency.value = 5555;
    const gain = audioContext.createGain();
    gain.gain.value = 0.125;
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.025);
  }

  function play() {
    audio.play();
  }

  function pause() {
    audio.pause();
  }

  function stop() {
    beep();
    state = PlayState.Stopped;
    audio.pause();
    audio.currentTime = 0;
  }

  function seek(deltaSeconds: number) {
    if (state !== PlayState.Playing && state !== PlayState.Paused) {
      return;
    }
    beep();
    const newTime = audio.currentTime + deltaSeconds;
    audio.currentTime = Math.min(Math.max(newTime, 0), audio.duration - 1);
  }

  function seekForward() {
    seek(30);
  }

  function seekBackward() {
    seek(-30);
  }

  function onkeydown(e: KeyboardEvent) {
    if (state === PlayState.Loading) {
      return;
    }
    switch (e.code) {
      case "Space":
        if (state === PlayState.Playing) {
          pause();
        } else if (state === PlayState.Paused || state === PlayState.Stopped) {
          play();
        }
        break;
      case "ArrowLeft":
        seekBackward();
        break;
      case "ArrowRight":
        seekForward();
        break;
    }
  }

  function onplay() {
    beep();
    state = PlayState.Playing;
    updateTimeString();
  }

  function onpause() {
    beep();
    state = PlayState.Paused;
  }

  function onended() {
    stop();
  }

  function ontimeupdate() {
    currentTime = audio.currentTime;
    updateTimeString();
  }

  function onprogress() {
    let arr: TimeRange[] = [];
    let timeRanges = audio.buffered;
    for (let i = 0; i < timeRanges.length; i++) {
      arr.push({ start: timeRanges.start(i), end: timeRanges.end(i) });
    }
    buffered = arr;
  }
</script>

<svelte:window on:keydown={onkeydown} />

<div class="controls">
  <pre>{timeString}</pre>
  {#if state === PlayState.Stopped}
    <button on:click={play}><pre>[PLAY]</pre></button>
  {:else if state === PlayState.Playing}
    <button on:click={pause}><pre>[PAUSE]</pre></button>
  {:else if state === PlayState.Paused}
    <button on:click={play}><pre>[RESUME]</pre></button>
  {:else}
    <pre>[PLAY]</pre>
  {/if}
  {#if state === PlayState.Playing || state === PlayState.Paused}
    <button on:click={stop}><pre>[STOP]</pre></button>
    <button on:click={seekBackward}><pre>[-30s]</pre></button>
    <button on:click={seekForward}><pre>[+30s]</pre></button>
  {:else}
    <pre>[STOP]</pre>
    <pre>[-30s]</pre>
    <pre>[+30s]</pre>
  {/if}
</div>

<div class="playback">
  <AudioPlaybackBar
    {buffered}
    {duration}
    {currentTime}
    isPlaying={state == PlayState.Playing}
  />
</div>

<div class="file">
  <Link href={src}>{displaySrc}</Link>
  {#await fileSizePromise}
    <span>(...mb)</span>
  {:then fileSize}
    <span>({fileSize ?? "...mb"})</span>
    <audio
      {src}
      bind:this={audio}
      on:timeupdate={ontimeupdate}
      on:loadedmetadata={onloadedmetadata}
      on:ended={onended}
      on:play={onplay}
      on:pause={onpause}
      on:progress={onprogress}
    />
  {/await}
</div>

<style lang="scss">
  @import "./styles/variables.scss";

  audio {
    display: none;
  }

  pre {
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  .controls {
    margin-top: 1rem;
    color: $palette_grey;
  }

  .playback {
    margin-bottom: 1rem;
  }
</style>
