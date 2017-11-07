//import Vue from 'vue'
//import Router from 'vue-router'
import HelloWorld from '@/components/hell'

//Vue.use(Router)

//export default new Router({
//routes: [
//  {
//    path: '/',
//    name: 'Hello',
//    component: HelloWorld
//  }
//]
//})

import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: HelloWorld
    }]
}]