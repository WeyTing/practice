<script setup>
import { useRoute, useRouter, RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '../stores/auth'
const authStore = useAuthStore()
const router = useRouter()
console.log(router)
const handlelogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<template>
  <h2>User</h2>
  <button @click="handlelogout">登出</button>
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
