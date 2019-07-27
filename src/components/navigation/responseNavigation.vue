<template functional>
	<header class="responsive-nav">
		<h3 class="logo font-indie-flower">
			<router-link to="/">fortjoy</router-link>
		</h3>
		<input type="checkbox" id="nav-toggle">
		<nav>
			<ul>
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link to="/about">About</router-link>
				</li>
				<li><a href="#">Blog</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</nav>
		<label for="nav-toggle" class="nav-toggle-label">
			<span>|||</span>
		</label>
	</header>
</template>

<script>
	export default {
		name: "responseNavigation"
	}
</script>

<style scoped>

</style>
