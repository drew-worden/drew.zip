<!-- Scripts -->
<script lang="ts">
	// Imports
	import { ClickableTile } from "carbon-components-svelte"
	import ProjectTile from "../../components/projects/ProjectTile.svelte"
	import AlgorithmVisualizerThumbnail from "../../assets/projects/algorithm-visualizer/thumbnail.png"
	import GenerativeBrushThumbnail from "../../assets/projects/generative-brush/thumbnail.png"
</script>

<!-- Markup -->
<h1>Projects</h1>
<p class="page-desc">
	Below are a series of projects developed and designed by Drew Worden. Most of these projects
	don't showcase specific domain knowledge or technologies, instead they are presented with the
	intention to showcase a broad range of interests and implementation skills. They are in various
	stages of completeness.
</p>
<div class="projects-grid">
	<ClickableTile
		href="/projects/algorithm-visualizer"
		style="width: fit-content;"
	>
		<ProjectTile
			name="Algorithm Visualizer"
			description="A visualizer for various sorting algorithms."
			thumbnailPath={AlgorithmVisualizerThumbnail}
		/>
	</ClickableTile>
	<ClickableTile
		href="/projects/wave-simulation"
		style="width: fit-content;"
	>
		<ProjectTile
			name="Wave Simulation"
			description="An implementation of the 4th order PDE wave equation using damping and stress-strain coupling."
			thumbnailPath={""}
		/>
	</ClickableTile>
	<ClickableTile
		href="/projects/self-driving-simulation"
		style="width: fit-content;"
	>
		<ProjectTile
			name="Self-Driving Simulation"
			description="A simulation of a self-driving car using a neural network."
			thumbnailPath={""}
		/>
	</ClickableTile>
	<ClickableTile
		href="/projects/generative-brush"
		style="width: fit-content;"
	>
		<ProjectTile
			name="Generative Brush"
			description="Generative art powered by fractal algorithms and your cursor."
			thumbnailPath={GenerativeBrushThumbnail}
		/>
	</ClickableTile>
</div>

<!-- Styles -->
<style>
	.page-desc {
		margin-top: 16px;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 32px;
		margin-top: 32px;
	}
</style>
