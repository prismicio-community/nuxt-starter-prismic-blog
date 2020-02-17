<template>
  <div class="outer-container">
    <div class="back">
      <nuxt-link to="/">back to list</nuxt-link>
    </div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/" style="text-decoration: underline;">Return to home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head () {
    return {
      title: 'Prismic Nuxt.js Blog',
    }
  },
}
</script>