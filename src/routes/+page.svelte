<script>
  import { authUser } from "$lib/store";
</script>

<div class="p-2">
  <div class="p-2 flex">
    {#if $authUser != null}
    <div>
      <a href="/console" class="p-2 rounded bg-slate-200">Go to Console</a>
    </div>
    {:else}
    <a href="/login"> <div class="p-2 rounded bg-blue-500 text-white font-semibold">
      Login
    </div></a>
    {/if}
  </div>
</div>
<svelte:head>
  <title>
    IEDC Admin
  </title>
</svelte:head>