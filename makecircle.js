var canvas = document.getElementById('canvas');
var stopButton = document.getElementById('stop');
var clear = document.getElementById('clear');
var toggle = document.getElementById('toggle');

var ctx = canvas.getContext('2d');
var pen = 0;
var requestID;

var animate = function(){

    window.cancelAnimationFrame(requestID);
    
    var posX = 250;
    var posY = 250;
    var radius = 0;
    var maxRad = 250;
    var grow = true;
    var draw = function(){
	clearCanvas();

	ctx.strokeStyle="pink";
	ctx.fillStyle="lightblue";
	ctx.arc(posX, posY, radius, 0, 2*Math.PI);
	ctx.fill();
	ctx.stroke();

	if (grow){
	    radius++;
	    if (radius >= maxRad){
		grow = !grow;
	    }
	}
	else{
	    radius--;
	    if (radius <= 1){
		grow = !grow;
	    }
	}
	requestID = window.requestAnimationFrame( draw );
	console.log(requestID);
	
    }
    draw();
}
canvas.addEventListener('click', animate);

var stopit = function(){
    window.cancelAnimationFrame(requestID);
}
stopButton.addEventListener( 'click', stopit )


var clearCanvas = function(e){
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
}
clear.addEventListener('click', clearCanvas);

var togglePen = function(e){
    if (pen == 0){
	pen = 1;
    }
    else{
	pen = 0;
    }
}
toggle.addEventListener('click', togglePen);
