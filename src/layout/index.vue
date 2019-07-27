<template>
	<div class="layout">
		<rise-background/>
		<response-navigation/>
		<go-top/>
		<app-main/>
	</div>
</template>

<script>
	import RiseBackground from "@/components/background/riseBackground";
	import ResponseNavigation from "@/components/navigation/responseNavigation";
	import AppMain from "@/layout/appMain";
	import GoTop from "@/components/goTop/index";

	export default {
		name: "layout",
		components: {GoTop, AppMain, ResponseNavigation, RiseBackground},
		mounted() {
			const header = document.querySelector("header.responsive-nav");
			const sd = document.querySelector(".scroll-detector");
			const goTop = document.querySelector(".go-top");
			const sdObserver = new IntersectionObserver((entries) => {
				entries.forEach(e => {
					if (!e.isIntersecting) {
						header.classList.add("inverse");
						goTop.classList.add("show");
					} else {
						header.classList.remove("inverse");
						goTop.classList.remove("show");
					}
				})
			});
			sdObserver.observe(sd);
		}
	}
</script>

<style scoped>

</style>
