<!-- Scripts -->
<script lang="ts">
	// Imports
	import { onMount } from "svelte"
	import BrushControls from "../../../components/projects/generative-brush/BrushControls.svelte"
	import DefaultBrush from "$lib/projects/generative-brush/column-brush"
	import VineBrush from "$lib/projects/generative-brush/vine-brush"

	// State
	let canvas: HTMLCanvasElement
	let selectedBrush: string

	// Lifecycle
	onMount(() => {
		// Set canvas styles
		canvas.width = window.innerWidth - 64
		canvas.height = 500

		// Get 2d context
		let ctx = canvas.getContext("2d")
		if (!ctx) {
			throw new Error("Failed to get 2d canvas context.")
		}

		function handleMouseMove(e: MouseEvent) {
			if (!ctx) {
				throw new Error("Failed to get 2d canvas context.")
			}

			let brush: DefaultBrush | VineBrush
			if (selectedBrush === "Column Brush") {
				brush = new DefaultBrush(ctx, e.offsetX, e.offsetY)
			} else if (selectedBrush === "Vine Brush") {
				brush = new VineBrush(ctx, e.offsetX, e.offsetY)
			} else {
				throw new Error("Invalid brush selected.")
			}
			brush.update()
		}

		canvas.addEventListener("mousemove", handleMouseMove)

		return {
			destroy() {
				canvas.removeEventListener("mousemove", handleMouseMove)
			}
		}
	})
</script>

<!-- Markup -->
<h1>Generative Brush</h1>
<p>Generative art powered by fractal algorithms and your cursor.</p>
<BrushControls
	canvasRef={canvas}
	bind:selectedBrush
/>
<canvas bind:this={canvas}></canvas>

<!-- Styles -->
<style>
	h1 {
		margin-bottom: 8px;
	}

	p {
		margin-bottom: 16px;
	}

	canvas {
		margin-top: 16px;
		background-color: #222222;
	}
</style>
