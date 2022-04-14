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

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
}
</script>
