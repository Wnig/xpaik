// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import $ from 'jquery' 
import axios from 'axios'

import VueAxios from 'vue-axios'

import qs from 'qs'
 

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import 'vue2-animate/dist/vue2-animate.min.css'

import Home from './components/Home'
import Solution from './components/Solution'
import Cooperation from './components/Cooperation'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

//配置路由
const router = new VueRouter({
	routes: [
		{path: "/", component: Home,},
		{path: "/Solution", component: Solution,},
		{path: "/Cooperation", component: Cooperation,},
	],
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
