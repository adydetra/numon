<script lang="ts" setup>
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

const { pending, data: pokemons } = await useLazyFetch('/api/pokemons', {
  server: false,
});
</script>

<template>
  <UContainer class="mx-auto place-content-center max-w-fit py-12">
    <div v-if="pending" class="flex flex-col items-start gap-y-4">
      <SkeletonCard v-for="item in Array(9)" :key="`skeleton-${item}`" />
    </div>
    <div v-else class="grid grid-cols-3 justify-center gap-12">
      <TransitionGroup name="list">
        <LazyCard
          v-for="(pokemon, index) in pokemons"
          :key="`pokemon-${index}`"
          :pokemon="pokemon"
        />
      </TransitionGroup>
    </div>
  </UContainer>
</template>

<style lang="postcss">
.list-enter-active,
.list-leave-active {
  transition: all 0.25s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
