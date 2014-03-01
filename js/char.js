(function (window) {
	function Hero(image) {
		this.initialize(image);
	}

 	Hero.prototype.initialize = function (image) {
 		var data = {
 			framerate: 20,
 			images: [image],
 			frames: {
 				width: 65,
 				height: 94,
 				count:12
 			},
 			animations: {
 				down: [0,2],
 				up: [3,5],
 				left: [6,9],
 				right: [10,12]
 			}
 		}

 		this.spriteSheet = new createjs.SpriteSheet(data);
 		this.name = 'Hero';
 		this.snapToPixel = true;

 		this.up = new createjs.Sprite(this.spriteSheet, "up");
 	}	

 	window.Hero = Hero;
} (window));