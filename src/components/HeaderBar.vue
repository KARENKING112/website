<template>
  <div class="border-b border-gray-700 shadow-md relative h-96">
    <img
      src="../assets/images/backdrop.png"
      class="w-full h-full object-cover"
    />
    <div
      class="
        flex flex-col
        items-center
        justify-center
        px-4
        py-12
        absolute
        inset-0
        bg-black bg-opacity-50
        backdrop-blur
        text-center
      "
    >
      <router-link to="/" class="space-y-4 flex flex-col items-center">
        <img
          src="../assets/images/asineth.png"
          class="w-24 h-24 rounded-full shadow-2xl"
        />
        <p class="font-bold text-4xl mt-6">Asineth</p>
      </router-link>
      <p class="text-gray-300 mt-2">
        Developer &amp; tinkerer. Building things at
        <a href="https://atriplex.co">Atriplex</a>.
      </p>
      <div class="flex space-x-4 mt-4">
        <a
          href="https://github.com/asineth0"
          target="_blank"
          rel="noreferrer noopener"
          class="
            text-gray-400
            hover:text-primary-400
            transition
            bg-black bg-opacity-25
            backdrop-blur
            p-2
            rounded-full
            border border-gray-800
            shadow-lg
          "
        >
          <i class="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://reddit.com/u/asineth0"
          target="_blank"
          rel="noreferrer noopener"
          class="
            text-gray-400
            hover:text-primary-400
            transition
            bg-black bg-opacity-25
            backdrop-blur
            p-2
            rounded-full
            border border-gray-800
            shadow-lg
          "
        >
          <i class="fab fa-reddit fa-lg"></i>
        </a>
        <a
          href="https://t.me/asineth0"
          target="_blank"
          rel="noreferrer noopener"
          class="
            text-gray-400
            hover:text-primary-400
            transition
            bg-black bg-opacity-25
            backdrop-blur
            p-2
            rounded-full
            border border-gray-800
            shadow-lg
          "
        >
          <i class="fab fa-telegram fa-lg"></i>
        </a>
        <a
          href="https://twitter.com/asineth0"
          target="_blank"
          rel="noreferrer noopener"
          class="
            text-gray-400
            hover:text-primary-400
            transition
            bg-black bg-opacity-25
            backdrop-blur
            p-2
            rounded-full
            border border-gray-800
            shadow-lg
          "
        >
          <i class="fab fa-twitter fa-lg"></i>
        </a>
        <a
          href="mailto:asineth@pm.me"
          target="_blank"
          rel="noreferrer noopener"
          class="
            text-gray-400
            hover:text-primary-400
            transition
            bg-black bg-opacity-25
            backdrop-blur
            p-2
            rounded-full
            border border-gray-800
            shadow-lg
          "
        >
          <i class="fas fa-envelope fa-lg"></i>
        </a>
      </div>
    </div>
  </div>
</template>
