<script lang="ts">
  import Section from "./Section.svelte";
</script>

<Section title="Introduction">
  <pre><code>
<span class="keyword">function</span> <span class="function">musicForProgramming</span>(<span class="param">task</span>) <span class="folded">&lbrace;<span class="folded-dots">...</span>&rbrace;</span>
<div class="unfolded">
&lbrace;
<span class="indent">	task <span class="operator">=</span> (task <span class="operator">===</span> <span class="constant">undefined</span>) ? <span class="string">'programming'</span> : task;</span>
<span class="indent">	<span class="operator">return</span> <span class="string">'A series of mixes intended for listening while '</span><span class="operator">+</span>task<span class="operator">+</span><span class="string">' to aid concentration and increase productivity (also compatible with other activities).'</span>;</span>
&rbrace;
</div>
    </code></pre>
</Section>

<style lang="scss">
  @import "../styles/variables.scss";

  .folded {
    display: none;

    .folded-dots {
      color: $palette_black;
      background-color: $palette_purple;
    }
  }

  @media (max-width: $size_medium) {
    .unfolded {
      display: none;
    }
    .folded {
      display: unset;
    }
  }

  $tabSize: 1.5rem;

  pre code {
    white-space: pre-wrap;
    tab-size: $tabSize;
  }

  .indent {
    display: inline-block;
    text-indent: -$tabSize;
    padding-left: $tabSize;
    margin-left: $tabSize;
  }

  .keyword {
    color: $palette_blue;
    font-style: italic;
  }

  .string {
    color: $palette_yellow;
  }

  .function {
    color: $palette_green;
  }

  .param {
    color: $palette_orange;
    font-style: italic;
  }

  .constant {
    color: $palette_purple;
  }

  .operator {
    color: $palette_red;
  }
</style>
