<template>
  <div>
    <div class="outer-container">
      <div class="back">
        <nuxt-link to="../">back to list</nuxt-link>
      </div>
      <!-- Template for page title -->
      <h1 class="blog-title">{{ $prismic.asText(document.title) }}</h1>
      <!-- Template for published date -->
      <p class="blog-post-meta"><span class="created-at">{{ formattedDate }}</span></p>
    </div>
    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices"/>
  </div>
</template>

<script>
//Importing all the slices components
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'post',
  components: {
    SlicesBlock
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Blog'
    }
  },
  async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const post = (await $prismic.api.getByUID('post', params.uid)).data

      // Returns data to be used in template
      return {
        document: post,
        slices: post.body,
        formattedDate: Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(post.date)),
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

}
</script>