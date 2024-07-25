<script>
  import LectureForm from "../../../components/LectureForm.svelte";
  import { getAllLectures } from "$lib/firebase-setup";
  import { onMount } from "svelte";
  import LectureCard from "../../../components/LectureCard.svelte";
  import { LoaderIcon } from "svelte-feather-icons";

  let events = [];
  let loading = true;

  onMount(async () => {
    events = await getAllLectures();
    loading = false;
  });

  let formOpen = false;
</script>

<div>
  <header class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Lectures</h1>
    </div>
  </header>
  <ul class="flex flex-col gap-2">
    {#if loading}
    <div class="p-2 flex items-center justify-center">
      <LoaderIcon size="1.2x" class="animate-spin"></LoaderIcon>
    </div>
    {:else}
    {#each events as event}
      <li>
        <LectureCard {...event}></LectureCard>
      </li>
    {/each}
    {/if}
  </ul>
  {#if formOpen}
    <LectureForm />
  {:else}
    <button
      class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      on:click={() => formOpen = true}>New Lecture</button
    >
  {/if}
</div>
