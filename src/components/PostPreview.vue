<template>
  <router-link
    class="
      bg-gray-900
      border border-gray-700
      p-4
      rounded-md
      cursor-pointer
      text-gray-300
      hover:bg-black hover:text-white
      transition
      block
      shadow-lg
      hover:shadow-xl
    "
    :to="post.path"
  >
    <p class="font-bold text-2xl">{{ post.props.default.data.title }}</p>
    <p class="text-gray-400 mt-2">
      {{ post.props.default.data.date.toLocaleDateString() }}
    </p>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  post: {
    type: Object,
    default: null,
  },
});
</script>
