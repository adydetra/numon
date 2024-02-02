<script setup lang="ts">
useHead({
  title: 'Numon',
  meta: [
    {
      name: 'msapplication-TileColor',
      content: '#da532c',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
});

useSeoMeta({
  description: 'Designed as a practical environment for experimenting with the Pokemon API using the powerful Nuxt. Created by Adityawarman Dewa Putra.',
  twitterCard: 'summary_large_image',
});

const { pending, data: pokemons } = await useLazyFetch('/api/pokemons', {
  server: false,
});
</script>

<template>
  <main mx-auto max-w-7xl place-content-center bg-white h-dvh class="dark:bg-[#1c1b22]">
    <div v-if="pending" grid grid-cols-3 justify-center gap-12 px-4 py-12>
      <SkeletonCard v-for="item in Array(9)" :key="`skeleton-${item}`" />
    </div>
    <div v-else grid grid-cols-3 justify-center gap-12 px-4 py-12>
      <LazyAppCard
        v-for="(pokemon, index) in pokemons"
        :key="`pokemon-${index}`"
        :pokemon="pokemon"
      />
    </div>
    <LazyAppFooter />
  </main>
</template>

<style lang="postcss">
* {
  @apply font-sans;
}
:root {
  scrollbar-width: thin;
  scrollbar-color: #d4d4d4 #ffffff;
}
html,
body {
  @apply min-h-dvh scroll-smooth m-0 p-0;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #d4d4d4;
}
::-webkit-scrollbar-thumb:active {
  background-color: #ffffff;
}
html.dark ::-webkit-scrollbar-thumb {
  background-color: #1b1b1b;
}
html.dark ::-webkit-scrollbar-thumb:active {
  background-color: rgb(41, 41, 41);
}
html.dark ::-webkit-scrollbar {
  background-color: #050505;
}
.dark {
  color-scheme: dark;
}
</style>
