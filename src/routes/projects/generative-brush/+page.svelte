<!-- Scripts -->
<script lang="ts">
	// Imports
	import { onMount } from "svelte"
	import BrushControls from "../../../components/projects/generative-brush/BrushControls.svelte"
	import DefaultBrush from "$lib/projects/generative-brush/column-brush"
	import VineBrush from "$lib/projects/generative-brush/vine-brush"
	import FloweringBrush from "$lib/projects/generative-brush/flowering-brush"

	// State
	let canvas: HTMLCanvasElement
	let selectedBrush: string
	let drawing = false

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

			if (drawing) {
				for (let i = 0; i < 2; i++) {
					if (selectedBrush === "Column") {
						brush = new DefaultBrush(ctx, e.offsetX, e.offsetY)
					} else if (selectedBrush === "Vine") {
						brush = new VineBrush(ctx, e.offsetX, e.offsetY)
					} else if (selectedBrush === "Flowering") {
						brush = new FloweringBrush(ctx, e.offsetX, e.offsetY)
					} else {
						throw new Error("Invalid brush selected.")
					}
					brush.update()
				}
			}
		}

		function handleMouseDown(e: MouseEvent) {
			if (!ctx) {
				throw new Error("Failed to get 2d canvas context.")
			}
			let brush: DefaultBrush | VineBrush
			drawing = true
			for (let i = 0; i < 30; i++) {
				if (selectedBrush === "Column") {
					brush = new DefaultBrush(ctx, e.offsetX, e.offsetY)
				} else if (selectedBrush === "Vine") {
					brush = new VineBrush(ctx, e.offsetX, e.offsetY)
				} else if (selectedBrush === "Flowering") {
					brush = new FloweringBrush(ctx, e.offsetX, e.offsetY)
				} else {
					throw new Error("Invalid brush selected.")
				}
				brush.update()
			}
		}

		function handleMouseUp() {
			drawing = false
		}

		canvas.addEventListener("mousemove", handleMouseMove)
		canvas.addEventListener("mousedown", handleMouseDown)
		canvas.addEventListener("mouseup", handleMouseUp)

		return {
			destroy() {
				canvas.removeEventListener("mousemove", handleMouseMove),
					canvas.removeEventListener("mousedown", handleMouseDown),
					canvas.removeEventListener("mouseup", handleMouseUp)
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
