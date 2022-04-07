<template>
  <section class="py-5 font-serif leading-relaxed md:text-lg">
    <PrismicRichText
      :field="slice.primary.text"
      :html-serializer="htmlSerializer"
    />
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "TextSlice",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  methods: {
    htmlSerializer(type, _element, _content, children) {
      switch (type) {
        case "heading2": {
          return `<h2 class="mb-7 font-sans text-2xl font-bold last:mb-0 md:text-3xl md:leading-snug">${children}</h2>`;
        }

        case "paragraph": {
          return `<p class="mb-7 last:mb-0">${children}</p>`;
        }

        case "oList": {
          return `<ol class="mb-7 pl-4 last:mb-0 md:pl-6">${children}</ol>`;
        }

        case "oListItem": {
          return `<li class="mb-4 list-decimal pl-1 last:mb-0 md:pl-2">${children}</li>`;
        }

        case "list": {
          return `<ul class="mb-7 pl-4 last:mb-0 md:pl-6">${children}</ul>`;
        }

        case "listItem": {
          return `<li class="mb-4 list-disc pl-1 last:mb-0 md:pl-2">${children}</li>`;
        }

        case "strong": {
          return `<strong class="font-bold">${children}</strong>`;
        }
      }
    },
  },
};
</script>
