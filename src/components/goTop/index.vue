<template>
	<div class="go-top" @click="goTop">
		<svg class="icon" aria-hidden="true">
			<use xlink:href="#arrowup"></use>
		</svg>
	</div>
</template>

<script>
	export default {
		name: "goTop",
		methods: {
			goTop() {
				console.log(1);
				const appMain = document.querySelector('.app-main');
				appMain.scrollTo(0, 0);
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
