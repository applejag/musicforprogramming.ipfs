<script lang="ts">
  import Section from "../Section.svelte";
</script>

<Section title="Introduction">
  <pre><code>
<span class="keyword">function</span> <span class="function">musicForProgramming</span>(<span class="param">task</span>)
&lbrace;
<span class="indent">	task <span class="operator">=</span> (task <span class="operator">===</span> <span class="constant">undefined</span>) ? <span class="string">'programming'</span> : task;</span>
<span class="indent">	<span class="operator">return</span> <span class="string">'A series of mixes intended for listening while '</span><span class="operator">+</span>task<span class="operator">+</span><span class="string">' to aid concentration and increase productivity (also compatible with other activities).'</span>;</span>
&rbrace;
    </code></pre>
</Section>

<style lang="scss">
  pre code {
    white-space: pre-wrap;
    tab-size: 2rem;
  }

  .indent {
    display: block;
    text-indent: -2rem;
    padding-left: 2rem;
    margin-left: 2rem;
  }

  .keyword {
    color: #66d9ef;
    font-style: italic;
  }

  .string {
    color: #efe158;
  }

  .function {
    color: #a6e22e;
  }

  .param {
    color: #fd971f;
    font-style: italic;
  }

  .constant {
    color: #ae81ff;
  }

  .operator {
    color: #ec007c;
  }
</style>
