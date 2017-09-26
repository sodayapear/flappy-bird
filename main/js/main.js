	var enableDebugMode = function(game, enable) {
		if(!enable){
			return
		}
		// 控制速度,搭配页面input调试
		document.querySelector('#id-input-speed').addEventListener('input', function(){
			var input = event.target
			//log(event, input.value)
			window.fps = new Number(input.value)
		})
	}
		
	var __main = function() {

		var images = {
			title: 'img/title.png',
			ready: 'img/ready.png',
			end: 'img/end.png',
			prompt: 'img/prompt.png',
			panel: 'img/scorepanel.png',
			playbtn: 'img/play.png',
			bg: 'img/background.png',
			b0: 'img/bird1.png',
			b1: 'img/bird2.png',
			b2: 'img/bird3.png',
			ground: 'img/ground.png',
			pipe: 'img/pipe.png',
		}
		var game = GuaGame.instance(30, images, function(g){
			//var s = new Scene(g)
			var s = new SceneTitle(g)
			g.runWithScene(s)

		})
		
		//enableDebugMode(game, true)			
	}
	__main()