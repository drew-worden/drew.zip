<script lang="ts">
	// Imports
	import Navigation from "$lib/components/Navigation.svelte"
	import "../app.css"
</script>

<div class="layout-container row">
		<aside>
			<Navigation />
		</aside>
		<main><slot /></main>
</div>

<style>
    .layout-container {
        height: 100vh;
        background-color: var(--bg-dark);
    }

    main {
        width: 100%;
        height: 100%;
        padding: var(--pad-xlg);
    }
</style>
