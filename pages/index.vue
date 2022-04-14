<template>
  <Bounded size="widest">
    <ul class="grid grid-cols-1 gap-16">
      <ArticleListItem
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </ul>
  </Bounded>
</template>

<script>
export default {
  async asyncData ({ $prismic, store }) {
    const { results: articles } = await $prismic.api.query(
      $prismic.predicate.at('document.type', 'article'),
      {
        orderings: `[${[
          { field: 'my.article.publishDate', direction: 'desc' },
          { field: 'document.first_publication_date', direction: 'desc' }
        ].map(({ field, direction }) => `${field} ${direction}`).join(', ')}]`,
        pageSize: 100
      }
    )
    await store.dispatch('prismic/load')
    store.commit('layout/setWithHeaderProfile', true)
    store.commit('layout/setWithHeaderDivider', false)
    store.commit('layout/setWithFooterSignUpForm', true)
    return {
      articles
    }
  },
  head () {
    return {
      title: this.$prismic.asText(this.$store.state.prismic.settings.data.name)
    }
  }
}
</script>
