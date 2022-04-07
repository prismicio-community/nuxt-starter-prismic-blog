export default {
  buildModules: ["@nuxt/postcss8"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  css: ["@/styles/global.css"],
};
