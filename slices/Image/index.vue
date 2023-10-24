<script setup lang="ts">
import { type Content } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.ImageSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>

<template>
  <Bounded
    as="section"
    :size="slice.variation === 'wide' ? 'widest' : 'base'"
  >
    <figure class="grid grid-cols-1 gap-4">
      <div
        v-if="slice.primary.image.url"
        class="bg-gray-100"
      >
        <PrismicImage
          :field="slice.primary.image"
          :width="slice.primary.image.dimensions.width"
          :height="slice.primary.image.dimensions.height"
        />
      </div>
      <PrismicRichText
        v-if="$prismic.asText(slice.primary.caption)"
        :field="slice.primary.caption"
        wrapper="figcaption"
        class="text-center font-serif italic tracking-tight text-slate-500"
      />
    </figure>
  </Bounded>
</template>