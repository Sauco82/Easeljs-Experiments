var stage,
 	background,
 	pressedKeys,
 	assets = [],
 	BACKGROUND = 'assets/background.jpg',
 	CHAR = 'assets/char.png';

function init() {
	var requestedAssets = 0,
		loadedAssets = 0;	

	stage = new createjs.Stage("demoCanvas");
		
	function loadResources() {
		loadImage(CHAR);
		loadImage(BACKGROUND);
	}
	
	function loadImage(assetSource) {
		var img = new Image();
		img.onload = onLoadedAsset;
		img.src = assetSource;

		assets[assetSource] = img;

		++requestedAssets;
	}
	
	function onLoadedAsset(e) {
		++loadedAssets;
		if ( loadedAssets == requestedAssets ) {
			initializeGame();
		}
	}


	function initializeGame() {
		background = new createjs.Bitmap(assets[BACKGROUND]);
		stage.addChild(background);		
	}
	

	document.onkeydown = handleKeyDown;
	loadResources();
	
	createjs.Ticker.on("tick", tick);
}

function tick(event) {
    stage.update(event);
}

function handleKeyDown(event) {
	var key = event.keyCode;

	if (key == 65 || key == 37 ) {  //left
		background.x--;
	} 
	if (key == 68 || key == 39 ) { //right
		background.x++;
	} 
	if (key == 83 || key == 38 ) { //up
		background.y--;
	} 
	if (key == 87 || key == 40 ) { //down
		background.y++;
	}


	console.log(key)
}

