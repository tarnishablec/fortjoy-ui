<template>
	<div class="app-main">
		<div class="scroll-detector"></div>
		<transition name="fade-transform" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "appMain"
	}
</script>

<style scoped>

</style>
