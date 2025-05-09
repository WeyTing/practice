<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <main>
    <h1>{{ route.name }}</h1>
    <TheWelcome />
  </main>
</template>
