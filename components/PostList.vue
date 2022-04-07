<template>
  <ul class="grid gap-10 md:gap-12">
    <li v-for="post in posts" :key="post.id">
      <Post :post="post" />
    </li>
  </ul>
</template>

<script>
export default {
  props: ["posts"],
};
</script>
