// Imports
import { lerp } from "./utils"
import type { Location } from "./types"

class Column {
	public x: number
	public y: number
	private width: number
	private height: number
	private queue: Location[]

	/**
	 * Represents a column in the algorithm visualizer.
	 */
	constructor(x: number, y: number, width: number, height: number) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.queue = []
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
			const { x, y } = this.queue.shift()!
			this.x = x
			this.y = y
			changed = true
		}

		const left = this.x - this.width / 2
		const top = this.y - this.height
		const right = this.x + this.width / 2
		const bottom = this.y

		ctx.beginPath()
		ctx.fillStyle = "rgb(150, 150, 150)"
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
	moveTo(location: Location, frameCount = 10, offset = 1 | -1) {
		for (let i = 1; i <= frameCount; i++) {
			const t = i / frameCount
			const u = Math.sin(t * Math.PI)
			this.queue.push({
				x: lerp(this.x, location.x, t),
				y: lerp(this.y, location.y, t) + ((u * this.width) / 4) * offset
			})
		}
	}
}

// Exports
export default Column
