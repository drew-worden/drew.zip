<!-- Scripts -->
<script lang="ts">
	// Imports
	import { onMount } from "svelte"
	import { fillArrayWithRandoms, drawColumns } from "$lib/projects/algorithm-visualizer/main"

	// State
	let numColumns = 20
	let canvas: HTMLCanvasElement
	let array: number[] = []

	fillArrayWithRandoms(array, numColumns)

	// Lifecycle
	onMount(() => {
		drawColumns(array, canvas)
	})
</script>

<!-- Markup -->
<h1>Algorithm Visualizer</h1>
<canvas bind:this={canvas}></canvas>

<!-- Styles -->
