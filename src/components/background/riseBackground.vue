<template>
	<div class="box-area">
		<div v-for="i in amount" class="rotate-box" :key="i" :style="style(i)"></div>
	</div>
</template>

<script>
	import _ from 'lodash'

	export default {
		name: "riseBackground",
		props: {
			amount: {
				type: Number,
				default: 6
			},
		},
		computed: {
			style() {
				return i => {
					let len = `${_.random(10, 50)}px`;
					return {
						left: `${_.random(10 / i, 90 / i) * i}%`,
						width: len,
						height: len,
						'animation-delay': `${_.random(1, 15, true)}s`,
						'animation-duration': `${_.random(10, 30, true)}s`,
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@keyframes rotate-rise {
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
		/*background: linear-gradient(to right, #3a6186, #89253e);*/
		background: #1c1c1c;
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
		pointer-events: none;
		z-index: -1;

		.rotate-box {
			position: absolute;
			display: block;
			list-style: none;
			bottom: -50px;
			background: rgba(255, 255, 255, 0.2);
			animation: rotate-rise 20s linear infinite;
		}
	}
</style>
