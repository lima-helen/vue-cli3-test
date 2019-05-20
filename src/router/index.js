import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Login from "../views/login.vue";

let routes=[
	{
		path:'/login',
		name:'login',
		component:Login
	}
]
const router = new Router({
	routes: routes
})
export default router
