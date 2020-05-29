class Ball {
    constructor(x,y,radius){        
      this.body = Bodies.circle(x,y,radius);
      this.radius = radius;
      World.add(world,this.body);
  }
    
    MoveWithMouse(){
       this.body.position.x = mouseX;
       this.body.position.y = mouseY;
  
    }
  
    display() {
      var pos = this.body.position;
          push();
          translate(pos.x,pos.y);
          fill("brown");
          ellipse(0,0,this.radius*2);
          pop();
      }
     
    }