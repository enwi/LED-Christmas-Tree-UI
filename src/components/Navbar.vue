<template>
	<div class="navbar">
		<div class="actions">
			<h1>GIT</h1>
		</div>
		<div class="title">
			<h1>LED Christmas tree</h1>
		</div>
		<div class="actions">
			<h1>SET</h1>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Navbar"
	}
</script>

<style scoped>
	.navbar {
		width: 100%;
		height: 38px;
		display: flex;
		flex-direction: row;
		padding: 6px 0;

		color: #F5F5F5;
		background-color: #388E3C;
		box-shadow: 0 0 5px silver;
	}
	.navbar h1 {
		margin: 0;
		font-size: 1.5em;
	}

	.navbar sub {
		margin: 0;
		font-size: 0.8em;
	}
	.navbar > div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.actions {
		background: green;
		flex-grow: 2;
	}
	.title {
		flex-grow: 8;
	}
</style>