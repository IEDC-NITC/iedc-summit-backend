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

  export let Name;
  export let Designation;
  export let Company;
  export let LinkedIn;
  export let Priority;
  export let Image;

  let file = null;

  async function submitForm() {
    if (
      Name != "" &&
      Designation != "" &&
      Company != "" &&
      LinkedIn != "" &&
      Priority != ""
    ) {
      if (file != null) {
        const storage = getStorage();
        const fileRef = ref(storage, `speakers/${Name}-${file.name}`);
        await uploadBytes(fileRef, file);
        Image = `speakers/${Name}-${file.name}`;
      }
      await addData("speakers", {
        Name,
        Designation,
        Company,
        LinkedIn,
        Priority,
        Image,
      });

      closeForm();
    }
  }
</script>

<form>
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Enter Speaker info
      </h2>
    </div>

    <div class="border-b border-gray-900/10 pb-12">
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label
            for="name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Name</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              bind:value={Name}
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="designation"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Designation</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="designation"
              id="designation"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              bind:value={Designation}
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="company"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Company</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="company"
              id="company"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              bind:value={Company}
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="linkedin"
            class="block text-sm font-medium leading-6 text-gray-900"
            >LinkedIn</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              bind:value={LinkedIn}
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

        <div class="col-span-full">
          <ImageUpload bind:file></ImageUpload>
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
