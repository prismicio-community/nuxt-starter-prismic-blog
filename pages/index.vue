<template>
  <section class="home">
    <article>
      <prismic-edit-button :documentId="documentId"/>
      <div class="blog-avatar" :style="{ backgroundImage: 'url(' + image + ')' }" ></div>
      <prismic-rich-text :field="document.headline"/>
      <prismic-rich-text class="blog-description" :field="document.description"/>
      
      <!-- Check blog posts exist -->
      <div v-if="posts.length !== 0" class="blog-main">
        <!-- Template for blog posts -->
        <section v-for="post in posts" :key="post.id" v-bind:post="post" class="blog-post">
          <blog-posts :post="post"></blog-posts>
        </section>
      </div>
      <!-- If no blog posts return message -->
      <div v-else class="blog-main">
        <p>No Posts published at this time.</p>
      </div>
    </article>
  </section>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
import BlogPosts from '../components/BlogPosts.vue'

export default {
  name: 'Home',
  components: {
    BlogPosts
  },
  head () {
    return {
      title: 'Home Page',
    }
  },
  async asyncData({context, error, req}) {
    try{
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      let document = {}
      const result = await api.getSingle('blog_home')
      document = result.data

      let posts = {};
      const blog = await api.query(
        Prismic.Predicates.at("document.type", "post"),
        { orderings : '[my.post.date desc]' }
      )
      posts = blog.results

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      return {
        document,
        documentId: result.id,
        posts,
        image: document.image.url,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="sass" scoped>
.home
  max-width: 700px
  margin: auto
  text-align: center
  .blog-avatar
    height: 140px
    width: 140px
    border-radius: 50%
    background-position: center
    background-size: cover
    margin: 1em auto
  .blog-description
    font-size: 18px
    color: #9A9A9A
    line-height: 30px
    margin-bottom: 3rem
    padding-bottom: 3rem
    font-family: 'Lato', sans-serif
    border-bottom: 1px solid #DADADA

.blog-main
  max-width: 700px
  margin: auto
  text-align: left
  &.single img
    width: 100%
    height: auto
  &.single a
    text-decoration: none
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background-repeat: repeat-x
    background-size: 2px 2px
    background-position: 0 23px

.blog-post
  margin: 0
  margin-bottom: 3rem

@media (max-width: 767px)
  .home
    padding: 0 20px
  h1
    font-size: 36px
    line-height: 45px
  h2
    font-size: 28px
  h3
    font-size: 18px
  .blog-post-meta
    font-size: 16px
  .blog-main
    padding: 0
    font-size: 18px
</style>
