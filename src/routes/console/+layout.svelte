<script>
  import { authUser } from "$lib/store";

  import { page } from "$app/stores";

  let menuOpen = false;
</script>

<!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-100">
  <body class="h-full">
  ```
-->
<div class="min-h-full transition-all">
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                href="/console/events"
                class={$page.url.pathname == "/console/events"
                  ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
                >Events</a
              >
              <a
                href="/console/lectures"
                class={$page.url.pathname == "/console/lectures"
                  ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
                >Lectures</a
              >
              <a
                href="/console/workshops"
                class={$page.url.pathname == "/console/workshops"
                  ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
                >Workshops</a
              >
              <a
                href="/console/speakers"
                class={$page.url.pathname == "/console/speakers"
                  ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
                >Speakers</a
              >
              <a
                href="/console/partners"
                class={$page.url.pathname == "/console/partners"
                  ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
                >Partners</a
              >
              <a
                href="/console/news"
                class={$page.url.pathname == "/console/news"
                  ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
                >News</a
              >
              <a
                href="/console/faqs"
                class={$page.url.pathname == "/console/faqs"
                  ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
                >FAQS</a
              >
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-controls="mobile-menu"
            aria-expanded="false"
            on:click={() => (menuOpen = !menuOpen)}
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class={menuOpen ? "md:hidden" : "hidden"} id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="/console/events"
          class={$page.url.pathname == "/console/events"
            ? "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
          >Events</a
        ><a
          href="/console/lectures"
          class={$page.url.pathname == "/console/lectures"
            ? "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
          >Lectures</a
        >
        <a
          href="/console/workshops"
          class={$page.url.pathname == "/console/workshops"
            ? "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
          >Workshops</a
        >
        <a
          href="/console/speakers"
          class={$page.url.pathname == "/console/speakers"
            ? "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
          >Speakers</a
        >
        <a
          href="/console/partners"
          class={$page.url.pathname == "/console/partners"
            ? "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
          >Partners</a
        >
        <a
          href="/console/news"
          class={$page.url.pathname == "/console/news"
            ? "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
          >News</a
        >
        <a
          href="/console/faqs"
          class={$page.url.pathname == "/console/faqs"
            ? "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
          >FAQS</a
        >
      </div>
    </div>
  </nav>

  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {#if $authUser != null}
        <slot />
      {:else}
        <span class="font-semibold m-2">You've been logged out</span>
        <a
          href="/login"
          class="text-white font-semibold bg-blue-500 p-2 rounded">Login Here</a
        >
      {/if}
    </div>
  </main>
</div>

<svelte:head>
  <title>IEDC Admin Console</title>
</svelte:head>
