<template>
  <div class="text-slate-700">
    <Header
      v-if="navigation.data && settings.data"
      :with-profile="withHeaderProfile"
      :with-divider="withHeaderDivider"
      :navigation="navigation"
      :settings="settings"
    />
    <main><nuxt /></main>
    <Footer v-if="navigation.data && settings.data" :with-sign-up-form="withFooterSignUpForm" :settings="settings" />
  </div>
</template>

<script>
export default {
  computed: {
    withHeaderProfile () {
      return this.$store.state.layout.withHeaderProfile
    },
    withHeaderDivider () {
      return this.$store.state.layout.withHeaderDivider
    },
    withFooterSignUpForm () {
      return this.$store.state.layout.withFooterSignUpForm
    },
    navigation () {
      return this.$store.state.prismic.navigation
    },
    settings () {
      return this.$store.state.prismic.settings
    }
  }
}
</script>

<style>
body {
  @apply overflow-x-hidden antialiased;
}
</style>
