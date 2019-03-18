import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from "./link-resolver"
import htmlSerializer from './html-serializer'

Vue.use(PrismicVue, {
  linkResolver,
  htmlSerializer
})