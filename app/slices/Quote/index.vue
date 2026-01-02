<script setup lang="ts">
import type { Content } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.QuoteSlice>());
</script>

<template>
  <Bounded
    as="section"
    size="wide"
  >
    <div
      v-if="$prismic.isFilled.richText(slice.primary.quote)"
      class="font-serif text-3xl italic leading-relaxed"
    >
      &ldquo;
      <PrismicText :field="slice.primary.quote" />
      &rdquo;
      <template v-if="slice.primary.source">
        &mdash; {{ slice.primary.source }}
      </template>
    </div>
  </Bounded>
</template>