<template>
    <section>
        <!-- Slice section template -->
        <section v-for="(slice, index) in slices" :key="'slice-' + index">
            <!-- Text slice template -->
            <template v-if="slice.slice_type === 'text'">
                <!-- Here :slice="slice" passes the data to the component -->
                <text-slice :slice="slice"></text-slice>
            </template>
            <!-- Quote slice template -->
            <template v-else-if="slice.slice_type === 'quote'">
                <quote-slice :slice="slice"></quote-slice>
            </template>
            <!-- Image with caption slice template -->
            <template v-else-if="slice.slice_type === 'image_with_caption'">
                <image-caption-slice :slice="slice"></image-caption-slice>
            </template>
        </section>
    </section>
</template>

<script>
// Imports for all slices
const QuoteSlice = () => import("../components/slices/QuoteSlice.vue");
const TextSlice = () => import("../components/slices/TextSlice.vue");
const ImageCaptionSlice = () => import("../components/slices/ImageCaptionSlice.vue");

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    QuoteSlice,
    TextSlice,
    ImageCaptionSlice
  },
}
</script>