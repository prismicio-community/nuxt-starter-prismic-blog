<script setup lang="ts">
const {
  withHeaderProfile,
  withHeaderDivider,
  withFooterSignUpForm
} = useLayout()
</script>

<template>
  <div class="text-slate-700">
    <!-- TODO: Remove the following element once you have read the documentation. -->
    <DevOnly>
      <div
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
          >see the documentation</a>. Remove this bar in <code>layouts/default.vue</code>.
        </p>
      </div>
    </DevOnly>
    <Header
      :with-profile="withHeaderProfile"
      :with-divider="withHeaderDivider"
    />
    <slot />
    <Footer :with-sign-up-form="withFooterSignUpForm" />
  </div>
</template>
