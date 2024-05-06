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

		ctx.beginPath()
		ctx.rect(left, top, this.width, this.height)
		ctx.fillStyle = "black"
		ctx.fill()
	}
}

// Exports
export default Column
