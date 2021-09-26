<script lang="ts">
  import { addWindowEventListener } from "./libs/util";

  export let href: string;
  export let target: string = href.startsWith("?") ? undefined : "about:blank";
  export let download: boolean | undefined = undefined;

  let search = window.location.search;
  $: isCurrent = href.startsWith("?") && search === href;

  function onclick(e: MouseEvent) {
    if (href.startsWith("?") && window.history?.pushState) {
      e.preventDefault();
      window.history.pushState(null, href, href);
      window.dispatchEvent(new PopStateEvent("onpushstate", { state: null }));
    }
  }

  function onstatechanged() {
    search = window.location.search;
  }

  addWindowEventListener("onpushstate", onstatechanged);
</script>

<svelte:window on:popstate={onstatechanged} />

{#if isCurrent}
  <span class="selected"><slot>{href}</slot></span>
{:else}
  <a {href} {target} {download} on:click={onclick}><slot>{href}</slot></a>
{/if}
