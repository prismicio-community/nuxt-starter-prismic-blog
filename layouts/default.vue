<template>
  <div>
    <nuxt />
    <footer-prismic/>
  </div>
</template>

<script>
import PrismicDom from "prismic-dom"
import RichText from "prismic-richtext"
import UiHelpers from "prismic-helpers"
import FooterPrismic from '~/components/FooterPrismic.vue'

export default {
  components: {
      FooterPrismic
  },
  head () {
    return {
      title: 'Home Page',
      meta: [
        { name: 'twitter:title', content: 'Prismic + Nuxt blog example'},
        { name: 'twitter:description', content: 'A blog website built in Nuxt delivering content from Prismic.'},
      ],
      script: [
      ],
    }
  },
}
</script>