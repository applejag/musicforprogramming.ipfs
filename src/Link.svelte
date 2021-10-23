<script lang="ts">
  import { linkHref, linkLabel, LinkOrHref } from "./libs/link";

  import { addWindowEventListener } from "./libs/util";

  export let link: LinkOrHref = null;
  export let href: string = linkHref(link);
  export let target: string = href.startsWith("?") ? undefined : "about:blank";
  export let download: boolean | undefined = undefined;

  $: label = linkLabel(link) ?? href;

  let search = window.location.search;
  $: isCurrent = href.startsWith("?") && search === href;

  function onclick(e: MouseEvent) {
    if (!e.ctrlKey && href.startsWith("?") && window.history?.pushState) {
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
  <span class="selected"><slot>{label}</slot></span>
{:else}
  <a {href} {target} {download} on:click={onclick}><slot>{label}</slot></a>
{/if}
