<!-- Scripts -->
<script lang="ts">
	// Imports
	import { ClickableTile } from "carbon-components-svelte"
	import ProjectTile from "../../components/projects/ProjectTile.svelte"
</script>

<!-- Markup -->
<h1>Projects</h1>
<p class="page-desc">
	Below are a series of projects developed and designed by Drew Worden. They are in various stages
	completeness.
</p>

<div class="projects-grid">
	<ClickableTile
		href="/projects/algorithmn-visualizer"
		style="width: fit-content;"
	>
		<ProjectTile
			name="Algorithm Visualizer"
			description="A web application that visualizes various sorting algorithms."
		/>
	</ClickableTile>
	<ClickableTile
		href="/projects/self-driving-simulation"
		style="width: fit-content;"
	>
		<ProjectTile
			name="Self-Driving Simulation"
			description="A simulation of a self-driving car using a neural network."
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
		grid-gap: 1rem;
		margin-top: 16px;
	}
</style>
