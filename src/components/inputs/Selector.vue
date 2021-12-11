<template>
	<select :disabled="disabled">
		<option v-for="choice in choices" :key="choice.value" :value="choice.value">{{ choice.name }}</option>
	</select>
</template>

<script>
	export default {
		name: "Selector",
		props: {
			disabled: {type:Boolean, default: false},
			choices: {type:Array, required: true}
		}
	}
</script>

<style scoped>
	select:disabled {
		opacity: 0.25;
	}
	select {
		padding: 8px;
		font-size: 0.9rem;
		box-sizing:border-box;
		width: 100%;
		border: 1px solid gray;
		border-radius: 5px;
		-webkit-appearance: none;
	}
	select {
		-webkit-appearance: menulist;
	}
</style>