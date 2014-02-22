var stage, circle, background, pressedKeys;

function init() {
	var backgroundImage = new Image();
	backgroundImage.onload = onImageLoaded;
	backgroundImage.src = 'assets/background.jpg';

	stage = new createjs.Stage("demoCanvas");
	
	
	function onImageLoaded(e) {
		background = new createjs.Bitmap(backgroundImage);
		stage.addChild(background);
		stage.addChild(circle);
	}

	circle = new createjs.Shape();
	circle.graphics.beginFill("red").drawCircle(0, 0, 40);
	circle.y = 50;

	document.onkeydown = handleKeyDown;


	// Stage will pass delta when it calls stage.update(arg)
	// which will pass them to tick event handlers for us in time based animation.
	circle.on("tick", function(event) {
        var tickerEvent = event.params[0];
        var delta = tickerEvent.delta;
        circle.x += delta/1000*100;
        if (circle.x > stage.canvas.width) { circle.x = 0; }
    });
	
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

