<template>
  <div class="px-4">
    <form
      action="/api/sign-up"
      method="post"
      class="grid w-full max-w-xl grid-cols-1 gap-6"
    >
      <PrismicRichText
        v-if="$prismic.asText(settings.data.newsletterDescription)"
        :field="settings.data.newsletterDescription"
        :html-serializer="htmlSerializer"
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
        <PrismicText
          v-if="$prismic.asText(settings.data.newsletterDisclaimer)"
          class="text-center text-xs tracking-tight text-slate-500"
          :field="settings.data.newsletterDisclaimer"
          wrapper="p"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true
    }
  },
  methods: {
    htmlSerializer (type, element, content, children) {
      switch (type) {
        case 'heading1':
          return /* html */ `<h2 class="mb-4 last:mb-0 text-3xl md:text-4xl font-sans font-semibold tracking-tighter text-slate-800">${children.join('')}</h2>`

        case 'paragraph':
          return /* html */ `<p class="mb-4 italic last:mb-0">${children.join('')}</p>`

        default:
          return this.$prismic?.htmlSerializer(type, element, content, children) ?? null
      }
    }
  }
}
</script>
