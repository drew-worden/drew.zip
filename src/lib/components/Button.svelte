<script lang="ts">
	// Props
	export let href: string
	export let width: "full" | "auto" = "auto"
</script>

{#if href}
	<a {href}>
		<button
			class="row rubik font-sm weight-600 row-center gap-sm"
			style={width === "full" ? "width: 100%;" : null}><slot /></button
		>
	</a>
{:else}
	<button
		class="row rubik font-sm weight-600"
		style={width === "full" ? "width: 100%;" : null}><slot /></button
	>
{/if}

<style>
	button {
		background-color: #333333;
		color: white;
		padding: var(--pad-sm) var(--pad-sm);
		cursor: pointer;
		border-radius: var(--br-md);
	}

	button:hover {
		background-color: #33333363;
	}
</style>
