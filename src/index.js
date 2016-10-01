// src/index.js

import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
// import SecretQuote from './components/SecretQuote.vue'
// import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

import auth from './auth'


Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

// Check the user's auth status when the app starts
auth.checkAuth()
export var router = new VueRouter({
  model: 'history',
  scrollBehavior: () => ({ y: 0 }),
  // Set up routing and match routes to components
  routes: [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    // Redirect to the home route if any routes are unmatched
    { path: '*', redirect: '/home' }
  ]
})
// Start the app on the #app div
new Vue({
  router,
  render(createElement) {
    return createElement(App);
  }
}).$mount('#app');
