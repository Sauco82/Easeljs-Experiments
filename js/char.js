(function (window) {
	function Char(image) {
		this.initialize(image);
	}
 	Char.prototype = new Bitmap();
 	Char.prototype.Bitmap_initialize = Char.prototype.initialize;


 	Char.prototype.initialize = function (image) {
 		this.Bitmap_initialize(image);
 		this.name = 'Char';
 		this.snapToPixel = true;
 	}	

 	window.Char = Char;
} (window));