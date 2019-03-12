<template>
  <div class='post-part single container'>
    <blockquote class="block-quotation">
      {{ $prismic.richTextAsPlain(slice.primary.quote) }}
    </blockquote>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'quote-slice'
}
</script>

<style lang="sass" scoped>
.post-part
  &.single
    .image-full-width + .image-label
      width: 100%
    .block-quotation
      margin-bottom: 2rem
      display: inline-block
      font-style: italic
      font-size: 24px
      &:before
        content: "« "
      &:after
        content: " »"
    .block-citation
      display: inline-block
      font-style: italic
      border-left: solid #B4B4B4 4px
      padding-left: 10px
  li
    list-style-type: initial
    margin-left: 1em

@media screen and (min-width: 768px)
  .post-part.single .block-quotation, .blog-main.single .block-quotation
    width: 130%
    margin: 0 -15% 2rem -15%
    font-size: 30px
    padding: 0
  .post-part.single .block-citation, .blog-main.single .block-citation
    margin: 20px 0

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
</style>

