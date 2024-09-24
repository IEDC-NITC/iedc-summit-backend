<script>
  import { deleteData } from "$lib/firebase-setup";
  export let Title;
  export let Priority;
  export let docId;
  export let onCall;
</script>

<div class="rounded p-2 shadow">
  <div class="mt-6 border-t border-gray-100">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Title</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {Title}
        </dd>
      </div>

      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Priority</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {Priority}
        </dd>
      </div>
      <div class="flex justify-between items-center">
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <button
            class="bg-red-500 text-white p-2 rounded"
            on:click={async () => {
              await deleteData("news", docId);
              onCall();
            }}>Delete</button
          >
        </dd>
      </div>
    </dl>
  </div>
</div>
