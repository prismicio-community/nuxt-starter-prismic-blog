<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.ImageSlice>());
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
      <figcaption
        v-if="$prismic.isFilled.richText(slice.primary.caption)"
        class="text-center font-serif italic tracking-tight text-slate-500"
      >
        <PrismicRichText :field="slice.primary.caption" />
      </figcaption>
    </figure>
  </Bounded>
</template>