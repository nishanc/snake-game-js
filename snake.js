	function Snake(){  //Constructor function 
		this.x = 0;
		this.y = 0;
		this.xspeed = 1; //Initial x speed
		this.yspeed = 0;
		this.total = 0; // Length of the snake
		this.tail = [];
		
		this.dir = function(x,y){ //Direction
			this.xspeed=x;
			this.yspeed=y;
		}

		this.eat = function(pos){
			var d = dist(this.x,this.y,pos.x,pos.y); // Check if food and snake are on the same location
			if (d<1) { // Distance less than 1 px
				this.total++; //If so length should be increased
				return true;
			} else {
				return false;
			}
		}
		this.death = function(){
			for (var i = 0; i<this.tail.length; i++) { // Loop every spot in the tail
				var pos= this.tail[i];
				var d = dist(this.x,this.y,pos.x,pos.y);
				if (d<1) {
					console.log('Game over!');
					this.total = 0;
					this.tail = [];
				}
			}
		}
		this.update = function(){
			// for (var i = 0; i < this.total-1; i++) {
			// 	 this.tail[i] = this.tail[i+1];
			// }
			if (this.total === this.tail.length) {
				for (var i = 0; i < this.tail.length-1; i++) {
					 this.tail[i] = this.tail[i+1]; //Shift everything over by 1
				}
			}
			this.tail[this.total-1] = createVector(this.x,this.y); //Create new rectangle at the last position, so will act as tail
			
			this.x += this.xspeed*scl; //Move on X axis with X Speed
			this.y += this.yspeed*scl;
			this.x = constrain(this.x,0,width-scl); //p5 function to constrain the snake object
			this.y = constrain(this.y,0,height-scl);
		}

		this.show = function(){
			fill(255,0,0); //White
			for (var i = 0; i < this.tail.length; i++) {
				 //this.tail[i] = this.tail[i+1];
				 rect(this.tail[i].x,this.tail[i].y,scl,scl);
			}
			//fill(255);
			// for (var i = 0; i < this.total; i++) {
			// 	 rect(this.tail[i].x,this.tail[i].y,scl,scl);
			// }
			rect(this.x,this.y,scl,scl); //Create a rectangle with specified scale
		}
	}