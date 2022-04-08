<template>
  <div class="grid gap-6 py-10 text-center text-xl">
    <h1 class="text-center text-4xl font-black md:text-5xl">Good job!</h1>
    <p>You're halfway done with setting up your Prismic website</p>
    <p>
      Just visit your
      <a :href="repositoryURL" target="_blank" class="underline">
        Prismic dashboard
      </a>
      and add some content there
    </p>
  </div>
</template>

<script>
import sm from "~~/sm.json";

export default {
  data() {
    const url = new URL(sm.apiEndpoint);

    return {
      repositoryURL: url.origin,
    };
  },
};
</script>

