class ColumnBrush {
	public ctx: CanvasRenderingContext2D
	public x: number
	public y: number
	public speedX: number
	public speedY: number
	public maxSize: number
	public size: number

	constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
		this.ctx = ctx
		this.x = x
		this.y = y
		this.speedX = Math.random() * 4 - 2 // Random number between -2 and 2
		this.speedY = Math.random() * 4 - 2 // Random number between -2 and 2
		this.maxSize = Math.random() * 7 + 5 // Random number between 5 and 12
		this.size = Math.random() * 1 + 2 // Random number between 2 and 3
	}

	update() {
		this.x += this.speedX
		this.y += this.speedY
		this.size += 0.1

		if (this.size < this.maxSize) {
			this.ctx.beginPath()
			this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
			this.ctx.fillStyle = "blue"
			this.ctx.fill()
			this.ctx.stroke()
			requestAnimationFrame(this.update.bind(this))
		}
	}
}

// Exports
export default ColumnBrush
