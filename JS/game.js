    up=innerHeight/20;
    down=innerHeight-10;  
    let b = new Ball(innerWidth/2, innerHeight/2,30,4,up,down);
    let player1 = new player(1,down/2,100,1230,up,down);
    let player2 = new player(2,down/2,100,1230,up,down);
class Game{
    constructor(){ 
    }
    display(){
        fill(0);
        rect(width,up,height,down);
        this.showScore();
        b.display();
		player1.display();
		player2.display();
        this.score();
    }
    score(){
        if(b.getX()<player1.getX()){
            player2.setScore(1);
            this.restart();
        }
       if(b.getX()>player2.getX()){
            player1.setScore(1);
            this.restart();
        }    
}
    showScore(){
        textSize(50);
        text(player1.getScore(), 300, 50);
        text(player2.getScore(), 1000, 50);
    }   
    restart(){
    b.setX(innerWidth/2);
    b.setY(innerHeight/2);
    player1.pos();
    player2.pos();
    }   
}