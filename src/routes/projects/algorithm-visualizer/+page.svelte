<!-- Scripts -->
<script lang="ts">
	// Imports
	import { onMount } from "svelte"
	import {
		fillArrayWithRandoms,
		generateColumns,
		animateColumns,
		bubbleSort
	} from "$lib/projects/algorithm-visualizer/main"

	// State
	let numColumns = 20
	let canvas: HTMLCanvasElement
	let array: number[] = []

	// Lifecycle
	onMount(() => {
		fillArrayWithRandoms(array, numColumns)
		canvas.width = window.innerWidth - 64
		canvas.height = 500
		const columns = generateColumns(array, canvas)
		let moves = bubbleSort(array)
		console.log(moves)
		animateColumns(canvas, columns, moves)
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
