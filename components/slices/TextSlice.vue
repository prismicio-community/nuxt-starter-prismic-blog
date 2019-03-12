<template>
  <div class='post-part single container'>
    <prismic-rich-text :field="slice.primary.text"/>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'text-slice'
}
</script>

<style lang="sass" scoped>
.post-part.single
  .image-full-width + .image-label
    width: 100%
  a
    text-decoration: none
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background-repeat: repeat-x
    background-size: 2px 2px
    background-position: 0 23px

.blog-main.single a
  text-decoration: none
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
  background-repeat: repeat-x
  background-size: 2px 2px
  background-position: 0 23px

.post-part
  li
    list-style-type: initial
    margin-left: 1em
  &.single img
    width: 100%
    height: auto

@media (max-width: 767px)
  .post-part, .blog-main
    font-size: 18px
  .post-part pre
    font-size: 14px
  h1
    font-size: 36px
    line-height: 45px
  h2
    font-size: 28px
  h3
    font-size: 18px

/* vh vw fallback for ios7
@media all and (device-width: 768px) and (device-height: 1024px) and (orientation: portrait)
  .main .post-part.single .image-full-width
    width: 768px

@media all and (device-width: 768px) and (device-height: 1024px) and (orientation: landscape)
  .main .post-part.single .image-full-width
    width: 768px

@media screen and (device-aspect-ratio: 40 / 71)
  .main .post-part.single .image-full-width
    width: 530px
</style>

