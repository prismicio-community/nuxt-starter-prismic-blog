<template>
  <div class="grid gap-2">
    <h2 class="text-2xl font-black md:text-3xl">
      <PrismicLink :field="post">
        <PrismicText :field="post.data.title" />
      </PrismicLink>
    </h2>

    <p class="text-neutral-400">
      <time :dateTime="post.data.date">{{ displayDate }}</time>
    </p>

    <p v-if="excerpt" class="font-serif leading-relaxed md:text-lg">
      {{ excerpt }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    excerpt: function () {
      const text =
        this.post.data.slices
          .filter((slice) => slice.slice_type === "text")
          .map((slice) => this.$prismic.asText(slice.primary.text))
          .join(" ") || "";

      const excerpt = text.substring(0, 300);

      if (text.length > 300) {
        return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
      } else {
        return excerpt;
      }
    },
    displayDate: function () {
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }).format(this.$prismic.asDate(this.post.data.date));
    },
  },
};
</script>
