<script>
  import { deleteEvent, deleteLecture } from "$lib/firebase-setup";
  import { getDownloadURL, getStorage, ref } from "firebase/storage";
  import { onMount } from "svelte";

  export let eventName;
  export let linkToReg;
  export let speakerName;
  export let price;
  export let venue;
  export let posterImage;
  export let docId;

  let posterUrl = "";

  onMount(async () => {
    // get poster url

    const storage = getStorage();
    getDownloadURL(ref(storage, posterImage)).then((url) => {
      posterUrl = url;
    });
  });
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
          Poster Image
        </dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <a href={linkToReg} class="w-36"
            ><span
              class="w-36 text-ellipsis whitespace-nowrap overflow-hidden"
              title={linkToReg}
            >
              <img src={posterUrl} alt="" width="400px" loading="lazy"/>
            </span></a
          >
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">
          Speaker Name
        </dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {speakerName}
        </dd>
      </div>

      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Venue</dt>
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
          <button
            class="bg-red-500 text-white p-2 rounded"
            on:click={() => deleteLecture(docId)}>Delete</button
          >
        </dd>
      </div>
    </dl>
  </div>
</div>
