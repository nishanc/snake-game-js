var s;  //Snake object
var scl = 20; //Scale of snake
var food; //Objects that the snake will try to collide
function setup(){
	createCanvas(500,500);
	s = new Snake();
	frameRate(10); //p5 function for frame rate
	//food = createVector(random(width),random(height));
	pickLocation(); 
}
function pickLocation(){ // Create the grid on the canvas, so it picks a location on the grid
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)),floor(random(rows))); //Create food on a random location in the canvas
	food.mult(scl);
}
function draw(){
	background(51);

	if(s.eat(food)){
		pickLocation();
	}
	s.death();
	s.update();
	s.show();

	fill(0,200,0); //Fill color for food
	rect(food.x,food.y,scl,scl); // Create food on canvas

}
function keyPressed(){ //p5 function to get key press event
	if (keyCode === UP_ARROW) {
		s.dir(0,-1); //0 on X, -1 on Y (up)
	}else if (keyCode === DOWN_ARROW) {
		s.dir(0,1);
	}else if (keyCode === RIGHT_ARROW) {
		s.dir(1,0);
	}else if (keyCode === LEFT_ARROW) {
		s.dir(-1,0);
	}
}