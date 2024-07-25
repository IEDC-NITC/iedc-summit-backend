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

<!--
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
</div>-->
<div class="rounded p-2 shadow">
  <div class="mt-6 border-t border-gray-100">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Event Name</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {eventName}
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">
          Link to Register
        </dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <a href={linkToReg}>{linkToReg}</a>
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">
          Link to Guidelines
        </dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <a href={linkToGuidelines}>{linkToGuidelines}</a>
        </dd>
      </div>
      
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">
          Venue
        </dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {venue}
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Price</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {price}
        </dd>
      </div>
      <div>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <button class="bg-red-500 text-white p-2 rounded" on:click={() => deleteEvent(docId)}>Delete</button>
        </dd>
      </div>
    </dl>
  </div>
</div>
