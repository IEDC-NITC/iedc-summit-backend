<script>
  import { addEvent } from "$lib/firebase-setup";
  import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
  } from "firebase/storage";
  import ImageUpload from "./ImageUpload.svelte";
  import PdfUpload from "./PdfUpload.svelte";

  export let closeForm;

  let eventName = "";
  let linkToGuidelines = "";
  let linkToReg = "";
  let posterImage = "";
  let price = 200;
  let venue = "";
  export let Priority;

  let file = null;
  let pdfFile = null;

  async function submitForm() {
    if (eventName != "" && linkToReg != "") {
      if (file != null) {
        const storage = getStorage();
        const fileRef = ref(storage, `posters/${eventName}-${file.name}`);
        await uploadBytes(fileRef, file);
        posterImage = `posters/${eventName}-${file.name}`;
      }
      if (pdfFile != null) {
        const storage = getStorage();
        const fileRef = ref(storage, `guidelines/${eventName}-${pdfFile.name}`);
        await uploadBytes(fileRef, pdfFile);
        linkToGuidelines = await getDownloadURL(fileRef);
      }
      await addEvent({
        eventName,
        linkToGuidelines,
        linkToReg,
        posterImage,
        Priority,
        price,
        venue,
      });

      closeForm();
    }
  }
</script>

<form>
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Enter event info
      </h2>
    </div>

    <div class="border-b border-gray-900/10 pb-12">
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Event Name</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              bind:value={eventName}
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="last-name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Event Venue</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              bind:value={venue}
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
        <div class="sm:col-span-4">
          <PdfUpload bind:file={pdfFile}></PdfUpload>
        </div>
        <div class="col-span-full">
          <ImageUpload bind:file></ImageUpload>
        </div>

        <div class="sm:col-span-2 sm:col-start-1">
          <label
            for="city"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Link to Registration</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              autocomplete="address-level2"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              bind:value={linkToReg}
            />
          </div>
        </div>
        <div class="sm:col-span-2 sm:col-start-1">
          <label
            for="city"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Price</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              autocomplete="address-level2"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              bind:value={price}
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
