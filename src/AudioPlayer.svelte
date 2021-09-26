<script lang="ts">
  export let src: string;
</script>

<div class="controls">--:--:-- [PLAY] [STOP] [-30s] [+30s]</div>
{src}

<style lang="scss">
  @import "./styles/variables.scss";

  .controls {
    margin: 1rem 0;
    color: $palette_grey;
  }
</style>
