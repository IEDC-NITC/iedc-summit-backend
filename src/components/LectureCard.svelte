<script>
  import { deleteEvent, deleteLecture, markLectureComplete } from "$lib/firebase-setup";
  import { getDownloadURL, getStorage, ref } from "firebase/storage";
  import { onMount } from "svelte";

  export let eventName;
  export let linkToReg;
  export let speakerName;
  export let price;
  export let venue;
  export let posterImage;
  export let docId;
  export let completed;

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
      <div class="flex justify-between items-center">
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <button
            class="bg-red-500 text-white p-2 rounded"
            on:click={() => deleteLecture(docId)}>Delete</button
          >
        </dd>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <label class="inline-flex items-center cursor-pointer">
            <span
            class="ms-3 text-sm font-normal text-gray-700 mr-2"
            >Mark as Complete </span
            >
            <input type="checkbox" value="" class="sr-only peer" on:change={(e) => markLectureComplete(docId, e.target.checked)} checked={completed}/>
            <div
            class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
          </label>
        </dd>
      </div>
    </dl>
  </div>
</div>
