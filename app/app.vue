<script setup lang="ts">
import { usePokemons } from '~/composables/usePokemons';

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

const { pending, pokemons, searchTerm, sortBy } = usePokemons();

defineOgImageComponent('OpenGraph');
</script>

<template>
  <main mx-auto max-w-7xl place-content-center bg-white h-dvh class="dark:bg-[#1c1b22]">
    <div class="flexcenter flex-col gap-4 px-4 py-8 sm:flex-row">
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Search Pokemon..."
        class="w-full border-0 rounded-md bg-gray-100 px-4 py-2 sm:w-auto dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      <select
        v-model="sortBy"
        class="w-full cursor-pointer appearance-none border-0 rounded-md bg-[right_0.5rem_center] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-gray-100 bg-no-repeat px-4 py-2 pr-8 sm:w-auto dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        style="background-position: right 0.5rem center;"
      >
        <option value="name">
          Sort by Name
        </option>
        <option value="date">
          Sort by Date (ID)
        </option>
      </select>
    </div>
    <div v-if="pending" grid grid-cols-3 justify-center gap-12 px-4 py-6>
      <SkeletonCard v-for="item in Array(9)" :key="`skeleton-${item}`" />
    </div>
    <div v-else grid grid-cols-3 justify-center gap-12 px-4 py-6>
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
  @apply min-h-dvh scroll-smooth m-0 p-0 dark:bg-[#1c1b22];
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
