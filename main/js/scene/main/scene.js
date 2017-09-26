class Scene extends GuaScene {
	constructor(game){
		super(game)
		var bg = new GuaImage(game, 'bg')
		this.addElement(bg)
		this.pipe = new Pipes(game)
		this.addElement(this.pipe)
		
		//循环移动的地面
		this.grounds = new Grounds(game)
		this.addElement(this.grounds)
		//player
		this.bird = new Bird(game)
		this.addElement(this.bird)
		this.bird.x = 80
		this.bird.play()

		this.score = 0					
		this.setupInputs()
	}

	update() {
		super.update()
		var p = this.pipe.pipes
		for (var i = 0; i < p.length; i += 2) {
			var p1 = p[i]
			var p2 = p[i + 1]
			//判断经过水管
			if(aInb(p1.x + p1.w, 76 , 80)){
				this.score += 1
			}
			//判断与水管相撞
			if(collide(this.bird, p1) || collide(this.bird, p2)){
				this.pipe.pause()
				this.grounds.pause()
				this.bird.pause()
			}
		}
		//相撞后bird落地
		var h = 370
		var g = this.game
		var score = this.score
		if(this.bird.y > h) {
			this.bird.y = h
			setTimeout(function(){
				var s = new SceneEnd(g, score)
			    g.replaceScene(s)
		    },1000/window.fps*10)			
		}

	}

	setupInputs() {
		var b = this.bird
		this.game.registerAction(' ', function(){
			b.jump()	
		})
	}

	draw() {	
		super.draw()
		this.game.context.fillStyle = "#fff"
		this.game.context.font="35px Arial"
		this.game.context.fillText(this.score, 130, 100)		

	}

}