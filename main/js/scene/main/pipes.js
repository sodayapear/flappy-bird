class Pipes {
	constructor(game) {
		this.paused = false
		this.game = game
		this.pipes = []
		this.pipeSpacH = config.pipeSpacH.value
		this.pipeSpacW = config.pipeSpacW.value
		this.columnsOfPipes = 3
		for (var i = 0; i < this.columnsOfPipes; i++) {
			var p1 = new GuaImage(game, 'pipe')
			p1.flipY = true
			p1.x = 500 + i * this.pipeSpacW
			var p2 = new GuaImage(game, 'pipe')
			p2.x = p1.x
			this.resetPipesPosition(p1, p2)
			this.pipes.push(p1)
			this.pipes.push(p2)

		}
	}
	resetPipesPosition(p1, p2) {
		var minlen = 20
		var h = p1.h
		var pipelen = 400 - this.pipeSpacH
		var max = pipelen > h ? 0: pipelen - h - minlen 
		var min = pipelen - (h * 2) > -h ? pipelen - (h * 2) : -h + minlen
		p1.y = randomBetween(min, max)
		p2.y = p1.y + h + this.pipeSpacH
	}
	update() {
		if(this.paused){
			return
		}
		for (var i = 0; i < this.pipes.length; i += 2) {
			var p1 = this.pipes[i]
			var p2 = this.pipes[i + 1]
			p1.x -= 5
			p2.x -= 5
			if (p1.x < -100) {
				p1.x = this.pipes[(i + 4) % this.pipes.length].x + this.pipeSpacW 
				// p1.x += this.pipeSpacW * this.columnsOfPipes
			}
			if (p2.x < -100) {
				p2.x = this.pipes[(i + 4) % this.pipes.length].x + this.pipeSpacW 
				this.resetPipesPosition(p1, p2)
			}
			
		}
	}
	draw() {
		var context = this.game.context
		for (var p of this.pipes) {
			context.save()
			//set the origin to the center of the image
			var w2 = p.w / 2
			var h2 = p.h / 2

			context.translate(p.x + w2, p.y + h2)
			var scaleX = p.flipX ? -1 : 1
			var scaleY = p.flipY ? -1 : 1

			context.scale(scaleX, scaleY)	
			context.rotate(p.rotation * Math.PI / 180)
			context.translate(-w2, -h2)

			context.drawImage(p.texture, 0, 0)
			context.restore()			
		}
	}

	pause() {
		this.paused = true
	}

	debug(){
		this.pipeSpacW = config.pipeSpacW.value
		this.pipeSpacH = config.pipeSpacH.value
	}
}
