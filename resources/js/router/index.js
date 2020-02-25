import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Dashboard from '../components/dashboard/Container'
import Contact from '../components/contact/Container'
import Users from '../components/users/Container'

const routes = [
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard
  },
  {
    name: 'users',
    path: '/users',
    component: Users
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});
