import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'hash',   hash is default
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('../components/Vuemain'),
      children: [
        {
          name: 'AllReviews',
          path: 'allreviews',
          component: () => import('../components/AllReviews')
        },
        {
          name: 'Reviews',
          path: 'reviews',
          component: () => import('../components/Reviews')
        }

      ]
    }
  ]
})
