<script setup lang="ts">
import { Content } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.QuoteSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>

<template>
  <Bounded
    as="section"
    size="wide"
  >
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