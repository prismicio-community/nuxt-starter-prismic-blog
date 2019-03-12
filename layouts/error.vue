<template>
  <div class="outer-container">
    <div class="back">
      <nuxt-link to="../">back to list</nuxt-link>
    </div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="../" style="text-decoration: underline;">Return to home</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error'],
  layout: 'default'
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
</style>

