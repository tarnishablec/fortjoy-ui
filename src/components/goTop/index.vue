<template>
	<div class="go-top" @click="goTop">
		<i class="fas fa-arrow-up"></i>
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
