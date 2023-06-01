<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData('[uid]', () =>
  prismic.client.getByUID('page', route.params.uid as string)
)
const settings = useSettings()

const {
  withHeaderProfile,
  withHeaderDivider,
  withFooterSignUpForm
} = useLayout()
onMounted(() => {
  withHeaderProfile.value = true
  withHeaderDivider.value = true
  withFooterSignUpForm.value = true
})

useHead({
  title: computed(() => `${prismic.asText(page.value?.data.title)} | ${prismic.asText(settings.value?.data.name)}`)
})
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
