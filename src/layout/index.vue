<template>
	<div class="layout">
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
	import RiseBackground from "@/components/background/riseBackground";
	import ResponseNavigation from "@/components/navigation/responseNavigation";

	export default {
		name: "layout",
		components: {ResponseNavigation, RiseBackground},
		mounted() {
			const header = document.querySelector("header.responsive-nav");
			const options = {};

			const headerObserver = new IntersectionObserver((entries) => {
				console.log(entries);
			}, options);

			headerObserver.observe(header);
		}
	}
</script>

<style scoped>

</style>
