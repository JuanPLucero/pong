class player{
    constructor(player,yInicial,x1,x2,up,down){ 
        this.player=player;
        this.mov=5;
        this.heightt=100;
        this.Widthh=10;
        this.yInicial=yInicial;
        this.x1=x1;
        this.x2=x2;
        this.pos();
        this.score=0;
        this.up=up;
        this.down=down;
    }
    display(){
        fill('white');
		rect(this.x, this.y, 10,100);
		this.moveY();
		this.collision();   
	}
    collision(){
        if(this.y>=this.down-this.heightt){
			this.y=this.down-this.heightt;
		}
        if(this.y<=this.up){
            this.y=this.up;
        }
    }
    moveY(){
        if(this.player==1){
            if (keyIsDown(87)) {
                this.y+=-this.mov;
            } 
            if (keyIsDown(83)) {
                this.y+=this.mov;
            }
	    }else{
            if(this.player==2){
                if (keyIsDown(UP_ARROW)) {
                    this.y+=-5;
                } 
                if (keyIsDown(DOWN_ARROW)) {
                    this.y+=5;
                }
                
            } 
        }
    }
    pos(){
        if(this.player==1){
            this.x=this.x1;
            this.y=this.yInicial;
            
        }else{
            if(this.player==2){
                this.x=this.x2;
                this.y=this.yInicial;

            }
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

    getHeightt(){
        return this.heightt;
    }
    getWidthh(){
        return this.Widthh;
    }

    getScore(){
        return this.score;
    }

    setScore(point){
        this.score+=point;
    }
    getPlayer(){
        return this.player;
    }
}