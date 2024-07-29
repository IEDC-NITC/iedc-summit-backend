<script>
    export let file;

    let imgUrl = ""

    function onUpload(e) {
        if (e.target.files.length > 0) {
            file = e.target.files[0]
            console.log(file.name)
            imgUrl = URL.createObjectURL(file)
        }
    }
</script>
<div>
  <label
    for="cover-photo"
    class="block text-sm font-medium leading-6 text-gray-900"
    >Poster Image</label
  >
  <div
    class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
  >
    <div class="text-center">
      {#if imgUrl == ""}
      <svg
        class="mx-auto h-12 w-12 text-gray-300"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
          clip-rule="evenodd"
        />
      </svg>
      {:else}
      <img src={imgUrl} alt="" width="400px">
      {/if}
      <div class="mt-4 flex text-sm leading-6 text-gray-600">
        <label
          for="file-upload"
          class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
        >
          <span>Upload a file</span>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            class="sr-only"
            on:change={onUpload}
            accept="image/jpeg, image/png, 
                    image/webp, image/jpg"
          />
        </label>
        <p class="pl-1">or drag and drop</p>
      </div>
      <p class="text-xs leading-5 text-gray-600">PNG, JPG, WEBP up to 10MB</p>
    </div>
  </div>
</div>
