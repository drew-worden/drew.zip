<!-- Scripts -->
<script lang="ts">
	// Props
	export let name
	export let description
</script>

<!-- Markup -->
<div class="project-tile">
	<h5>{name}</h5>
	<p>{description}</p>
</div>

<!-- Styles -->
<style>
	.project-tile {
		width: 300px;
	}
</style>
