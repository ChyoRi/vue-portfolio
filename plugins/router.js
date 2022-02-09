import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      meta: { transition: 'slide-x'},
      component: () => import('@/pages/Home')
    },
    {
      path: '/About',
      meta: { transition: 'slide-x-reverse'},
      component: () => import('@/pages/About')
    },
  ]
});