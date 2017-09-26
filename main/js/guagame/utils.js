const e = sel => document.querySelector(sel)

const log = console.log.bind(console)

const imageFromPath = function(path) {
	var img = new Image()
	img.src = path
	return img
}
	
const aInb = function(a, b1, b2) {
	return a >= b1 && a <= b2
}
const collide = function(a,b) {
	if(aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)){
		if(aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)){
			return true
		}			
	}	
	return false
}
	
const randomBetween = function(start, end) {
	var n = Math.random() * (end - start + 1)
	return Math.floor(n + start)
}