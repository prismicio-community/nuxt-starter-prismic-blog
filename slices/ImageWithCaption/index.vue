<template>
  <section class="py-5">
    <figure class="grid gap-4">
      <div
        v-if="hasImage"
        class="-mx-6 md:mx-0"
        :class="{
          'md:-mx-[calc((100vw-100%)/2)]': slice.variation === 'fullWidthImage',
        }"
      >
        <PrismicImage :field="slice.primary.image" />
      </div>
      <PrismicText
        v-if="hasCaption"
        :field="slice.primary.caption"
        wrapper="figcaption"
        class="text-center font-serif text-xs italic text-neutral-400 md:text-sm"
      />
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
    hasImage() {
      return Boolean(this.slice.primary.image.url);
    },
    hasCaption() {
      return Boolean(this.slice.primary.caption);
    },
  },
};
</script>
