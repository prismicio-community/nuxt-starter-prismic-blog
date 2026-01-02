<script setup lang="ts">
import type { RichTextField, ImageField } from '@prismicio/client'

defineProps({
  name: {
    type: Object as PropType<RichTextField>,
    default: undefined
  },
  description: {
    type: Object as PropType<RichTextField>,
    default: undefined
  },
  profilePicture: {
    type: Object as PropType<ImageField>,
    default: undefined
  }
})
</script>

<template>
  <div class="px-4">
    <div class="grid max-w-lg grid-cols-1 justify-items-center gap-8">
      <NuxtLink
        to="/"
        tab-index="-1"
      >
        <div class="relative h-40 w-40 overflow-hidden rounded-full bg-slate-300">
          <PrismicImage
            v-if="profilePicture?.url"
            :field="profilePicture"
            class="object-cover"
          />
        </div>
      </NuxtLink>
      <div
        v-if="$prismic.isFilled.richText(name) || $prismic.isFilled.richText(description)"
        class="grid grid-cols-1 gap-2 text-center"
      >
        <Heading v-if="$prismic.isFilled.richText(name)">
          <NuxtLink to="/">
            <PrismicText :field="name" />
          </NuxtLink>
        </Heading>
        <p
          v-if="$prismic.isFilled.richText(description)"
          class="font-serif text-2xl italic leading-normal tracking-tight text-slate-500"
        >
          <PrismicText :field="description" />
        </p>
      </div>
    </div>
  </div>
</template>
