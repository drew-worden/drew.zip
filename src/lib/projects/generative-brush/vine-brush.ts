// Imports
import DefaultBrush from "./column-brush"

class VineBrush extends DefaultBrush {
	private angleX: number
	private angleY: number
	private sizeVelocity: number
	private angleXVelocity: number
	private angleYVelocity: number

	constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
		super(ctx, x, y)
		this.angleX = Math.random() * Math.PI * 2 // Random number between 0 and 2 PI
		this.angleY = Math.random() * Math.PI * 2 // Random number between 0 and 2 PI
		this.sizeVelocity = Math.random() * 0.2 + 0.05 // Random number between 0.05 and 2.05
		this.angleXVelocity = Math.random() * 0.6 - 0.3 // Random number between 0.3 and 0.9
		this.angleYVelocity = Math.random() * 0.6 - 0.3 // Random number between 0.3 and 0.9
	}

	update() {
		this.x += this.speedX + Math.sin(this.angleX)
		this.y += this.speedY + Math.sin(this.angleY)
		this.size += this.sizeVelocity
		this.angleX += this.angleXVelocity
		this.angleY += this.angleYVelocity

		if (this.size < this.maxSize) {
			this.ctx.beginPath()
			this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
			this.ctx.fillStyle = "green"
			this.ctx.fill()
			this.ctx.stroke()
			requestAnimationFrame(this.update.bind(this))
		}
	}
}

// Exports
export default VineBrush
