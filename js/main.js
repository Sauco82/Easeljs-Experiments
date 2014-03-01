var BACKGROUND = 'assets/background.jpg',
 	CHAR = 'assets/char.png';

function _game() {
	window.Game = this;
	var self = this,
		stage,
		hero,
		assets = [],
		requestedAssets = 0,
		loadedAssets = 0;

	this.initializeGame = function() {
		var canvas = document.getElementById("demoCanvas");

		stage = new createjs.Stage("demoCanvas");

		background = new createjs.Bitmap(assets[BACKGROUND]);
		stage.addChild(background);

		hero = new Hero(assets[CHAR]);
		hero.x = canvas.width/2
		hero.y = canvas.height/2;
		stage.addChild(hero);	
		document.onkeydown = self.handleKeyDown;

		createjs.Ticker.on("tick", self.tick);
	}
	
	this.loadResources = function() {
		this.loadImage(CHAR);
		this.loadImage(BACKGROUND);
	}
	
	this.loadImage = function(assetSource) {
		var img = new Image();
		img.onload = self.onLoadedAsset;
		img.src = assetSource;

		assets[assetSource] = img;

		++requestedAssets;
	}
	
	this.onLoadedAsset = function(e) {
		++loadedAssets;
		if ( loadedAssets == requestedAssets ) {
			self.initializeGame();
		}
	}
	
	this.tick = function(event) {
	    stage.update(event);
	}

	this.handleKeyDown = function(event) {
		var key = event.keyCode;

		if (key == 65 || key == 37 ) {  //left
			background.x-= 5;
		} 
		if (key == 68 || key == 39 ) { //right
			background.x+= 5;
		} 
		if (key == 83 || key == 38 ) { //up
			background.y-= 5;
		} 
		if (key == 87 || key == 40 ) { //down
			background.y+= 5;
		}

		console.log(key)
	}

	self.loadResources();	
}

new _game();