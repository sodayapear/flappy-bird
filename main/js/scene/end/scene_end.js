class SceneEnd extends GuaScene {
	constructor(game, score){
		super(game)

		this.score = score
		var bg = new GuaImage(game, 'bg')
		this.addElement(bg)
		var panel = new GuaImage(game, 'panel')
		panel.x = 30
		panel.y = 210
		this.addElement(panel)

		var title = new GuaImage(game, 'end')
		title.x = 50
		title.y = 150
		this.addElement(title)
		//循环移动的地面
		this.grounds = new Grounds(game)
		this.addElement(this.grounds)
		this.grounds.pause()

		this.playbtn = new GuaImage(game, 'playbtn')
		this.playbtn.x = 86
		this.playbtn.y = 340
		this.addElement(this.playbtn)
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

	draw() {	
		super.draw()
		this.game.context.fillStyle = "#fff"
		this.game.context.font="20px Arial"
		this.game.context.fillText(this.score, 210, 262)		

	}

}