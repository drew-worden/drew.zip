// Imports
import Column from "$lib/projects/algorithm-visualizer/column"

/**
 * Fills an array with random numbers.
 *
 * @param array - The array to fill with random numbers.
 * @param n - The number of random numbers to generate and add to the array.
 */
function fillArrayWithRandoms(array: number[], n: number) {
	for (let i = 0; i < n; i++) {
		array.push(Math.random())
	}
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
	margin: number = 16,
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
		const colY = canvas.height - margin - i * 2
		const colWidth = spacing - gap
		const colHeight = maxColHeight * columnArray[i]
		cols[i] = new Column(colX, colY, colWidth, colHeight)
	}

	return cols
}

function animateColumns(canvas: HTMLCanvasElement, columns: Column[]) {
	const ctx = canvas.getContext("2d")
	if (!ctx) {
		throw new Error("Canvas context is null")
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height)
	for (let i = 0; i < columns.length; i++) {
		columns[i].draw(ctx)
	}

	requestAnimationFrame(() => animateColumns(canvas, columns))
}

export { fillArrayWithRandoms, generateColumns, animateColumns }
