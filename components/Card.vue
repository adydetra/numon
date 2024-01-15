<script lang="ts" setup>
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

const pokemonName = computed(() => (props.pokemon.name));
</script>

<template>
  <div flex flex-col items-center space-y-10>
    <NuxtImg
      :src="pokemon.image"
      :alt="pokemonName"
      size-34
    />
    <h2 text-lg>
      {{ pokemonName }}
    </h2>
  </div>
</template>
