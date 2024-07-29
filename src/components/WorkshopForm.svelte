<script>
  import { addWorkshop } from "$lib/firebase-setup";
  import { getStorage, ref, uploadBytes } from "firebase/storage";
  import ImageUpload from "./ImageUpload.svelte";
  export let closeForm;

  let eventName = "";
  let speakerName = "";
  let linkToReg = "";
  let posterImage = "";
  let price = 200;
  let venue = "";

  let file = null;

  async function submitForm() {
    if (eventName != "" && linkToReg != "") {
      if (file != null) {
        const storage = getStorage();
        const fileRef = ref(storage, `posters/${eventName}-${file.name}`);
        await uploadBytes(fileRef, file);
        posterImage = `posters/${eventName}-${file.name}`;
      }
      await addWorkshop({
        eventName,
        speakerName,
        linkToReg,
        posterImage,
        price,
        venue,
      });
      closeForm()
    }
  }
</script>

<form>
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Enter Workshop Info
      </h2>
    </div>

    <div class="border-b border-gray-900/10 pb-12">
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Workshop Name</label
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
            >Workshop Venue</label
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

        <div class="sm:col-span-4">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Speaker Name</label
          >
          <div class="mt-2">
            <input
              id="text"
              name="email"
              type="text"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              bind:value={speakerName}
            />
          </div>
        </div>
        <div class="col-span-full">
          <ImageUpload bind:file={file}></ImageUpload>
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
            >Price:
          </label>
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
        class="text-sm font-semibold leading-6 text-gray-900">Cancel</button
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
