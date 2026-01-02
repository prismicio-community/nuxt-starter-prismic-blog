<script setup lang="ts">
import { asText } from '@prismicio/client'
import { components } from '~/slices'

const { client } = usePrismic()
const route = useRoute()
const { data: page } = await useAsyncData(route.params.uid as string, () =>
  client.getByUID('page', route.params.uid as string)
)
const settings = useSettings()

definePageMeta({
  withHeaderProfile: true,
  withHeaderDivider: true,
  withFooterSignUpForm: true
})

useHead({
  title: computed(() => `${asText(page.value?.data.title)} | ${asText(settings.value?.data.name)}`)
})
</script>

<template>
  <main>
    <SliceZone :slices="page?.data.slices ?? []" :components="components" />
  </main>
</template>
