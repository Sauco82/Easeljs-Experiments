(function (window) {
	function Hero(image) {
		this.initialize(image);
	}
 	Hero.prototype = new createjs.Sprite();
 	Hero.prototype.Sprite_initialize = Hero.prototype.initialize;


 	Hero.prototype.initialize = function (image) {
 		var spriteSheet = new createjs.SpriteSheet({
 			framerate: 2,
 			images: [image],
 			frames: {
 				width: 64,
 				height: 94,
 				count:12
 			},
 			animations: {
 				down: [0,2],
 				up: {frames:[3,5]},
 				left: [6,8],
 				right: [9,11],
 				down_idle: {frames:[1]},
 				up_idle: {frames:[4]},
 				left_idle: {frames:[7]},
 				rigth_idle: {frames:[10]}
 			}
 		});
 		
 		this.Sprite_initialize(spriteSheet);
 		this.name = 'Hero';
 		this.snapToPixel = true;

 		this.gotoAndPlay("left_idle");   
 	}	

 	window.Hero = Hero;
} (window));