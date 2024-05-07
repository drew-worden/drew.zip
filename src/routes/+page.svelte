<!-- Scripts -->
<script lang="ts">
	import { ClickableTile } from "carbon-components-svelte"
</script>

<!-- Markup -->
<h1>drew.zip</h1>
<p>A portfolio and showcase site for work created by Drew Worden.</p>
<p>This site is a migration from a previous one and is currently very much in development.</p>
<div class="tile-grid">
	<ClickableTile
		light
		href="https://github.com/drew-worden"
		target="_blank"
	>
		<h5>GitHub</h5>
		<p>Web apps, compilers, ML and AI models, parsers, and more.</p>
	</ClickableTile>
	<ClickableTile
		light
		href="https://www.linkedin.com/"
		target="_blank"
	>
		<h5>LinkedIn</h5>
		<p>Career highlights, formal education, certifications, and tech memes.</p>
	</ClickableTile>
	<ClickableTile
		light
		href="https://drewpworden.medium.com/"
		target="_blank"
	>
		<h5>Medium</h5>
		<p>
			Articles showcasing and explaining technical concepts, specifically in the area of ML
			and AI.
		</p>
	</ClickableTile>
	<ClickableTile
		light
		href="/projects"
	>
		<h5>Hosted Projects</h5>
		<p>Nice projects that work well as hosted web apps.</p>
	</ClickableTile>
</div>

<style>
	h1 {
		margin-bottom: 16px;
	}

	.tile-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-gap: 16px;
		margin-top: 32px;
	}

	h5 {
		margin-bottom: 8px;
	}
</style>
