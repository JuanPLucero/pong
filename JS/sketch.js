let juego= new Game();
let start = false
function setup(){
	createCanvas(windowWidth , windowHeight);
}
function draw(){
	background('black');
	if (start){
	stroke('white')
	strokeWeight(4);
	line(0, 80000, 650, 0);
	juego.display();
	}else{
		textSize(60);
		fill("WHITE")
		textAlign(CENTER)
		text("Press Enter", width/2, height/2);
		text("Player 1 up= W, down= S", width/2, height/2 +60);
		text("Player 2 = arrows", width/2, height/2 +120);
	}			
}
function keyPressed() {
	if (keyCode === ENTER) {
		start = true;
	}
}




