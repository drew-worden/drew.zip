<!-- Scripts -->
<script lang="ts">
	// Imports
	import { onMount } from "svelte"
	import VisualizerControls from "../../../components/projects/algorithm-visualizer/VisualizerControls.svelte"

	// State
	let canvas: HTMLCanvasElement

	// Lifecycle
	onMount(() => {
		canvas.width = window.innerWidth - 64
		canvas.height = 500
	})
</script>

<!-- Markup -->
<h1>Algorithm Visualizer</h1>
<VisualizerControls canvasRef={canvas} />
<canvas bind:this={canvas}></canvas>

<!-- Styles -->
<style>
	h1 {
		margin-bottom: 16px;
	}

	canvas {
		position: absolute;
		bottom: 32px;
	}
</style>
