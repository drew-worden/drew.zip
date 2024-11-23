<script lang="ts">
	// Imports
	import "../app.css"
</script>

<div class="responsive">
	<slot />
</div>

<style>
	.responsive {
		max-width: 1400px;
		margin: 0 auto;
	}
</style>
