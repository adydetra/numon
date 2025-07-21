<script setup lang="ts">
defineProps ({
  title: {
    type: String,
  },
  to: {
    type: String,
  },
  target: {
    type: String,
  },
});
</script>

<template>
  <NuxtLink
    :to="to" :target="target " :title="title"
    border="b gray-200 b-solid dark:gray-800 hover:gray-400 dark:hover:gray-600"
    pb-0.5 text-gray-400 no-underline
  >
    {{ title }}
  </NuxtLink>
</template>
