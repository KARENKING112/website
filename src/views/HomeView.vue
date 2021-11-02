<template>
  <div class="divide-y divide-gray-600">
    <PostView :data="whoami.data" :content="whoami.content" class="pb-4" />
    <div class="pt-8 space-y-8 w-full">
      <p class="text-4xl font-bold">Posts</p>
      <div class="space-y-4">
        <PostPreview v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import PostView from "./PostView.vue";
import PostPreview from "../components/PostPreview.vue";

const router = useRouter();

const posts = router
  .getRoutes()
  .filter((r) => /^\/posts.+/.test(r.path) && !r.props.default.data.hidden)
  .sort((a, b) =>
    a.props.default.data.date > b.props.default.data.date ? -1 : 1
  );

const whoami = router.getRoutes().find((p) => p.path === "/posts/whoami")
  .props.default;
</script>
