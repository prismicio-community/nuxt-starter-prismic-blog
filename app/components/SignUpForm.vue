<script setup lang="ts">
import type { HTMLRichTextMapSerializer } from '@prismicio/client';

const settings = useSettings()

const prismic = usePrismic()

const serializer: HTMLRichTextMapSerializer = {
  ...prismic.options.richTextSerializer,
  heading1: ({ children }) =>
    /* html */ `<h2 class="mb-4 last:mb-0 text-3xl md:text-4xl font-sans font-semibold tracking-tighter text-slate-800">${children}</h2>`,
  paragraph: ({ children }) =>
    /* html */ `<p class="mb-4 italic last:mb-0">${children}</p>`
}
</script>

<template>
  <div class="px-4">
    <form
      action="/api/sign-up"
      method="post"
      class="grid w-full max-w-xl grid-cols-1 gap-6"
    >
      <PrismicRichText
        v-if="$prismic.isFilled.richText(settings?.data.newsletterDescription)"
        :field="settings?.data.newsletterDescription"
        :html-serializer="serializer"
        wrapper="div"
        class="text-center font-serif tracking-tight text-slate-500"
      />
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
