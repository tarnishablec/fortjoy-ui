<template>
	<div class="layout">
		<rise-background/>
		<response-navigation/>
		<app-main/>
	</div>
</template>

<script>
	import RiseBackground from "@/components/background/riseBackground";
	import ResponseNavigation from "@/components/navigation/responseNavigation";
	import AppMain from "@/layout/appMain";

	export default {
		name: "layout",
		components: {AppMain, ResponseNavigation, RiseBackground},
		mounted() {
			const header = document.querySelector("header.responsive-nav");
			const sd = document.querySelector(".scroll-detector");
			const options = {};

			const headerObserver = new IntersectionObserver((entries) => {
				entries.forEach(e => {
					if (!e.isIntersecting){
						header.classList.add("inverse");
					}else {
						header.classList.remove("inverse");
					}
				})
			}, options);

			headerObserver.observe(sd);
		}
	}
</script>

<style scoped>

</style>
