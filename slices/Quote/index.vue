<template>
  <section class="py-5">
    <blockquote
      class="relative font-serif text-2xl italic leading-relaxed lg:-mx-20"
    >
      <span class="pointer-events-none absolute top-0 -left-3 select-none"
        >&ldquo;</span
      ><PrismicText :field="slice.primary.quote" wrapper="span" /><span
        class="pointer-events-none select-none"
        >&rdquo;</span
      >
    </blockquote>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Quote",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>
