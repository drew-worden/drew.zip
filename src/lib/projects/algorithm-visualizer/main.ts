// Imports
import Column from "$lib/projects/algorithm-visualizer/column"
import type { Move } from "./types"

/**
 * Generates an array with `n` random numbers.
 *
 * @param n - The number of random numbers to generate.
 * @returns An array of `n` random numbers.
 */
function generateRandomArray(n: number) {
	const array: number[] = []
	for (let i = 0; i < n; i++) {
		array.push(Math.random())
	}
	return array
}

/**
 * Generates an array of `Column` objects based on the provided `columnArray`.
 *
 * @param columnArray - An array of numbers representing the heights of the columns.
 * @param canvas - The HTMLCanvasElement on which the columns will be drawn.
 * @param margin - The margin between the canvas edges and the columns. Default is 16.
 * @param gap - The gap between the columns. Default is 4.
 * @param maxColHeight - The maximum height of the columns. Default is 300.
 * @returns An array of `Column` objects representing the generated columns.
 * @throws Error if the canvas context is null.
 */
function generateColumns(
	columnArray: number[],
	canvas: HTMLCanvasElement,
	margin: number = 32,
	gap = 4,
	maxColHeight = 300
) {
	const ctx = canvas.getContext("2d")
	if (!ctx) {
		throw new Error("Canvas context is null")
	}
	const spacing = (canvas.width - margin * 2) / columnArray.length
	const cols: Column[] = []

	for (let i = 0; i < columnArray.length; i++) {
		const colX = i * spacing + spacing / 2 + margin
		const colY = canvas.height - margin
		const colWidth = spacing - gap
		const colHeight = maxColHeight * columnArray[i]
		cols[i] = new Column(colX, colY, colWidth, colHeight)
	}

	return cols
}

/**
 * Draws the columns on the canvas.
 * 
 * @param canvas - The HTMLCanvasElement on which the columns will be drawn.
 * @param columns - An array of Column objects representing the columns to be drawn.
 * @throws Error if the canvas context is null.
 */
function drawColumns(canvas: HTMLCanvasElement, columns: Column[]) {
	const ctx = canvas.getContext("2d")
	if (!ctx) {
		throw new Error("Canvas context is null")
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height)
	for (let i = 0; i < columns.length; i++) {
		columns[i].draw(ctx)
	}
}

/**
 * Animates the columns on a canvas based on the provided moves.
 *
 * @param canvas - The HTMLCanvasElement on which the columns will be animated.
 * @param columns - An array of Column objects representing the columns to be animated.
 * @param moves - An array of Move objects representing the moves to be performed on the columns.
 */
function animateColumns(canvas: HTMLCanvasElement, columns: Column[], moves: Move[]) {
	const ctx = canvas.getContext("2d")
	if (!ctx) {
		throw new Error("Canvas context is null")
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height)
	let changed = false
	for (let i = 0; i < columns.length; i++) {
		changed = columns[i].draw(ctx) || changed
	}

	if (!changed && moves.length > 0) {
		const move = moves.shift()
		const [i, j] = move?.indices ?? []
		if (move?.swapped) {
			columns[i].moveTo(columns[j])
			columns[j].moveTo(columns[i], 10, -1)
			const temp = columns[i]
			columns[i] = columns[j]
			columns[j] = temp
		} else {
			// Highlight the columns that are being compared
		}
	}

	requestAnimationFrame(() => animateColumns(canvas, columns, moves))
}

// Exports
export { generateRandomArray, generateColumns, drawColumns, animateColumns }
