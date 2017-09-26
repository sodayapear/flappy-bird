class SceneReady extends GuaScene {
	constructor(game){
		super(game)
		var bg = new GuaImage(game, 'bg')
		this.addElement(bg)

		this.title = new GuaImage(game, 'ready')
		this.title.x = 50
		this.title.y = 150
		this.addElement(this.title)

		this.prompt = new GuaImage(game, 'prompt')
		this.prompt.x = 95
		this.prompt.y = 230
		this.addElement(this.prompt)
		
		//循环移动的地面
		this.grounds = new Grounds(game)
		this.addElement(this.grounds)
		//player
		this.bird = new Bird(game)
		this.addElement(this.bird)
		this.bird.x = 80
		
		this.setupInputs()
	}


	setupInputs() {
		var g = this.game
		this.game.registerAction(' ', function(){
			var s = new Scene(g)
			g.replaceScene(s)
		})
	}

	draw() {	
		super.draw()
		this.game.context.fillStyle = "#fff"
		this.game.context.font="35px Arial"
		this.game.context.fillText('0', 130, 100)
	
		this.game.context.fillStyle = "#000"
		this.game.context.font="18px Arial"
		this.game.context.fillText('prase space', 102, 350)


	}

}