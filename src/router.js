import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

// DASHBOARD ROUTES

import { LandingContainer } from './views/Landing/LandingContainer'
import { LandingHome } from './views/Landing/LandingHome'

import { Login } from './views/Landing/Login'
import { Register } from './views/Landing/Register'

import { Container } from './views/Container'
import { Home } from './views/Home'
import { Games } from './views/Games'
import { Withdraw } from './views/Withdraw'
import { Settings } from './views/Settings'


Vue.use(Router)
Vue.use(axios)


export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    { path: '*', redirect: '/'},
    {
      path: '/',
      name: 'LandingContainer',
      component: LandingContainer,
      children: [
        { name: 'LandingHome', path: '/index', component: LandingHome },
        { name: 'Login', path: '/login', component: Login },
        { name: 'Register', path: '/register', component: Register },
      ]
    },
    {
      path: '/app',
      name: 'Container',
      redirect: '/app/home',
      component: Container,
      // meta: { auth: true },
      children: [
        { name: 'Home', path: '/app/home', component: Home },
        { name: 'Games', path: '/app/games', component: Games },
        { name: 'Convert', path: '/app/convert', component: Withdraw },
        { name: 'Settings', path: '/app/settings', component: Settings },
      ]
    },

    
  ]
})
