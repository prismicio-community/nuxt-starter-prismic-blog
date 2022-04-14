<template>
  <SliceZone :slices="page.data.slices" :components="components" />
</template>

<script>
import { components } from '~/slices'

export default {
  async asyncData ({ $prismic, params, store }) {
    const page = await $prismic.api.getByUID('page', params.uid)
    await store.dispatch('prismic/load')
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
  },
  mounted () {
    this.$store.commit('layout/setWithHeaderProfile', true)
    this.$store.commit('layout/setWithHeaderDivider', true)
    this.$store.commit('layout/setWithFooterSignUpForm', true)
  }
}
</script>
