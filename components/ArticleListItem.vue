<template>
  <li
    class="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8"
  >
    <PrismicLink :field="article" tab-index="-1">
      <div class="aspect-w-4 aspect-h-3 relative bg-gray-100">
        <PrismicImage
          v-if="featuredImage.url"
          :field="featuredImage"
          class="object-cover"
        />
      </div>
    </PrismicLink>
    <div class="grid grid-cols-1 gap-3 md:col-span-2">
      <Heading as="h2">
        <PrismicLink :field="article">
          {{ $prismic.asText(article.data.title) }}
        </PrismicLink>
      </Heading>
      <p class="font-serif italic tracking-tighter text-slate-500">
        {{ formattedDate }}
      </p>
      <p v-if="excerpt" class="font-serif leading-relaxed md:text-lg md:leading-relaxed">
        {{ excerpt }}
      </p>
    </div>
  </li>
</template>

<script>
const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    featuredImage () {
      if (this.article.data.featuredImage.url) {
        return this.article.data.featuredImage
      }

      const imageSlice = this.article.data.slices.find(slice => slice.slice_type === 'image')
      if (imageSlice && imageSlice.primary.image.url) {
        return imageSlice.primary.image
      }
      return null
    },
    formattedDate () {
      const date = this.$prismic.asDate(this.article.data.publishDate || this.article.first_publication_date)

      return dateFormatter.format(date)
    },
    excerpt () {
      const text = this.article.data.slices
        .filter(slice => slice.slice_type === 'text')
        .map(slice => this.$prismic.asText(slice.primary.text))
        .join(' ')
      const excerpt = text.substring(0, 300)
      if (text.length > 300) {
        return excerpt.substring(0, excerpt.lastIndexOf(' ')) + '…'
      } else {
        return excerpt
      }
    }
  }
}
</script>
