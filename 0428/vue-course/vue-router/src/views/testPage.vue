<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route)
</script>

<template>
  <p>{{ route.name }}</p>
  <main>demoPage</main>
</template>
