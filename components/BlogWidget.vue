<template>
  <nuxt-link :to="link">
    <div class="blog-post">
      <h2>{{ $prismic.asText(post.data.title) }}</h2>
      <p class="blog-post-meta"><span class="created-at">{{ formattedDate }}</span></p>
      <p>{{getFirstParagraph(post)}}</p>
    </div>
  </nuxt-link>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js"

export default {
  props: ['post'],
  data: function() {
    return {
      link: '',
      formattedDate: '',
    }
  },
  name: 'blog-widget',
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph (post) {
      const textLimit = 300;
      const slices = post.data.body;
      let firstParagraph = '';
      let haveFirstParagraph = false;

      slices.map(function(slice) {
        if (!haveFirstParagraph && slice.slice_type == "text") {
          slice.primary.text.forEach(function(block){
            if (block.type == "paragraph" && !haveFirstParagraph) {
              firstParagraph += block.text;
              haveFirstParagraph = true;
            }
          });
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
    this.link = LinkResolver(this.post),
    this.formattedDate = Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(this.post.data.date))
  },
}
</script>

<style lang="sass" scoped>
.blog-post
  color: #353535

h2
  margin: 0
</style>