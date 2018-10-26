// Setting Canvas
var canv 	= document.getElementById('canvas'),
	ctx 	= canv.getContext('2d');

// Setting context
canv.width = window.innerWidth;
canv.height = window.innerHeight;
ctx.strokeStyle = '#127cd4';
ctx.lineWidth = 2;

// Painting background
ctx.fillStyle = '#c6e2ff';
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);


// Starting point
var x0 = 300, y0 = 250;
ctx.beginPath();
ctx.moveTo(x0, y0);

// Current position
var xc = x0, yc = y0;
var ca = 0; // current angle


function koch(a, n){
	/*
	a - length
	n - number of koha iterations
	*/
	if (n > 0){
		koch(a / 3, n - 1);
		ca = ca - (Math.PI/3);
		koch(a / 3, n - 1);
		ca = ca + ((Math.PI*2)/3);
		koch(a / 3, n - 1);
		ca = ca - (Math.PI/3);
		koch(a / 3, n - 1);
	} else {
		ctx.lineTo(xc + a * Math.cos(ca), yc + a * Math.sin(ca));
		xc = xc + a * Math.cos(ca);
		yc = yc + a * Math.sin(ca);
		ctx.stroke();
	}
}

// Drawing snowflake
for (var i = 0; i < 3; i++){
	koch(400, 4);
	ca = ca + ((Math.PI*2)/3);
}

// Painting snowflake

ctx.closePath();
ctx.fillStyle = '#f0f8ff';
ctx.fill();
