<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.TextSlice>());
</script>

<template>
  <Bounded as="section">
    <PrismicRichText
      v-if="$prismic.isFilled.richText(slice.primary.text)"
      class="font-serif leading-relaxed md:text-xl md:leading-relaxed"
      :field="slice.primary.text"
      wrapper="div"
    />
  </Bounded>
</template>