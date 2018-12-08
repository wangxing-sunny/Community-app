import Vue from 'vue'
import Router from 'vue-router'
import Community from '@/components/community'
import Estate from '@/components/estate'
import Care from '@/components/care'
import Shopping from '@/components/shopping'
import Security from '@/components/security'
import Personal from '@/components/personal'
import MainPage from '@/pages/main'
import ArticlePage from '@/pages/article'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: MainPage,
    children: [
      {
        path: '',
        redirect: 'community',
        // component: Community
      },
      {
        path: 'community',
        component: Community,
        meta: {
          index: 1
        }
      },
      {
        path: 'estate',
        component: Estate,
        meta: {
          index: 2
        }
      },
      {
        path: 'care',
        component: Care,
        meta: {
          index: 3
        }
      },
      {
        path: 'shopping',
        component: Shopping,
        meta: {
          index: 4
        }
      },
      {
        path: 'security',
        component: Security,
        meta: {
          index: 5
        }
      },
      {
        path: 'personal',
        component: Personal,
        meta: {
          index: 6
        }
      }
    ]
  },
  {
    path: '/article',
    component: ArticlePage
  }
]

const router = new Router({
  routes,
  /* scrollBehavior (to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  } */
})

export default router
