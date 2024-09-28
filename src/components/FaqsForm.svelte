<script>
  import { addData } from "$lib/firebase-setup";
  import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
  } from "firebase/storage";
  import ImageUpload from "./ImageUpload.svelte";

  export let closeForm;
  export let Description;
  export let Title;
  export let Priority;

  async function submitForm() {
    if (Title != "" && Priority != "") {
      await addData("faqs", {
        Title,
        Description,
        Priority
      });

      closeForm();
    }
  }
</script>

<form>
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Enter FAQS info
      </h2>
    </div>

    <div class="border-b border-gray-900/10 pb-12">
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label
            for="name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Title</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              bind:value={Title}
            />
          </div>
        </div>

        <div class="sm:col-span-3">
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Description</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                bind:value={Description}
              />
            </div>
          </div>

          
        <div class="sm:col-span-3">
          <label
            for="priority"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Priority</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="priority"
              id="priority"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              bind:value={Priority}
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        class="text-sm font-semibold leading-6 text-gray-900"
        on:click={() => closeForm()}>Cancel</button
      >
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        on:click={submitForm}>Save</button
      >
    </div>
  </div>
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
