<script lang="ts">
  export let href: string;
  export let target: string = "about:blank";
  export let download: boolean | undefined = undefined;
</script>

<a {href} {target} {download}><slot>{href}</slot></a>
