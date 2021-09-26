<script lang="ts">
  export let href: string;
</script>

<a {href} target="about:blank"><slot>{href}</slot></a>
