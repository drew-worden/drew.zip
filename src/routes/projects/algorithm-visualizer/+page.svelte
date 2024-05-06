<!-- Scripts -->
<script lang="ts">
	// Imports
	import { onMount } from "svelte"
	import {
		fillArrayWithRandoms,
		generateColumns,
		animateColumns
	} from "$lib/projects/algorithm-visualizer/main"

	// State
	let numColumns = 100
	let canvas: HTMLCanvasElement
	let array: number[] = []

	// Lifecycle
	onMount(() => {
		fillArrayWithRandoms(array, numColumns)
		canvas.width = window.innerWidth - 64
		canvas.height = 500
		const columns = generateColumns(array, canvas)
		animateColumns(canvas, columns)
	})
</script>

<!-- Markup -->
<h1>Algorithm Visualizer</h1>
<canvas bind:this={canvas}></canvas>

<!-- Styles -->
<style>
	canvas {
		position: absolute;
		bottom: 32px;
	}
</style>
