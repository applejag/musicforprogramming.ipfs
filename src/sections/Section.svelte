<script lang="ts">
  export let title: string = "";
</script>

<section>
  <div class="header">
    // {title} --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  </div>
  <div class="content">
    <slot />
  </div>
</section>

<style lang="scss">
  section {
    margin: 1rem;
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
