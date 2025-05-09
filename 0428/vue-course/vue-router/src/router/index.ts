import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/myname',
      name: 'myname',
      component: () => import('../views/self.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/testPage.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/user/:id', //巢狀結構
      name: 'user',
      component: () => import('../views/User.vue'),
      children: [
        {
          path: 'profile',
          name: 'profile',
          component: () => import('../views/UserProfile.vue'),
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('../views/UserSetiing.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  console.log('to', to) //to是要跳轉的路徑
  console.log('from', from) //from是從哪個路徑來的
  next() //放行 //next(false) //不放行 //next('/login')
})

export default router
