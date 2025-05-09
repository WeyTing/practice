<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
const route = useRoute()
onBeforeRouteLeave((to, from, next) => {
  //非同步適合處理等待api的操作
  const queston = confirm('確定要離開嗎?')
  if (!queston) {
    next(false)
  } else {
    next()
  }
})
//onBeforeRouteLeave(() => {
//  //同步 簡潔
//  const queston = confirm('確定要離開嗎?')
//  return queston
//})
</script>

<template>
  <main>
    <h1>{{ route.name }}</h1>
    <TheWelcome />
  </main>
</template>
