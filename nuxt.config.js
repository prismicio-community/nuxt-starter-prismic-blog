import sm from './sm.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Prismic + Nuxt blog example',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Prismic + Nuxt blog example'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/postcss8', '@nuxtjs/prismic'],

  generate: {
    exclude: ['/slice-simulator']
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    },
    transpile: ['@prismicio/vue']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/styles/global.css',
    '@fontsource/inter/400.css',
    '@fontsource/inter/600.css',
    '@fontsource/libre-baskerville/400.css',
    '@fontsource/libre-baskerville/400-italic.css',
    '@fontsource/libre-baskerville/700.css'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  publicRuntimeConfig: {
    development: process.env.NODE_ENV === 'development'
  },

  prismic: {
    endpoint: sm.apiEndpoint,
    modern: true,
    apiOptions: {
      routes: [
        {
          type: 'page',
          path: '/:uid'
        },
        {
          type: 'article',
          path: '/articles/:uid'
        }
      ]
    },
    htmlSerializer(type, element, content, children) {
      switch (type) {
        case 'heading1':
          return /* html */ `<h2 class="font-sans font-semibold tracking-tighter text-slate-800 text-3xl mb-7 mt-12 first:mt-0 last:mb-0">${children.join(
            ''
          )}</h2>`

        case 'heading2':
          return /* html */ `<h3 class="font-sans font-semibold tracking-tighter text-slate-800 text-2xl mb-7 last:mb-0">${children.join(
            ''
          )}</h3>`

        case 'heading3':
          return /* html */ `<h4 class="font-sans font-semibold tracking-tighter text-slate-800 text-xl mb-7 last:mb-0">${children.join(
            ''
          )}</h4>`

        case 'paragraph':
          return /* html */ `<p class="mb-7 last:mb-0">${children.join('')}</p>`

        case 'group-o-list-item':
          return /* html */ `<ol class="mb-7 pl-4 last:mb-0 md:pl-6">${children.join(
            ''
          )}</ol>`

        case 'o-list-item':
          return /* html */ `<li class="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">${children.join(
            ''
          )}</li>`

        case 'group-list-item':
          return /* html */ `<ul class="mb-7 pl-4 last:mb-0 md:pl-6">${children.join(
            ''
          )}</ul>`

        case 'list-item':
          return /* html */ `<li class="mb-1 list-disc pl-1 last:mb-0 md:pl-2">${children.join(
            ''
          )}</li>`

        case 'preformatted':
          return /* html */ `<pre class="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
  <code>${children.join('')}</code>
</pre>`

        case 'strong':
          return /* html */ `<strong class="font-semibold">${children.join(
            ''
          )}</strong>`

        case 'hyperlink':
          return /* html */ `<a href="${
            element.data.url
          }" class="underline decoration-1 underline-offset-2">${children.join(
            ''
          )}</a>`

        default:
          return null
      }
    }
  }
}
