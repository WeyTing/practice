<script setup>
import { useRoute, RouterLink, RouterView } from 'vue-router'
const route = useRoute()
console.log(route)
</script>

<template>
  <h2>User</h2>
  <div>
    <nav>
      <RouterLink to="/user/123456/profile">PROFILE</RouterLink>
      <RouterLink to="/user/123456/settings">SETTINGS</RouterLink>
    </nav>
    <RouterView />
  </div>
  <!--巢狀路由結構-->
</template>

<style scoped>
div {
  display: flex;
}

nav {
  display: flex;
  flex-direction: column;
  max-width: 80px;
}
</style>
