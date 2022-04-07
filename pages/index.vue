<template>
  <div>
    <HomeHeader
      :image="blogHome.data.image"
      :headline="blogHome.data.headline"
      :description="blogHome.data.description"
    />
    <div class="py-12 md:py-16">
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic }) {
    const blogHome = await $prismic.api.getSingle("blog-home");
    const posts =
      (await $prismic.api.query(
        $prismic.predicates.at("document.type", "post"),
        { orderings: "[my.post.date desc]" }
      )) || {};

    return {
      blogHome,
      posts: posts.results || [],
    };
  },
};
</script>
