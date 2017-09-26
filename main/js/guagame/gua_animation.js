class GuaAnimation {
	constructor(game) {
		this.game = game

		this.animations = {
			idle: [],
		}
		for (var i = 0; i < 3; i++) {
			var name = `b${i}`
			var t = game.textureByName(name)
			this.animations['idle'].push(t)
		}
		this.animationName = 'idle'
		this.texture = this.frames()[0]
		this.frameIndex = 0
		this.frameCount = 3
		this.w = this.texture.width 
		this.h = this.texture.height 

		this.flipX = false

		//重力和加速度
		this.gy = 10
		this.vy = 0
		this.rotation = 0
		this.alpha = 1

	}
	frames() {
		return this.animations[this.animationName]
	}

	update() {
		//更新速度
		this.y += this.vy
		this.vy += this.gy * 0.2
		var h = 370
		if(this.y > h){
			this.y = h
		}

		//更新角度
		if (this.rotation < 90) {
			this.rotation += 5
		}

		this.frameCount--
		if(this.frameCount == 0) {
			this.frameCount = 3
			this.frameIndex = (this.frameIndex + 1) % this.frames().length
			this.texture = this.frames()[this.frameIndex]
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
		this.vy = -10
		this.rotation = -45
	}

	move(x){
		this.flipX = x < 0
		this.x += x
		// this.changeAnimation('run')
		// var animationNames = {
		// 	down: 'run',
		// 	up: 'idle',
		// }
		// var name = animationNames[keyStatus]
		// this.changeAnimation(name)
	}

	changeAnimation(name) {
		this.animationName = name
	}

	debug() {

	}
}