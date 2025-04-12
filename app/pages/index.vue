<script setup lang="ts">
const prismic = usePrismic()
const { data: articles } = await useAsyncData('$articles', () =>
  prismic.client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  })
)
const settings = useSettings()

definePageMeta({
  withHeaderProfile: true,
  withHeaderDivider: false,
  withFooterSignUpForm: true
})

useHead({
  title: computed(() => prismic.asText(settings.value?.data.name))
})
</script>

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
