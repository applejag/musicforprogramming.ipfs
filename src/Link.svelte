<script lang="ts">
  import { linkHref, linkLabel, LinkOrHref } from "./libs/link";

  import { addWindowEventListener } from "./libs/util";

  export let href: LinkOrHref = null;
  export let target: string = null;
  export let download: boolean | undefined = undefined;

  $: actualHref = linkHref(href);
  $: actualLabel = linkLabel(href) ?? actualHref;
  $: actualTarget =
    target ??
    (!actualHref || actualHref.startsWith("?") ? undefined : "_blank");

  let search = window.location.search;
  $: isCurrent =
    actualHref && actualHref.startsWith("?") && search === actualHref;

  function onclick(e: MouseEvent) {
    if (actualHref.startsWith("?") && window.history?.pushState) {
      e.preventDefault();
      window.history.pushState(null, actualHref, actualHref);
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
  <span class="selected"><slot>{actualLabel}</slot></span>
{:else}
  <a
    href={actualHref}
    target={actualTarget}
    {download}
    referrerpolicy="no-referrer"
    on:click={onclick}><slot>{actualLabel}</slot></a
  >
{/if}
