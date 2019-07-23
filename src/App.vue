<template>
	<div id="app">
		<rise/>
		<router-view/>
	</div>
</template>

<script>

	import Rise from "@/components/background/rise";
	export default {
		components: {Rise}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	body{
		margin: 0;
		padding: 0;
	}
</style>

