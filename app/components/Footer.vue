<script setup lang="ts">
defineProps({
  withSignUpForm: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <Bounded as="footer">
    <div class="grid grid-cols-1 justify-items-center gap-24">
      <HorizontalDivider />
      <SignUpForm
        v-if="withSignUpForm"
      />
      <div class="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-slate-500">
        Proudly published using <a
          href="https://prismic.io"
          class="text-slate-700"
        >Prismic</a>
      </div>
    </div>
  </Bounded>
</template>

