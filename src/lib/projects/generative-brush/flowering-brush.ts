// Imports
import VineBrush from "./vine-brush"
import Flower from "./flower"

class FloweringBrush extends VineBrush {
	constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
		super(ctx, x, y)
	}

	update() {
		this.x += this.speedX + Math.sin(this.angleX)
		this.y += this.speedY + Math.sin(this.angleY)
		this.size += this.sizeVelocity
		this.angleX += this.angleXVelocity
		this.angleY += this.angleYVelocity

		if (this.lightness < 70) this.lightness += 0.25

		if (this.size < this.maxSize) {
			this.ctx.beginPath()
			this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
			this.ctx.fillStyle = `hsl(120, 100%, ${this.lightness}%)`
			this.ctx.fill()
			this.ctx.stroke()
			requestAnimationFrame(this.update.bind(this))
		} else {
			const flower = new Flower(this.ctx, this.x, this.y, this.size)
			flower.grow()
		}
	}
}

// Exports
export default FloweringBrush
