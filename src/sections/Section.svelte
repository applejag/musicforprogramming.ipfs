<script lang="ts">
  export let title: string = "";
</script>

<section>
  <div class="header">
    //
    {#if title}
      <h2>{title}</h2>
    {/if}
    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  </div>
  <div class="content">
    <slot />
  </div>
</section>

<style lang="scss">
  section {
    margin: 1rem;
  }

  h2 {
    display: inline;
    font-size: inherit;
    font-weight: inherit;
  }

  .header {
    overflow: hidden;
    white-space: nowrap;
    color: #999;
  }

  .content {
    margin: 1rem 0;
  }
</style>
