<script lang="ts">
	// Imports
	import Navbar from "$lib/components/Navbar.svelte"
	import "../app.css"
	import { fade } from "svelte/transition"

	// Props
	export let data
</script>

<div class="responsive">
	<Navbar />
	{#key data.url}
		<div
			in:fade={{ duration: 300, delay: 300 }}
			out:fade={{ duration: 300 }}
		>
			<slot />
		</div>
	{/key}
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

	@media (max-width: 600px) {
		.responsive {
			padding: 12px;
		}
	}
</style>
