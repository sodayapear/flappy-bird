class GuaGame {
	constructor(fps, images, runCallback){
		window.fps = fps
		this.images = images
		this.runCallback = runCallback
		this.scene = null
		this.actions = {}
		this.keydowns = {}
		this.rotation = 0

		this.canvas = document.querySelector('#id-canvas')
		this.context = this.canvas.getContext('2d')

		var self = this

		//events
		window.addEventListener('keydown', function(event) {
			self.keydowns[event.key] = 'down'
		})

		window.addEventListener('keyup', function(event) {
			self.keydowns[event.key] = 'up'
		})

		this.init()
	}

	static instance(...args) {
		this.i = this.i || new this(...args)
		return this.i
	}

	init() {
		var g = this
		var loads = []
		//载入所有图片
		var names = Object.keys(g.images)
		for (var i = 0; i < names.length; i++) {
			let name = names[i]
			var path = g.images[name]
			let img = new Image()
			img.src = path
			img.onload = function() {
				//存入g.images
				g.images[name] = img
				loads.push(1)
				if(loads.length == names.length){
					g.__start()
				}
			}
		}
	}

	update() {
		this.scene.update()
	}

	draw() {
		this.scene.draw()
	}

	drawImage(guaImg) {
		this.context.drawImage(guaImg.texture, guaImg.x, guaImg.y)
	}

	registerAction(key,callback) {
		this.actions[key] = callback
	}

	runloop() {
		var g = this
		//event
		var actions = Object.keys(g.actions)
		for(var i = 0; i < actions.length; i++){
			var key = actions[i]
			var status = g.keydowns[key]
			if (status === 'down') {
				g.actions[key]('down')
			}
			else if (status === 'up') {
				g.actions[key]('up')
				g.keydowns[key] = null
			}
		}	
		//update
		g.update()
		//clear
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
		//draw
		g.draw()
		//next run loop
		setTimeout(function(){
			g.runloop()
		},1000/window.fps)		
		
	}

	textureByName(name) {
		var img = this.images[name]
		return img
	}

	runWithScene(scene) {
		var g = this
		this.scene = scene
		//开始运行程序
		setTimeout(function(){
			g.runloop()
		},1000/window.fps)
	}

	replaceScene(scene) {
		this.scene = scene
	}

	__start() {
		this.runCallback(this)			
	}

}
