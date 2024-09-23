<script>
  import { deleteData } from "$lib/firebase-setup";
  import { getDownloadURL, getStorage, ref } from "firebase/storage";
  import { onMount } from "svelte";

  export let Name;
  export let Priority;
  export let Image;
  export let docId;

  let ImageUrl = "";

  onMount(async () => {
    // get poster url

    const storage = getStorage();
    getDownloadURL(ref(storage, Image)).then((url) => {
      ImageUrl = url;
    });
  });
</script>

<div class="rounded p-2 shadow">
  <div class="mt-6 border-t border-gray-100">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Name</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {Name}
        </dd>
      </div>

      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Priority</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {Priority}
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Image</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <img src={ImageUrl} alt="" width="400px" />
        </dd>
      </div>
      <div class="flex justify-between items-center">
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <button
            class="bg-red-500 text-white p-2 rounded"
            on:click={() => {
              deleteData("sponsors", docId)
            }}>Delete</button
          >
        </dd>
      </div>
    </dl>
  </div>
</div>
