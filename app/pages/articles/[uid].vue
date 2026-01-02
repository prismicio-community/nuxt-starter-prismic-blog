<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { asText, asDate } from '@prismicio/client'

import { components } from '~/slices'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

const { client } = usePrismic()
const route = useRoute()

const { data: article } = await useAsyncData(`articles/${route.params.uid}`, () =>
  client.getByUID('article', route.params.uid as string)
)
const { data: latestArticles } = useAsyncData('$latestArticles', () =>
  client.getAllByType("article", {
    limit: 3,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  })
)

const settings = useSettings()

definePageMeta({
  withHeaderProfile: false,
  withHeaderDivider: false,
  withFooterSignUpForm: true
})

useHead({
  title: computed(() => `${asText(article.value?.data.title)} | ${asText(settings.value?.data.name)}`)
})

const formatDate = (article: Content.ArticleDocument | null) => {
  const date = asDate(article?.data.publishDate || article?.first_publication_date)

  return dateFormatter.format(date || undefined)
}
</script>

<template>
  <div>
    <Bounded>
      <NuxtLink
        to="/"
        class="font-semibold tracking-tight text-slate-400"
      >
        &larr; Back to articles
      </NuxtLink>
    </Bounded>
    <article>
      <Bounded class="pb-0">
        <h1 class="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
          <PrismicText :field="article?.data.title" />
        </h1>
        <p v-if="article" class="font-serif italic tracking-tighter text-slate-500">
          {{ formatDate(article) }}
        </p>
      </Bounded>
      <SliceZone
        :slices="article?.data.slices ?? []"
        :components="components"
      />
    </article>
    <Bounded v-if="latestArticles?.length">
      <div class="grid grid-cols-1 justify-items-center gap-16 md:gap-24">
        <HorizontalDivider />
        <div class="w-full">
          <Heading
            size="2xl"
            class="mb-10"
          >
            Latest articles
          </Heading>
          <ul class="grid grid-cols-1 gap-12">
            <li
              v-for="latestArticle in latestArticles"
              :key="latestArticle.id"
            >
              <h1 class="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                <PrismicLink :document="latestArticle">
                  <PrismicText :field="latestArticle.data.title" />
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
