<script setup lang="ts">
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

const pokemonName = computed(() => (props.pokemon.name));
</script>

<template>
  <div flex flex-col items-center space-y-4 md:space-y-10>
    <NuxtImg
      :src="pokemon.image"
      :alt="pokemonName"
      size-12 md:size-34
    />
    <h2 text-xs md:text-lg>
      {{ pokemonName }}
    </h2>
  </div>
</template>
