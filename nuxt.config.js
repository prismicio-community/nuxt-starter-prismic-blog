import sm from "./sm.json";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Prismic + Nuxt blog example",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Prismic + Nuxt blog example",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "@nuxtjs/prismic"],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: ["@prismicio/vue"],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/styles/global.css",
    "@fontsource/lato/400.css",
    "@fontsource/lato/700.css",
    "@fontsource/lato/900.css",
    "@fontsource/libre-baskerville/400.css",
    "@fontsource/libre-baskerville/700.css",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  prismic: {
    endpoint: sm.apiEndpoint,
    modern: true,
    apiOptions: {
      routes: [
        {
          type: "blog-home",
          path: "/",
        },
        {
          type: "post",
          path: "/blog/:uid",
        },
      ],
    },
  },
};
