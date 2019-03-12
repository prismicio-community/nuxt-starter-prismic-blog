<template>
  <div :data-wio-id= documentId>
    <div class="outer-container">
      <div class="back">
        <nuxt-link to="../">back to list</nuxt-link>
      </div>
      <prismic-edit-button :documentId="documentId"/>
      <prismic-rich-text class="blog-title" :field="document.title"/>
      <p class="blog-post-meta"><span class="created-at">{{ document.date }}</span></p>
    </div>
    <!-- Slice section template -->
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Text slice template -->
      <template v-if="slice.slice_type === 'text'">
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
import PrismicConfig from "~/prismic.config.js"
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
      title: 'Post'
    }
  },
  async asyncData({ params, error, req }) {
    try{
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      //Query to get post content
      const result = await api.getByUID("post", params.uid)

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      return {
        document: result.data,
        documentId: result.id,
        slices: result.data.body,
      }
    } catch (e) {
      //returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

}
</script>

<style lang="sass" scoped>
.outer-container
  max-width: 700px
  margin-left: auto
  margin-right: auto
  padding: 20px 0

.back
  color: #9A9A9A
  display: block
  max-width: 700px
  margin: 0 auto 2em auto
  font-family: 'Lato', sans-serif
  font-size: 16px
  &:before
    content: '←'
    display: inline-block
    position: relative
    margin-right: 8px
  a
    color: #9A9A9A
    &:hover
      text-decoration: underline

.blog-main.single a
  text-decoration: none
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
  background-repeat: repeat-x
  background-size: 2px 2px
  background-position: 0 23px

.blog-post
  margin-bottom: 3rem
  h2
    margin: 0

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
  h2
    font-size: 28px
  h3
    font-size: 18px
  .blog-post-meta
    font-size: 16px

@media screen and (min-width: 768px)
  .blog-post-meta
    font-size: 16px
</style>