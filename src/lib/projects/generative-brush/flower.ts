// Imports
import FlowerImageSrc from "../../../assets/projects/generative-brush/flowers.png"

class Flower {
	private ctx: CanvasRenderingContext2D
	private x: number
	private y: number
	private size: number
	private image: HTMLImageElement
	private maxFlowerSize: number
	private frameSize: number
	private frameX: number
	private frameY: number
	private willFlower: boolean
	private sizeVelocity: number
	private angle: number
	private angleVelocity: number

	constructor(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
		this.ctx = ctx
		this.x = x
		this.y = y
		this.size = size
		this.image = new Image()
		this.image.src = FlowerImageSrc
		this.maxFlowerSize = this.size + Math.random() * 50
		this.frameSize = 100
		this.frameX = Math.floor(Math.random() * 3)
		this.frameY = Math.floor(Math.random() * 3)
		this.size > 10 ? (this.willFlower = true) : (this.willFlower = false)
		this.sizeVelocity = Math.random() * 0.3 + 0.2
		this.angle = 0
		this.angleVelocity = Math.random() * 0.05 - 0.025
	}

	grow() {
		if (this.size < this.maxFlowerSize && this.willFlower) {
			this.size += this.sizeVelocity
			this.angle += this.angleVelocity

			this.ctx.save()
			this.ctx.translate(this.x, this.y)
			this.ctx.rotate(this.angle)
			this.ctx.drawImage(
				this.image,
				this.frameSize * this.frameX,
				this.frameSize * this.frameY,
				this.frameSize,
				this.frameSize,
				0 - this.size / 2,
				0 - this.size / 2,
				this.size,
				this.size
			)
			this.ctx.restore()
			requestAnimationFrame(this.grow.bind(this))
		}
	}
}

// Exports
export default Flower
