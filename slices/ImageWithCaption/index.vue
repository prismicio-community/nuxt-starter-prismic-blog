<template>
  <section class="py-5">
    <figure class="grid gap-4">
      <div
        v-if="hasImage"
        :class="
          slice.variation === 'fullWidthImage'
            ? '-mx-6 md:mx-0 md:-mx-[calc((100vw-100%)/2)]'
            : '-mx-6 md:mx-0'
        "
      >
        <PrismicImage :field="slice.primary.image" />
      </div>
      <figcaption
        v-if="hasCaption"
        class="text-center font-serif text-xs italic text-neutral-400 md:text-sm"
      >
        <PrismicText :field="slice.primary.caption" />
      </figcaption>
    </figure>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "ImageWithCaption",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  computed: {
    hasImage: function () {
      return Boolean(this.slice.primary.image.url);
    },
    hasCaption: function () {
      return Boolean(this.slice.primary.caption);
    },
  },
};
</script>
