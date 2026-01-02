<script setup lang="ts">
import type { RichTextComponents } from '@prismicio/vue';
import defaultComponents from '~/prismic/richTextComponents';

const settings = useSettings()

const components: RichTextComponents = {
  ...defaultComponents,
  heading1: {
    as: 'h2',
    class: 'mb-4 last:mb-0 text-3xl md:text-4xl font-sans font-semibold tracking-tighter text-slate-800'
  },
  paragraph: {
    class: 'mb-4 italic last:mb-0'
  }
}
</script>

<template>
  <div class="px-4">
    <form
      action="/api/sign-up"
      method="post"
      class="grid w-full max-w-xl grid-cols-1 gap-6"
    >
      <div
        v-if="$prismic.isFilled.richText(settings?.data.newsletterDescription)"
        class="text-center font-serif tracking-tight text-slate-500"
      >
        <PrismicRichText
          :field="settings?.data.newsletterDescription"
          :components="components"
        />
      </div>
      <div class="grid grid-cols-1 gap-2">
        <div class="relative">
          <label>
            <span class="sr-only">Email address</span>
            <input
              name="email"
              type="email"
              placeholder="jane.doe@example.com"
              required="true"
              class="w-full rounded-none border-b border-slate-200 py-3 pl-3 pr-10 text-slate-800 placeholder-slate-400"
            >
          </label>
          <button
            type="submit"
            class="absolute top-0 right-0 bottom-0 flex items-center justify-center px-3 text-2xl text-slate-400"
          >
            <span class="sr-only">Submit</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
        <p
          v-if="$prismic.isFilled.richText(settings?.data.newsletterDisclaimer)"
          class="text-center text-xs tracking-tight text-slate-500"
        >
          <PrismicText :field="settings?.data.newsletterDisclaimer" />
        </p>
      </div>
    </form>
  </div>
</template>
