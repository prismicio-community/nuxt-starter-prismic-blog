<script setup lang="ts">
import { Content } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.TextSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>


<template>
  <Bounded as="section">
    <PrismicRichText
      v-if="$prismic.asText(slice.primary.text)"
      class="font-serif leading-relaxed md:text-xl md:leading-relaxed"
      :field="slice.primary.text"
      wrapper="div"
    />
  </Bounded>
</template>