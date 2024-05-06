<!-- Scripts -->
<script lang="ts">
	// Imports
	import { onMount } from "svelte"
	import { Button, NumberInput, Dropdown } from "carbon-components-svelte"
	import {
		generateRandomArray,
		generateColumns,
		drawColumns,
		animateColumns
	} from "$lib/projects/algorithm-visualizer/main"
	import { bubbleSort, selectionSort } from "$lib/projects/algorithm-visualizer/algos"
	import type Column from "$lib/projects/algorithm-visualizer/column"
	import type { Move } from "$lib/projects/algorithm-visualizer/types"

	// Props
	export let numColumns: number = 20
	export let canvasRef: HTMLCanvasElement

	// State
	let array = generateRandomArray(numColumns)
	let columns: Column[] = []
	let selectedId = "0"

	// Handlers
	/**
	 * Handles the change event for the number of columns input.
	 * Checks for a valid number of columns and updates the array and columns accordingly.
	 */
	function handleNumColumnsChange() {
		// Check for valid number of columns
		if (numColumns < 2) {
			numColumns = 2
		} else if (numColumns > 100) {
			numColumns = 100
		}

		// Reduce or increase the number of columns
		if (array.length > numColumns) {
			array = array.slice(0, numColumns)
		} else {
			array = [...array, ...generateRandomArray(numColumns - array.length)]
		}
		columns = generateColumns(array, canvasRef)
		drawColumns(canvasRef, columns)
	}

	/**
	 * Handles the randomize button click event.
	 * Generates a random array, generates columns based on the array, and draws the columns on the canvas.
	 */
	function handleRandomize() {
		array = generateRandomArray(numColumns)
		columns = generateColumns(array, canvasRef)
		drawColumns(canvasRef, columns)
	}

	/**
	 * Handles the start button click event.
	 * Generates an array of moves based on the selected algorithm,
	 * and animates the columns using the generated moves.
	 */
	function handleStart() {
		let moves: Move[] = []
		if (selectedId === "0") {
			moves = bubbleSort(array)
		} else if (selectedId === "1") {
			moves = selectionSort(array)
		}
		animateColumns(canvasRef, columns, moves)
	}

	/**
	 * Handles the selection event.
	 *
	 * @param {CustomEvent} event - The custom event object.
	 */
	function handleSelect(event: CustomEvent) {
		selectedId = event.detail.selectedId
	}

	// Lifecycle
	onMount(() => {
		setTimeout(() => {
			columns = generateColumns(array, canvasRef)
			drawColumns(canvasRef, columns)
		}, 0)
	})
</script>

<!-- Markup -->
<div class="controls-wrapper">
	<Dropdown
		size="sm"
		titleText="Algorithm"
		selectedId="0"
		on:select={handleSelect}
		items={[
			{ id: "0", text: "Bubble Sort" },
			{ id: "1", text: "Selection Sort" }
		]}
	/>
	<div class="number-wrapper">
		<NumberInput
			label="Columns"
			bind:value={numColumns}
			size="sm"
			on:change={handleNumColumnsChange}
			min={2}
			max={100}
		/>
	</div>
	<Button
		kind="secondary"
		size="small"
		on:click={handleRandomize}
		>Randomize
	</Button>
	<Button
		kind="secondary"
		size="small"
		on:click={handleStart}>Start</Button
	>
</div>

<!-- Styles -->
<style>
	.controls-wrapper {
		display: flex;
		gap: 16px;
		align-items: end;
	}

	.number-wrapper {
		width: 150px;
	}
</style>
