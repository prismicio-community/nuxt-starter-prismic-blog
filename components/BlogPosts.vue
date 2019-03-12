<template>
  <nuxt-link :to="link">
    <div class="blog-post">
      <prismic-rich-text :field="post.data.title"/>
      <p class="blog-post-meta"><span class="created-at">{{ post.data.date }}</span></p>
      <p>{{getFirstParagraph(post)}}</p>
    </div>
  </nuxt-link>
</template>

<script>
import PrismicDom from "prismic-dom"
import LinkResolver from "~/plugins/link-resolver.js"

export default {
  props: ['post'],
  data: function() {
    return {
      link: ''
    }
  },
  name: 'blog-posts',
  methods: {
    //Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph (post) {
      const textLimit = 300;
      const slices = post.data.body;
      let firstParagraph = '';
      let haveFirstParagraph = false;

      slices.map(function(slice) {
        if (!haveFirstParagraph) {
          if (slice.slice_type == "text") {
            slice.primary.text.forEach(function(block){
              if (block.type == "paragraph") {
                if (!haveFirstParagraph) {
                  firstParagraph += block.text;
                  haveFirstParagraph = true;
                }
              }
            });
          }
        }
      });
      
      const limitedText = firstParagraph.substr(0, textLimit)

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...';
      }
      else {
        return firstParagraph;
      }
    },
  },
  created () {
    this.link = LinkResolver(this.post)
  },
}
</script>

<style lang="sass" scoped>
.blog-post
  color: #353535
  &:hover
    color: #9A9A9A

h2
  margin: 0

.blog-post-meta
  font-family: 'Lato', sans-serif
  margin-bottom: 8px

@media (max-width: 767px)
  h1
    font-size: 36px
    line-height: 45px
  h2
    font-size: 28px
  h3
    font-size: 18px
  .blog-post-meta
    font-size: 16px

@media screen and (min-width: 768px)
  .blog-post-meta
    font-size: 16px
</style>
