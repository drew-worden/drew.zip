<!-- Scripts -->
<script lang="ts">
	// Imports
	import { Button, Dropdown } from "carbon-components-svelte"

	// Props
	export let canvasRef: HTMLCanvasElement
	export let selectedBrush = "Column Brush"

	// Handlers
	function handleReset() {
		const ctx = canvasRef.getContext("2d")
		if (!ctx) {
			throw new Error("Failed to get 2d canvas context.")
		}
		ctx.clearRect(0, 0, canvasRef.width, canvasRef.height)
	}
</script>

<!-- Markup -->
<div class="controls-wrapper">
	<Dropdown
		size="sm"
		titleText="Algorithm"
		selectedId="0"
		style="width: 200px;"
		items={[
			{ id: "0", text: "Column Brush" },
			{ id: "1", text: "Vine Brush" }
		]}
		on:select={(e) => (selectedBrush = e.detail.selectedItem.text)}
	/>
	<Button
		kind="primary"
		size="small"
		on:click={handleReset}>Clear</Button
	>
</div>

<!-- Styles -->
<style>
	.controls-wrapper {
		display: flex;
		gap: 16px;
		align-items: end;
	}
</style>
