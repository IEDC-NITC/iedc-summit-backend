<script>
  import EventForm from "../../../components/EventForm.svelte";
  import { getAllEvents } from "$lib/firebase-setup";
  import { onMount } from "svelte";
  import EventCard from "../../../components/EventCard.svelte";

  let events = [];

  onMount(async () => {
    events = await getAllEvents();
  });
</script>

<div>
  <ul>
    {#each events as event}
      <li>
        <EventCard {...event}></EventCard>
      </li>
    {/each}
  </ul>
  <EventForm></EventForm>
</div>
