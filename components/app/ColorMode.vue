<script setup lang="ts">
const colorMode = useColorMode();

function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
}
</script>

<template>
  <button cursor-pointer rounded border-none p-2 transition ease-in-out aria-label="Color Mode" @click="toggleMode">
    <div i-pixelarticons:sun dark:i-pixelarticons:moon-stars text-lg md:text-2xl />
  </button>
</template>
