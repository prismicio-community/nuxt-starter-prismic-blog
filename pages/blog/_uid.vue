<template>
  <div :data-wio-id= documentId>
    <div class="outer-container">
      <div class="back">
        <nuxt-link to="../">back to list</nuxt-link>
      </div>
      <!-- Button to edit document in dashboard -->
      <prismic-edit-button :documentId="documentId"/>
      <!-- Template for page title -->
      <h1 class="blog-title">{{ $prismic.richTextAsPlain(document.title) }}</h1>
      <!-- Template for published date -->
      <p class="blog-post-meta"><span class="created-at">{{ Intl.DateTimeFormat('en-US', dateOptions).format(new Date(document.date)) }}</span></p>
    </div>
    <!-- Slice section template -->
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Text slice template -->
      <template v-if="slice.slice_type === 'text'">
        <!-- Here :slice="slice" passes the data to the component -->
        <text-slice :slice="slice"></text-slice>
      </template>
      <!-- Quote slice template -->
      <template v-else-if="slice.slice_type === 'quote'">
        <quote-slice :slice="slice"></quote-slice>
      </template>
      <!-- Image with caption slice template -->
      <template v-else-if="slice.slice_type === 'image_with_caption'">
        <image-caption-slice :slice="slice"></image-caption-slice>
      </template>
    </section>
  </div>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic-configuration.js"
//Importing all the slices components
import TextSlice from '~/components/slices/TextSlice.vue'
import QuoteSlice from '~/components/slices/QuoteSlice.vue'
import ImageCaptionSlice from '~/components/slices/ImageCaptionSlice.vue'

export default {
  name: 'post',
  components: {
    TextSlice,
    QuoteSlice,
    ImageCaptionSlice
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Blog'
    }
  },
  async asyncData({ params, error, req }) {
    try{
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      // Query to get post content
      const post = await api.getByUID("post", params.uid)

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      // Returns data to be used in template
      return {
        document: post.data,
        documentId: post.id,
        slices: post.data.body,
        dateOptions: { year: 'numeric', month: 'short', day: '2-digit' },
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

}
</script>

<style lang="sass" scoped>
.blog-main.single a
  text-decoration: none
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
  background-repeat: repeat-x
  background-size: 2px 2px
  background-position: 0 23px

.blog-post
  margin-bottom: 3rem

.blog-post-meta
  color: #9A9A9A
  font-family: 'Lato', sans-serif
  margin-bottom: 8px

@media (max-width: 767px)
  .outer-container
    padding: 0 20px
  .post-part pre
    font-size: 14px
  h1
    font-size: 36px
    line-height: 45px
  .blog-post-meta
    font-size: 16px

@media screen and (min-width: 768px)
  .blog-post-meta
    font-size: 16px
</style>