import Router from 'vue-router';

import Home from './components/PageHome'

export const router = new Router({
	mode: 'history',
	routes: [
		{ name:"Home",        path: '/home',     component: Home },

		// otherwise redirect to home
		{ path: '*', redirect: '/home' }
	]
});