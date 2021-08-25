<template>
  <div>
    <p class="text-4xl font-bold">Posts</p>
    <div class="mt-8 space-y-4">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup>
import Post from "../components/Post.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const posts = router
  .getRoutes()
  .filter((r) => r.path.startsWith("/posts"))
  .sort((a, b) =>
    a.props.default.data.date > b.props.default.data.date ? -1 : 1
  );
</script>
