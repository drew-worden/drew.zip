// Imports
import Column from "$lib/projects/algorithm-visualizer/column"

function fillArrayWithRandoms(array: number[], n: number) {
	for (let i = 0; i < n; i++) {
		array.push(Math.random())
	}
}

function drawColumns(columnArray: number[], canvas: HTMLCanvasElement) {
	const ctx = canvas.getContext("2d")
	if (!ctx) {
		throw new Error("Canvas context is null")
	}
	const spacing = canvas.width / columnArray.length
	const cols: Column[] = []

	for (let i = 0; i < columnArray.length; i++) {
		const colX = i * spacing + spacing / 2
		const colY = canvas.height
		const colWidth = spacing
		const colHeight = canvas.height * columnArray[i]
		cols[i] = new Column(colX, colY, colWidth, colHeight)
		cols[i].draw(ctx)
	}
}

export { fillArrayWithRandoms, drawColumns }
