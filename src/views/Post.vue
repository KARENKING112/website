<template>
  <div class="prose prose-light max-w-none">
    <div class="flex items-baseline space-x-4">
      <h1>{{ data.title }}</h1>
      <p>{{ data.date.toLocaleDateString() }}</p>
    </div>
    <div class="-mt-8" v-html="content" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  data: {
    type: Object,
    default: {},
  },
  content: {
    type: String,
    default: {},
  },
});
</script>
