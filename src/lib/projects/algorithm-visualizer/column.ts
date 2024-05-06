// Imports
import { lerp } from "./utils"
import type { QueueEntry, RGB } from "./types"

class Column {
	public x: number
	public y: number
	private width: number
	private height: number
	private queue: QueueEntry[]
	private color: RGB

	/**
	 * Represents a column in the algorithm visualizer.
	 */
	constructor(x: number, y: number, width: number, height: number) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.queue = []
		this.color = { r: 150, g: 150, b: 150 }
	}

	/**
	 * Draws the column on the canvas.
	 *
	 * @param ctx - The canvas rendering context.
	 * @returns A boolean indicating whether the column has changed.
	 */
	draw(ctx: CanvasRenderingContext2D) {
		let changed = false

		if (this.queue.length > 0) {
			const { x, y, r, g, b } = this.queue.shift()!
			this.x = x
			this.y = y
			this.color = { r, g, b }
			changed = true
		}

		const left = this.x - this.width / 2
		const top = this.y - this.height
		const right = this.x + this.width / 2
		const bottom = this.y

		ctx.beginPath()
		const { r, g, b } = this.color
		ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
		ctx.moveTo(left, top)
		ctx.lineTo(left, bottom)
		ctx.ellipse(this.x, this.y, this.width / 2, this.width / 4, 0, Math.PI, Math.PI * 2, true)
		ctx.lineTo(right, top)
		ctx.ellipse(this.x, top, this.width / 2, this.width / 4, 0, 0, Math.PI * 2, true)
		ctx.fill()
		ctx.stroke()
		return changed
	}

	/**
	 * Moves the column to the specified location over a given number of frames.
	 * @param location - The target location to move the column to.
	 * @param frameCount - The number of frames to complete the movement. Default is 10.
	 * @param offset - The offset to apply to the y-coordinate of the column during the movement. Default is 1 or -1.
	 */
	moveTo(column: Column, frameCount = 10, offset = 1 | -1) {
		for (let i = 1; i <= frameCount; i++) {
			const t = i / frameCount
			const u = Math.sin(t * Math.PI)
			this.queue.push({
				x: lerp(this.x, column.x, t),
				y: lerp(this.y, column.y, t) + ((u * this.width) / 4) * offset,
				r: lerp(150, 0, u),
				g: lerp(150, 0, u),
				b: lerp(150, 255, u)
			})
		}
	}
}

// Exports
export default Column
