<template>
  <header
    class="grid justify-items-center gap-4 border-b border-neutral-200 pb-12"
  >
    <PrismicImage
      :field="image"
      class="block h-36 w-36 rounded-full object-cover"
    />
    <h1 class="text-center text-4xl font-black md:text-5xl">
      <PrismicText :field="headline" />
    </h1>
    <p class="text-center text-lg text-neutral-400">
      <PrismicText :field="description" />
    </p>
  </header>
</template>

<script>
export default {
  props: ["image", "headline", "description"],
};
</script>
