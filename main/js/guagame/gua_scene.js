class GuaScene {
	constructor(game) {
		this.game = game
		this.debugModeEnabled = true 
		this.elements = []

	}
	addElement(img) {
		img.scene = this
		this.elements.push(img)
	}
	draw() {
		for (var e of this.elements){
			//var e = this.elements[i]
			if (e.draw) {
				e.draw()				
			}
		}
	}
	update() {
		if(this.debugModeEnabled){
			for (var i = 0; i < this.elements.length; i++){
				var e = this.elements[i]
				if (e.debug) {
					e.debug()				
				}
			}
		}
		for (var i = 0; i < this.elements.length; i++){
			var e = this.elements[i]
			if (e.update) {
				e.update()				
			}
		}
	}
}

