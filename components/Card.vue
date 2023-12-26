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
  <UCard>
    <template #header>
      <NuxtImg
        :src="pokemon.image"
        :alt="pokemonName"
        class="size-24"
      />
    </template>
    <template #footer>
      <h2 class="text-lg">
        {{ pokemonName }}
      </h2>
    </template>
  </UCard>
</template>
