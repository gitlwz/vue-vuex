import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index'
//import store from './store/'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
//	store,
}).$mount('#app')