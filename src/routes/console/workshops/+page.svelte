<script>
  import WorkshopForm from "../../../components/WorkshopForm.svelte";
  import { getAllData } from "$lib/firebase-setup";
  import { onMount } from "svelte";
  import LectureCard from "../../../components/LectureCard.svelte";
  import WorkshopCard from "../../../components/WorkshopCard.svelte";

  let events = [];

  onMount(async () => {
    events = await getAllData("workshops");
  });

  async function updateWorkshops() {
    events = await getAllData("workshops");
  }

  let formOpen = false;

  function closeForm() {
    formOpen = false;
    updateWorkshops();
  }
</script>

<div>
  <header class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Workshops</h1>
    </div>
  </header>
  <ul class="flex flex-col gap-2">
    {#each events as event}
      <li>
        <WorkshopCard {...event} onCall={updateWorkshops}></WorkshopCard>
      </li>
    {/each}
  </ul>
  {#if formOpen}
    <WorkshopForm {closeForm} />
  {:else}
    <button
      class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      on:click={() => (formOpen = true)}>New Workshop</button
    >
  {/if}
</div>
