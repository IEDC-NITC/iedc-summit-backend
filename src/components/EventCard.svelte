<script>
  import { deleteEvent } from "$lib/firebase-setup";

    export let eventName;
    export let linkToReg;
    export let linkToGuidelines;
    export let price;
    export let venue;
    export let posterImage;
    export let docId;
</script>

<div class="p-2 rounded shadow">
    <figure>
        <img src={posterImage} alt="" />
    </figure>

    <h2 class="p-2 font-semibold text-2xl">
        {eventName}
    </h2>
    <h4>Held at: {venue}</h4>
    <p>Rs. {price}</p>
    <a href={linkToReg}>Register Here</a>
    <a href={linkToGuidelines}>View Guidelines</a>


    <button on:click={() => deleteEvent(docId)}>
        Delete
    </button>
</div>