<script>
  import { addEvent } from "$lib/firebase-setup";

  let eventName = "";
  let linkToGuidelines = "";
  let linkToReg = "";
  let posterImage = "";
  let price = 200;
  let venue = "";

  async function submitForm() {
    if (eventName != "" && linkToReg != "") {
      await addEvent({
        eventName,
        linkToGuidelines,
        linkToReg,
        posterImage,
        price,
        venue,
      });
    }
  }
</script>

<form class="grid grid-rows-6 gap-4">
  <span>
    Event Name: <input
      type="text"
      name="event-name"
      id=""
      bind:value={eventName}
    />
  </span>
  <span>
    Link To Guidelines: <input
      type="text"
      name="link-to-guidelines"
      bind:value={linkToGuidelines}
    />
  </span>
  <span>
    Link to Registration: <input
      type="text"
      name="link-to-guidelines"
      bind:value={linkToReg}
    />
  </span>
  <span>
    Poster Image: <input
      type="text"
      name="link-to-guidelines"
      bind:value={posterImage}
    />
  </span>
  <span>
    Price: <input type="number" name="link-to-guidelines" bind:value={price} />
  </span>
  <span>
    Venue: <input type="text" name="" id="" bind:value={venue} />
  </span>
  <span class="submit" on:click={submitForm}>
    <button class="p-2 rounded bg-blue-500 text-slate-50">Submit Event</button>
  </span>
</form>

<style>
  input {
    @apply p-2 rounded bg-slate-100 focus:ring-2 ring-blue-500;
  }
  span {
    @apply grid grid-cols-2;
  }
  .submit {
    @apply flex;
  }
</style>
