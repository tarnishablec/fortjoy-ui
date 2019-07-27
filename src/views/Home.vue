<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
		<div v-for="i in 40" :key="i">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate delectus eaque itaque libero quisquam unde
			veritatis. Aperiam commodi dicta dolore magni minima necessitatibus, nesciunt sint vero. Aliquam, quis veritatis.
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'

	export default {
		name: 'home',
		components: {
			HelloWorld
		}
	}
</script>
