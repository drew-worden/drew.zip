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
	import { bubbleSort } from "$lib/projects/algorithm-visualizer/algos"
	import type Column from "$lib/projects/algorithm-visualizer/column"

	// Props
	export let numColumns: number = 20
	export let canvasRef: HTMLCanvasElement

	// State
	let array = generateRandomArray(numColumns)
	let columns: Column[] = []

	// Handlers
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

	function handleRandomize() {
		array = generateRandomArray(numColumns)
		columns = generateColumns(array, canvasRef)
		drawColumns(canvasRef, columns)
	}

	function handleStart() {
		let moves = bubbleSort(array)
		console.log(moves)
		animateColumns(canvasRef, columns, moves)
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
		items={[{ id: "0", text: "Bubble Sort" }]}
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
