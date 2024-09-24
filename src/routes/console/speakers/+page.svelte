<script>
  import SpeakerForm from "../../../components/SpeakerForm.svelte";
  import { getAllData } from "$lib/firebase-setup";
  import { onMount } from "svelte";
  import { LoaderIcon } from "svelte-feather-icons";
  import SpeakersCard from "../../../components/SpeakersCard.svelte";

  let collection = "speakers";
  let data = [];
  let loading = true;

  onMount(async () => {
    data = await getAllData(collection);
    loading = false;
  });

  async function updateSpeakers() {
    data = await getAllData(collection);
  }

  let formOpen = false;

  function closeForm() {
    formOpen = false;
    updateSpeakers();
  }
</script>

<div>
  <header class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Speakers</h1>
    </div>
  </header>
  <ul class="flex flex-col gap-2">
    {#if loading}
      <div class="p-2 flex items-center justify-center">
        <LoaderIcon size="1.2x" class="animate-spin"></LoaderIcon>
      </div>
    {:else}
      {#each data as each}
        <li>
          <SpeakersCard {...each} onCall={updateSpeakers}></SpeakersCard>
        </li>
      {/each}{/if}
  </ul>
  {#if formOpen}
    <SpeakerForm {closeForm}></SpeakerForm>
  {:else}
    <button
      class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      on:click={() => (formOpen = true)}>New Speaker</button
    >
  {/if}
</div>
