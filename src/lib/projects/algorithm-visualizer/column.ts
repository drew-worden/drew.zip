class Column {
	private x: number
	private y: number
	private width: number
	private height: number

	constructor(x: number, y: number, width: number, height: number) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
	}

	draw(ctx: CanvasRenderingContext2D) {
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
	}
}

// Exports
export default Column
