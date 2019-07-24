<template>
	<div id="app">
		<rise-background/>
		<response-navigation/>
		<div class="app-main">
			<transition name="fade-transform" mode="out-in">
				<router-view/>
			</transition>
		</div>
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

