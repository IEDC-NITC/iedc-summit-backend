<script>
    import { loadImage } from "$lib/firebase-setup";
    import { onMount } from "svelte";

    let urlStr = "";

    onMount(async () => {
        urlStr = await loadImage()
    })
</script>

<div>
  <div>
    <h2>Login</h2>
  </div>
  <a href="/console">Console</a>
</div>
