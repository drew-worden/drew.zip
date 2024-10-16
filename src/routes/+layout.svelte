<script lang="ts">
	// Imports
	import Header from "$lib/components/Header.svelte"
	import Navigation from "$lib/components/Navigation.svelte"
	import "../app.css"
</script>

<div class="layout-container col">
	<Header />
	<div class="aside-main-container row">
		<aside>
			<Navigation />
		</aside>
		<main><slot /></main>
	</div>
</div>

<style>
    .layout-container {
        height: 100vh;
    }

    .aside-main-container {
        height: 100%;
    }

    main {
        width: 100%;
        height: 100%;
        padding: var(--pad-lg);
    }
</style>
