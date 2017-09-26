class Bird {
	constructor(game) {
		this.game = game
		this.x = 125
		this.y = 250

		this.animation = []
		for (var i = 0; i < 3; i++) {
			var name = `b${i}`
			var t = game.textureByName(name)
			this.animation.push(t)
		}
		this.texture = this.animation[0]
		this.frameIndex = 0
		this.frameCount = 5
		this.w = this.texture.width 
		this.h = this.texture.height 

		//重力和加速度
		this.gy = 10
		this.vy = 1
		this.rotation = 0
		this.state = 'levitate'
	}

	play() {
		this.state = 'fly'
		this.vy = 0
	}

	pause() {
		if(this.state === 'fly'){
			this.vy = 0
			this.rotation = 90
		}
		this.state = 'fall'

	}
	fall() {
		//更新速度
		this.y += this.vy
		this.vy += this.gy * 0.2
		//更新角度
		if (this.rotation < 90) {
			this.rotation += 5
		}
	}
	levitate() {
		this.y += this.vy
		this.frameCount--
		if(this.frameCount == 0) {
			this.vy = -this.vy
			this.frameCount = 5
			this.frameIndex = (this.frameIndex + 1) % this.animation.length
			this.texture = this.animation[this.frameIndex]
		}
	}
	update() {
		if(this.state === 'fall'){
			this.fall()
			return
		}

		if(this.state === 'levitate') {
			this.levitate() 
			return
		}

		this.fall()
		this.frameCount--
		if(this.frameCount == 0) {
			this.frameCount = 5
			this.frameIndex = (this.frameIndex + 1) % this.animation.length
			this.texture = this.animation[this.frameIndex]
		}
	}

	draw() {
		var context = this.game.context
		context.save()
		//set the origin to the center of the image
		var w2 = this.w / 2
		var h2 = this.h / 2

		context.translate(this.x + w2, this.y + h2)
		context.rotate(this.rotation * Math.PI / 180)
		context.translate(-w2, -h2)

		context.drawImage(this.texture, 0, 0)
		context.restore()

	}

	jump() {
		if(this.state === 'fly'){
			this.vy = -8
			this.rotation = -45			
		}
	}
}