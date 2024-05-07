<!-- Scripts -->
<script lang="ts">
	// State
	let canvas: HTMLCanvasElement
</script>

<!-- Markup -->
<h1>Wave Simulation</h1>
<p>
	Use the mouse to drag the blue line to simulate a wave using the 4th order PDE wave equation
	with damping and stress-strain coupling.
</p>
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
		margin-top: 8px;
		background-color: #222222;
	}
</style>
