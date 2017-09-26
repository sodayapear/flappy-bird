class SceneTitle extends GuaScene {
	constructor(game){
		super(game)
		var bg = new GuaImage(game, 'bg')
		this.addElement(bg)

		var title = new GuaImage(game, 'title')
		title.x = 60
		title.y = 150
		this.addElement(title)

		this.playbtn = new GuaImage(game, 'playbtn')
		this.playbtn.x = 86
		this.playbtn.y = 340
		this.addElement(this.playbtn)

		//循环移动的地面
		this.grounds = new Grounds(game)
		this.addElement(this.grounds)
		//player
		this.bird = new Bird(game)
		this.addElement(this.bird)

		this.setupInputs()

	}

	setupInputs() {
		var g = this.game
		var b = this.playbtn
		g.canvas.addEventListener('click', function(e){			
			if (aInb(e.offsetX, b.x, b.x + b.w) && 
				aInb(e.offsetY, b.y, b.y + b.h)){
				var s = new SceneReady(g)
				g.replaceScene(s)
			}
		})
	}

}