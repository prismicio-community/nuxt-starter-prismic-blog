<template>
  <Bounded>
    <form
      action="/api/contact"
      method="post"
      class="grid grid-cols-1 gap-6"
    >
      <InputField label="Name" name="name" placeholder="Jane Doe" />
      <InputField
        label="Email Address"
        name="email"
        type="email"
        placeholder="jane.doe@example.com"
      />
      <TextareaField
        label="Message"
        name="message"
        placeholder="Write your message here…"
      />
      <button
        type="submit"
        class="ml-auto inline-flex items-center gap-2"
      >
        Send message <span aria-hidden="true" class="text-xl">
          &rarr;
        </span>
      </button>
    </form>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
}
</script>
