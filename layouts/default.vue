<template>
  <div class="antialiased">
    <div class="px-6 pt-12 pb-10 text-neutral-700 antialiased md:pt-20">
      <div class="mx-auto w-full max-w-3xl">
        <main>
          <nuxt />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Prismic + Nuxt blog example",
    };
  },
};
</script>
