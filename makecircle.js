var canvas = document.getElementById('canvas');
var shrinkButton = document.getElementById('shrink');
var bounceButton = document.getElementById('bounce');
var stopButton = document.getElementById('stop');
var clear = document.getElementById('clear');


var ctx = canvas.getContext('2d');
var pen = 0;
var requestID;

var shrink = function(){

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
shrinkButton.addEventListener('click', shrink);

//var posX = 250;
//var posY = 250;
var bounce = function(){
    window.cancelAnimationFrame(requestID);
    var posX = 250;
    var posY = 250;
    var radius = 20;
    var moveX = Math.floor(Math.random()*10)+1;
    var moveY = Math.floor(Math.random()*10)+1;
    
    var draw = function(){
	clearCanvas();
	
	ctx.strokeStyle="pink";
	ctx.fillStyle="lightblue";
	ctx.arc(posX, posY, radius, 0, 2*Math.PI);
	ctx.fill();
	ctx.stroke();
	
	posX += moveX;
	posY += moveY;
	
	//bottom
	if (posY >= canvas.height-radius){
	    moveY = -moveY;
	}

	//right
	if (posX >= canvas.width-radius){
	    moveX = -moveX;
	}

	//left
	if (posX <= 0+radius){
	    moveX = -moveX;
	}

	//top
	if (posY <= 0+radius){
	    moveY = -moveY;
	}
	
	requestID = window.requestAnimationFrame( draw );
	console.log(requestID);
    }
    draw();
    
}
bounceButton.addEventListener('click', bounce);

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
