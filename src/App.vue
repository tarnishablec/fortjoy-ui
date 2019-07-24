<template>
	<div id="app">
		<rise-background/>
		<response-navigation/>
		<router-view style="padding-top: var(--nav-height)"/>
	</div>
</template>

<script>

	import riseBackground from "@/components/background/riseBackground";
	import ResponseNavigation from "@/components/navigation/responseNavigation";

	export default {
		components: {ResponseNavigation, riseBackground}
	}
</script>

<style lang="scss">


</style>

