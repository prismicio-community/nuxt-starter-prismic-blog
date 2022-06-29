<template>
  <div class="text-slate-700">
    <!-- TODO: Remove the following element once you have read the documentation. -->
    <div
      v-if="$config.development"
      :style="{
        background: '#5163ba',
        padding: '1rem',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: '#fff'
      }"
    >
      <p>
        <strong>👋 Welcome to your new website!</strong> To customize the code
        and content of this site,&nbsp;<a
          href="https://github.com/prismicio-community/nuxt-starter-prismic-blog/tree/master/docs"
          target="_blank"
          rel="noreferrer"
          :style="{
            textDecoration: 'underline'
          }"
          >see the documentation</a
        >. Remove this bar in <code>layouts/default.vue</code>.
      </p>
    </div>
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
