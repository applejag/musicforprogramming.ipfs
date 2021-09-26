<script lang="ts">
  export let href: string;
  export let target: string = href.startsWith("?") ? undefined : "about:blank";
  export let download: boolean | undefined = undefined;

  $: isCurrent = href.startsWith("?") && window.location.search === href;
</script>

<a {href} {target} {download} class:selected={isCurrent}><slot>{href}</slot></a>
