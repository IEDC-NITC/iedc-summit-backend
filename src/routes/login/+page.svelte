<script>
  import { goto } from "$app/navigation";
  import { signInWithCreds } from "$lib/firebase-auth";
  import { authUser } from "$lib/store";

  let email = "";
  let passwd = "";

  let loading = false;
  let showError = true;


  async function login(e) {
    loading = true;
    console.log("loggin in ")
    e.preventDefault();
    await signInWithCreds(email, passwd)
  }
  authUser.subscribe((val) => {
    if (val != null) {
      goto('/console/events')
    }
    else {
      showError = !showError;
      loading = false;
    }
  })
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2
      class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
    >
      Sign in to your account
    </h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Email address</label
        >
        <div class="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            bind:value={email}
          />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label
            for="password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Password</label
          >
        </div>
        <div class="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            bind:value={passwd}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          on:click={login}>{loading ? "..." : "Sign in"}</button
        >
        {#if showError}Authentication failed try again{/if}
      </div>
    </form>
  </div>
</div>

<style>
  input {
    @apply p-2 rounded focus:ring-2 ring-blue-500 bg-slate-200;
  }
</style>
