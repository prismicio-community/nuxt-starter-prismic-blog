<template>
  <SliceZone :slices="page.data.slices" :components="components" />
</template>

<script>
import { components } from '~/slices'

export default {
  async asyncData ({ $prismic, params, store }) {
    const page = await $prismic.api.getByUID('page', params.uid)
    await store.dispatch('prismic/load')
    store.commit('layout/setWithHeaderProfile', true)
    store.commit('layout/setWithHeaderDivider', true)
    store.commit('layout/setWithFooterSignUpForm', true)
    return {
      page
    }
  },
  data () {
    return {
      components
    }
  },
  head () {
    return {
      title: `${this.$prismic.asText(this.page.data.title)} | ${this.$prismic.asText(this.$store.state.prismic.settings.data.name)}`
    }
  }
}
</script>
