import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('../components/IndexComp'),
      children: [
        {
          name: 'AllReviews',
          path: 'components',
          component: () => import('../components/AllReviews')
        },
        {
          name: 'Reviews',
          path: 'components',
          component: () => import('../components/Reviews')
        }

      ]
    }
  ]
})
