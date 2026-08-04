<script setup lang="ts">
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
  priority: {
    type: Boolean,
    default: false,
  },
});

const pokemonName = computed(() => (props.pokemon.name));
</script>

<template>
  <div v-memo="[pokemon.id]" flex flex-col items-center space-y-4 md:space-y-10>
    <NuxtImg
      :src="pokemon.image"
      :alt="pokemonName"
      :loading="priority ? 'eager' : 'lazy'"
      :preload="priority ? { fetchPriority: 'high' } : false"
      size-12 md:size-34
    />
    <h2 text-xs md:text-lg>
      {{ pokemonName }}
    </h2>
  </div>
</template>
