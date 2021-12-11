<template>
	<div id="app">
		<Navbar></Navbar>
		<HelloWorld msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>
	import HelloWorld from './components/PageHome.vue'
	import Navbar from './components/Navbar'

	export default {
		name: 'App',
		components: {
			Navbar,
			HelloWorld
		}
	}
</script>

<style>
	body {
		margin:0;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
