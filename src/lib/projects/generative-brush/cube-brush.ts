// Imports
import VineBrush from "./vine-brush"

class CubeBrush extends VineBrush {
	public angle: number = 0
	public angleVelocity: number = 0

	constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
		super(ctx, x, y)
		this.angle = 0
		this.angleVelocity = Math.random() * 0.02 + 0.05
	}

	update() {
		this.x += this.speedX + Math.sin(this.angleX)
		this.y += this.speedY + Math.sin(this.angleY)
		this.size += this.sizeVelocity
		this.angleX += this.angleXVelocity
		this.angleY += this.angleYVelocity
		this.angle += this.angleVelocity

		if (this.lightness < 70) this.lightness += 0.25

		if (this.size < this.maxSize) {
			this.ctx.save()

			this.ctx.fillStyle = "#FFF5DE"
			this.ctx.strokeStyle = "#3C5186"
			this.ctx.lineWidth = 0.2
			this.ctx.shadowOffsetX = 0
			this.ctx.shadowOffsetY = 0
			this.ctx.shadowBlur = 10
			this.ctx.shadowColor = "rgba(0, 0, 0, 0.5)"


			this.ctx.translate(this.x, this.y)
			this.ctx.rotate(this.angle)
			this.ctx.fillRect(0, 0, this.size, this.size)
			this.ctx.strokeRect(0, 0, this.size * 2, this.size * 2)
			requestAnimationFrame(this.update.bind(this))
			this.ctx.restore()
		}
	}
}

// Exports
export default CubeBrush
