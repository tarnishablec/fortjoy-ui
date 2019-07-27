<template>
	<div class="layout">
		<rise-background/>
		<response-navigation/>
		<div class="app-main">
			<transition name="fade-transition">
				<router-view/>
			</transition>
		</div>
	</div>
</template>

<script>
	import RiseBackground from "@/components/background/riseBackground";
	import ResponseNavigation from "@/components/navigation/responseNavigation";
	export default {
		name: "layout",
		components: {ResponseNavigation, RiseBackground}
	}
</script>

<style scoped>

</style>
