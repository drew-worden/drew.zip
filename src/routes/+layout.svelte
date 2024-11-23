<script lang="ts">
	// Imports
	import Navbar from "$lib/components/Navbar.svelte";
	import "../app.css"
</script>

<div class="responsive">
	<Navbar/>
	<slot />
</div>

<style>
	.responsive {
		max-width: 1400px;
		margin: 0 auto;
		padding: 32px;
	}

	@media (max-width: 810px) {
		.responsive {
			padding: 24px;
		}
	}
</style>
