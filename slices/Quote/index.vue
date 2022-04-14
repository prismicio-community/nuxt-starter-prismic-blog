<template>
  <Bounded as="section" size="wide">
    <div
      v-if="$prismic.asText(slice.primary.quote)"
      class="font-serif text-3xl italic leading-relaxed"
    >
      &ldquo;
      {{ $prismic.asText(slice.primary.quote) }}
      &rdquo;
      <template v-if="slice.primary.source">
        &mdash; {{ slice.primary.source }}
      </template>
    </div>
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
