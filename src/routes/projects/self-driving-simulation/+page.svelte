<!-- Scripts -->
<script lang="ts">
	// Imports
	import { onMount } from "svelte"

	// State
	let canvas: HTMLCanvasElement

	// Lifecycle
	onMount(() => {
		canvas.width = window.innerWidth - 64
		canvas.height = 500
	})
</script>

<!-- Markup -->
<h1>Self Driving Simulation</h1>
<p>A procedurally generated map and neural network powered self-driving car.</p>
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
		position: absolute;
		bottom: 32px;
	}
</style>
