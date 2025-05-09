import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token')) //取得目前的token
  const isAuth = computed(() => {
    //判斷是否有token
    return token.value
  })
  const login = (newtoken) => {
    //寫入新的token
    token.value = newtoken
    localStorage.setItem('token', newtoken)
  }
  const logout = () => {
    //清除token
    token.value = null
    localStorage.removeItem('token')
  }
  return { token, isAuth, login, logout }
})
