<template>
  <Bounded as="footer">
    <div class="grid grid-cols-1 justify-items-center gap-24">
      <HorizontalDivider />
      <SignUpForm v-if="withSignUpForm" :settings="settings" />
      <div class="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-slate-500">
        Proudly published using <a href="https://prismic.io" class="text-slate-700">Prismic</a>
      </div>
    </div>
  </Bounded>
</template>

<script>
export default {
  props: {
    withSignUpForm: {
      type: Boolean,
      default: true
    },
    settings: {
      type: Object,
      required: true
    }
  }
}
</script>
