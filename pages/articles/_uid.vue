<template>
  <div>
    <Bounded>
      <NuxtLink to="/" class="font-semibold tracking-tight text-slate-400">
        &larr; Back to articles
      </NuxtLink>
    </Bounded>
    <article>
      <Bounded class="pb-0">
        <PrismicText
          :field="article.data.title"
          wrapper="h1"
          class="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl"
        />
        <p class="font-serif italic tracking-tighter text-slate-500">
          {{ formatDate(article) }}
        </p>
      </Bounded>
      <SliceZone :slices="article.data.slices" :components="components" />
    </article>
    <Bounded v-if="latestArticles.length">
      <div class="grid grid-cols-1 justify-items-center gap-16 md:gap-24">
        <HorizontalDivider />
        <div class="w-full">
          <Heading size="2xl" class="mb-10">
            Latest articles
          </Heading>
          <ul class="grid grid-cols-1 gap-12">
            <li v-for="latestArticle in latestArticles" :key="latestArticle.id">
              <h1 class="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                <PrismicLink :field="latestArticle">
                  {{ $prismic.asText(latestArticle.data.title) }}
                </PrismicLink>
              </h1>
              <p class="font-serif italic tracking-tighter text-slate-500">
                {{ formatDate(latestArticle) }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Bounded>
  </div>
</template>

<script>
import { components } from '~/slices'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

export default {
  async asyncData ({ $prismic, store, params }) {
    const article = await $prismic.api.getByUID('article', params.uid)
    const { results: latestArticles } = await $prismic.api.query(
      $prismic.predicate.at('document.type', 'article'),
      {
        orderings: `[${[
          { field: 'my.article.publishDate', direction: 'desc' },
          { field: 'document.first_publication_date', direction: 'desc' }
        ].map(({ field, direction }) => `${field} ${direction}`).join(', ')}]`,
        pageSize: 3
      }
    )
    await store.dispatch('prismic/load')
    store.commit('layout/setWithHeaderProfile', false)
    store.commit('layout/setWithHeaderDivider', false)
    store.commit('layout/setWithFooterSignUpForm', true)
    return {
      article,
      latestArticles
    }
  },
  data () {
    return { components }
  },
  head () {
    return {
      title: `${this.$prismic.asText(this.article.data.title)} | ${this.$prismic.asText(this.$store.state.prismic.settings.data.name)}`
    }
  },
  methods: {
    formatDate (article) {
      const date = this.$prismic.asDate(article.data.publishDate || article.first_publication_date)

      return dateFormatter.format(date)
    }
  }
}
</script>
