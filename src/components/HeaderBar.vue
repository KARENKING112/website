<template>
  <div
    class="
      flex flex-col
      items-center
      py-12
      bg-gray-900
      border-b border-gray-700
      text-center
      px-4
      shadow-md
    "
  >
    <router-link to="/" class="space-y-6 flex flex-col items-center">
      <img
        src="../assets/images/asineth.png"
        class="w-24 h-24 rounded-full shadow-2xl"
      />
      <p class="font-bold text-4xl mt-6">Asineth</p>
    </router-link>
    <p class="text-gray-300 mt-3">
      Developer &amp; tinkerer. Building things at
      <a href="https://atriplex.co">Atriplex</a>.
    </p>
    <div class="flex space-x-8 mt-6">
      <a
        href="https://github.com/asineth0"
        target="_blank"
        rel="noreferrer noopener"
        class="text-gray-400"
      >
        <i class="fab fa-github fa-lg hover:text-gray-200 transition"></i>
      </a>
      <a
        href="https://reddit.com/u/asineth0"
        target="_blank"
        rel="noreferrer noopener"
        class="text-gray-400"
      >
        <i class="fab fa-reddit fa-lg hover:text-gray-200 transition"></i>
      </a>
      <a
        href="https://t.me/asineth0"
        target="_blank"
        rel="noreferrer noopener"
        class="text-gray-400"
      >
        <i class="fab fa-telegram fa-lg hover:text-gray-200 transition"></i>
      </a>
      <a
        href="https://twitter.com/asineth0"
        target="_blank"
        rel="noreferrer noopener"
        class="text-gray-400"
      >
        <i class="fab fa-twitter fa-lg hover:text-gray-200 transition"></i>
      </a>
      <a
        href="mailto:asineth@pm.me"
        target="_blank"
        rel="noreferrer noopener"
        class="text-gray-400"
      >
        <i class="fas fa-envelope fa-lg hover:text-gray-200 transition"></i>
      </a>
    </div>
  </div>
</template>
