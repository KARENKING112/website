<template>
  <div class="flex flex-col min-h-screen">
    <HeaderBar />
    <div class="max-w-4xl w-full mx-auto py-16 px-4 sm:px-8 flex-1">
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="transition transform duration-75 ease-out"
          enter-from-class="opacity-0 translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition transform duration-75 ease-out"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </div>
    <FooterBar />
  </div>
</template>

<script setup>
import HeaderBar from "./components/HeaderBar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>

<style>
@import "./assets/fonts/inter-v2-latin.css";
@import "./assets/fonts/inconsolata-v20-latin.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-800 text-white;
}

::-webkit-scrollbar {
  @apply w-2;
}

::-webkit-scrollbar-thumb {
  @apply bg-white bg-opacity-5 rounded-full;
}

a {
  @apply text-primary-400 hover:text-primary-300 transition;
}
</style>
