<template>
  <article>
    <div class="grid gap-6 md:gap-8">
      <BackButton />
      <h1 class="text-3xl font-black md:text-5xl md:leading-tight">
        {{ title }}
      </h1>
    </div>
    <div class="py-5 md:pb-10">
      <SliceZone :components="components" :slices="post.data.slices" />
    </div>
  </article>
</template>

<script>
import { components } from "~/slices";

export default {
  data() {
    return { components };
  },
  async asyncData({ $prismic, params, error }) {
    const post = await $prismic.api.getByUID("post", params.uid);

    if (post) {
      return { post };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  computed: {
    title() {
      return this.$prismic.asText(this.post.data.title) || "Untitled";
    },
  },
};
</script>
