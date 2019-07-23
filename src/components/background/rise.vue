<template>
	<div class="box-area">
		<div v-for="i in amount" class="rotate-box" :key="i" :style="style(i)"></div>
	</div>
</template>

<script>
	import _ from 'lodash'

	export default {
		name: "rise",
		props: {
			amount: {
				type: Number,
				default: 6
			},
		},
		computed: {
			style() {
				return () => {
					let len = `${_.random(40, 110)}px`;
					return {
						left: `${_.random(10, 90)}%`,
						width: len,
						height: len,
						'animation-delay': `${_.random(1, 15, true)}s`,
						'animation-duration': `${_.random(7, 23, true)}s`,
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@keyframes rotate {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 1;
		}
		100% {
			transform: translateY(-50vh) rotate(360deg);
			opacity: 0;
		}
	}

	.box-area {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
		pointer-events: none;

		.rotate-box {
			position: absolute;
			display: block;
			list-style: none;
			width: 2rem;
			height: 2rem;
			bottom: -130px;
			background: rgba(255, 255, 255, 0.2);
			animation: rotate 20s linear infinite;
		}
	}
</style>
