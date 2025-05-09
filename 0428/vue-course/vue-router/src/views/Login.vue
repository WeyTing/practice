<template>
  <h2>登入頁面</h2>
  <form @submit.prevent="handlelogin" class="login">
    <input type="text" placeholder="請輸入帳號" v-model="username" />
    <input type="password" placeholder="請輸入密碼" v-model="password" />
    <button>登入</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
const router = useRouter()

const authStore = useAuthStore()
function handlelogin() {
  console.log(username.value, password.value)
  if (username.value === 'admin' && password.value === '123456') {
    authStore.login('weyting') // 用戶登入
    router.push('/User/weyting') // /User/:id 預計樣式
  } else {
    alert('帳號密碼錯誤')
  }
}

const username = ref('')
const password = ref('')
</script>
