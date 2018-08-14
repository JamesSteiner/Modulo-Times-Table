points = [];
var animate = false;
var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;


var centerY = height * .5,
		centerX = width * .5,
		mod = 2,
		num_points = 500,
		radius = height * .4,
		temp = 0,
		speed = 0.01;


render();

function render(){
	ctx.clearRect(0, 0, width, height);
	//Get Points:
	for (var i = 0; i < num_points; i++) {
		var x = centerX + Math.cos(i/num_points * Math.PI * 2) * radius,
		y = centerY + Math.sin(i/num_points * Math.PI * 2) * radius;
		points.push(new Point(x,y));
		// ctx.beginPath();								//this commented code just draws circles at points
		// ctx.arc(x, y, 2, 0, Math.PI*2, false);
		// ctx.fill();
	}

	for(var i = 0; i < num_points; i++) {
		var x2 = Math.round(mod*i+1) % num_points;
		ctx.beginPath();
		ctx.moveTo(points[i].x, points[i].y);
		if(x2 == num_points){
			x2 = 0;
		}
		ctx.lineTo(points[x2].x, points[x2].y);
		ctx.stroke();
	}

}

function animateMod(){
	
	if(animate == true) {
		ctx.clearRect(0, 0, width, height);
	//Get Points:
	// for (var i = 0; i < num_points; i++) {
	// 	var x = centerX + Math.cos(i/num_points * Math.PI * 2) * radius,
	// 	y = centerY + Math.sin(i/num_points * Math.PI * 2) * radius;
	// 	points.push(new Point(x,y));
	// 	// ctx.beginPath();								//this commented code just draws circles at points
	// 	// ctx.arc(x, y, 2, 0, Math.PI*2, false);
	// 	// ctx.fill();
	// }

	for(var i = 0; i < num_points; i++) {
		var x2 = Math.round(mod*i+1) % num_points;
		ctx.beginPath();
		ctx.moveTo(points[i].x, points[i].y);
		if(x2 == num_points){
			x2 = 0;
		}
		ctx.lineTo(points[x2].x, points[x2].y);
		ctx.stroke();
	}

	mod += speed
	
	requestAnimationFrame(animateMod);

	}
}

function setAnimate() {
	var button = document.getElementById("myButton");
	if(animate == true) {
		animate = false
		button.value = "Animate";
	}
	else {
		animate = true
		button.value = "Stop";
	}
	animateMod();
}

function Point(x, y) {
	this.x = x;
	this.y = y;
}
