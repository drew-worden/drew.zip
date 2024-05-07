<!-- Scripts -->
<script lang="ts">
	// Props
	export let name
	export let description
	export let thumbnailPath
</script>

<!-- Markup -->
<div class="project-tile">
	<h4>{name}</h4>
	<p class="desc">{description}</p>
	<img
		src={thumbnailPath}
		alt="thumbnail"
	/>
</div>

<!-- Styles -->
<style>
	.project-tile {
		width: 300px;
	}

	.desc {
		margin-top: 8px;
	}

	img {
		width: 100%;
		margin-top: 16px;
	}
</style>
