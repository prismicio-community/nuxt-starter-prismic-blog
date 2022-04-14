<template>
  <div class="px-4">
    <div class="grid max-w-lg grid-cols-1 justify-items-center gap-8">
      <NuxtLink to="/" tab-index="-1">
        <div class="relative h-40 w-40 overflow-hidden rounded-full bg-slate-300">
          <PrismicImage
            v-if="profilePicture.url"
            :field="profilePicture"
            class="object-cover"
          />
        </div>
      </NuxtLink>
      <div
        v-if="$prismic.asText(name) || $prismic.asText(description)"
        class="grid grid-cols-1 gap-2 text-center"
      >
        <Heading v-if="$prismic.asText(name)">
          <NuxtLink to="/">
            {{ $prismic.asText(name) }}
          </NuxtLink>
        </Heading>
        <PrismicText
          v-if="$prismic.asText(description)"
          :field="description"
          wrapper="p"
          class="font-serif text-2xl italic leading-normal tracking-tight text-slate-500"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: Array,
      required: true
    },
    description: {
      type: Array,
      required: true
    },
    profilePicture: {
      type: Object,
      required: true
    }
  }
}
</script>
