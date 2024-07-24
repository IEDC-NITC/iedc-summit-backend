<script>
  /**
   * @type {HTMLInputElement | null}
   */
  let fileEl = null;
  /**
   * @type {any[]}
   */
  let imgUrlArr = []
  function fileUploaded() {
    if (fileEl != null) {
      let files = fileEl.files;
      for (const file of files) {
        imgUrlArr = [...imgUrlArr, URL.createObjectURL(file)]
    }
      
    }
  }
</script>

<div>
  <input
    type="file"
    placeholder="Screenshot"
    accept="image/png, image/jpeg"
    on:change={fileUploaded}
    bind:this={fileEl}
    multiple
  />
  <button> Upload Screenshot </button>
  {#each imgUrlArr as imgUrl}
    <img src={imgUrl}>
  {/each}
</div>
