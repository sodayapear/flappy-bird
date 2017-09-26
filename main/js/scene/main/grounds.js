class Grounds extends GuaImage {
	constructor(game) {
		super(game, 'ground')
		this.grounds = []
		for (var i = 0; i < 22; i++) {
			var g = new GuaImage(game, 'ground')
			g.x = i * 28
			g.y = 400
			this.grounds.push(g)
		}
		this.skipCount = 5
		this.paused = false

	}
	update() {
		if(this.paused){
			return
		}
		//地面移动
		this.skipCount--
		var offset = -5
		if (this.skipCount == 0) {
			this.skipCount = 5
			var offset = 20
		}
		for (var i = 0; i < 22; i++) {
			var g = this.grounds[i]
			g.x += offset			
		}
	}
	draw() {
		for (var i = 0; i < 22; i++) {
			var g = this.grounds[i]
			g.draw()			
		}
	}
	pause() {
		this.paused = true
	}
}