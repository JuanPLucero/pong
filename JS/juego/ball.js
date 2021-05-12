class Ball {
	constructor(x, y, d,v,up,down){
		this.x=x;
		this.y=y;
		this.d=d;
		this.speedY=v;
		this.speedX=v;
		this.up=up;
		this.down=down;
	}
	display(){
		fill('white');
		circle(this.x, this.y, this.d);
		this.moveY();
		this.moveX();
		this.hasCollision();
	}
	rebotePlayer(jugador,playerY,playerHeightt){
		if(this.y>=playerY&&this.y<=playerY+(playerHeightt/3)){
			this.speedY*=-1;
			this.speedX*=-1;
		}else if(this.y>=playerY+(playerHeightt/3)&&
		this.y<=playerY+((playerHeightt/3)*2)){
			this.speedX*=-1;
		}else if(this.y>=playerY+((playerHeightt/3)*2)&&
		this.y<=playerY+playerHeightt){
			this.speedY*=-1;
			this.speedX*=-1;
		}
	}
	moveY(){
		this.y+=this.speedY;
	}
	collisionX(){
		if(this.x>=player2.getX()-(this.d/2)&&this.y>=player2.getY() && this.y<=(player2.getY()
		+player2.getHeightt())){
			this.rebotePlayer(player2.getPlayer(),player2.getY(),player2.getHeightt());	
		}
		if(this.x<=(player1.getX()+player1.getWidthh())+(this.d/2)&&this.y>=player1.getY() 
		&& this.y<=(player1.getY()+player1.getHeightt())){
			this.rebotePlayer(player2.getPlayer(),player1.getY(),player1.getHeightt());
		}
	}	
	moveX(){
		this.x+=this.speedX;
	}
	hasCollision(){
		this.collisionX();
		if(this.y>=this.down-(this.d/2) || this.y<=this.up+(this.d/2)){
			this.speedY*=-1;
		}	
	}
	getX(){
		return this.x;
	}
	setX(x){
		this.x=x;
	}
	getY(){
		return this.y;
	}
	setY(y){
		this.y=y;
	}
}				