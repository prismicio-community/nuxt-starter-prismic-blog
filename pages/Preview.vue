<template>
  <div class="outer-container">
    <p>Loading the Prismic's Preview...</p>
  </div>
</template>

<script>
import Prismic from "prismic-javascript"
import LinkResolver from "~/plugins/link-resolver.js"
import PrismicConfig from "~/prismic.config.js"

export default {
  name: 'Preview',
  async asyncData({ query, redirect }) {
    let previewToken = query.token
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint)
    const url = await api.previewSession(previewToken, LinkResolver, '/')
    redirect(url)
  },
}
</script>

<style lang="sass" scoped>
.outer-container
  max-width: 700px
  margin-left: auto
  margin-right: auto
  padding: 20px 0
  text-align: center
</style>

