<script lang="ts">
	import { onMount } from "svelte"

	let container: HTMLElement
	let banner: HTMLElement
	let scrollInterval: number
	const icons = [
		"/c.svg",
		"/rust.svg",
		"/svelte.svg",
		"/c++.svg",
		"/python.svg",
		"/javascript.svg",
		"/typescript.svg",
		"/java.svg",
		"/go.svg",
		"/php.svg",
		"/html.svg",
		"/css.svg",
		"haskell.svg",
		"nasm.svg",
		"opengl.svg",
		"r.svg"
	]
	let duplicateCount = 1

	onMount(() => {
		const calculateDuplicates = () => {
			if (container && banner) {
				const containerWidth = container.offsetWidth
				const singleSetWidth = icons.length * (40 + 20)
				duplicateCount = Math.ceil(containerWidth / singleSetWidth) + 2
			}
		}
		calculateDuplicates()
		window.addEventListener("resize", calculateDuplicates)

		const scrollSpeed = 1.5
		let currentScroll = 0
		const scrollBanner = () => {
			if (!container || !banner) return
			currentScroll += scrollSpeed
			container.scrollLeft = currentScroll
			const resetPoint = (40 + 20) * icons.length
			if (currentScroll >= resetPoint) {
				currentScroll = 0
				container.scrollLeft = 0
			}
		}
		scrollInterval = setInterval(scrollBanner, 16)

		return () => {
			clearInterval(scrollInterval)
			window.removeEventListener("resize", calculateDuplicates)
		}
	})
</script>

<div class="outer-container">
	{#if true}
		<div class="fade-overlay fade-left"></div>
		<div class="fade-overlay fade-right"></div>
	{/if}
	<div
		bind:this={container}
		class="banner-container"
	>
		<div
			bind:this={banner}
			class="banner"
			style="will-change: transform"
		>
			{#each Array(duplicateCount).fill(icons).flat() as icon, i}
				<img
					src={icon}
					alt={`icon-${i}`}
					class="icon"
				/>
			{/each}
		</div>
	</div>
</div>

<style>
	.outer-container {
		position: relative;
		width: 100%;
		height: 60px;
		overflow: hidden;
		margin-top: 32px;
	}

	.banner-container {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}

	.banner {
		display: flex;
		align-items: center;
		gap: 20px;
		padding: 0 10px;
		position: absolute;
		height: 100%;
		transform: translateX(0);
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}

	.icon {
		height: 40px;
		width: 40px;
		flex-shrink: 0;
		object-fit: contain;
		transform: translateZ(0);
		-webkit-transform: translateZ(0);
	}

	.fade-overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100px;
		pointer-events: none;
		z-index: 2;
	}

	.fade-left {
		left: 0;
		background: linear-gradient(
			to right,
			var(--body-bg-color),
			rgba(0, 0, 0, 0.9) 20%,
			rgb(255 255 255 / 0) 100%
		);
	}

	.fade-right {
		right: 0;
		background: linear-gradient(
			to left,
			var(--body-bg-color),
			rgba(0, 0, 0, 0.9) 20%,
			rgb(255 255 255 / 0) 100%
		);
	}
</style>
