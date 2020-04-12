import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Marketplace from '@/components/Marketplace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/marketplace',
      name: 'marketplace',
      component: Marketplace
      /*
      async beforeEnter (to, from, next) {
        try {
          var hasPermission = this.$store.state.isUserLoggedIn
          if (hasPermission) {
            next()
          }
        } catch (e) {
          next({
            name: 'home'
          })
        }
      }
      */
    }
  ]
})
