class Bob{
  
    constructor(x,y){  
   
     var options = { 
      isStatic : false,
      restitution : 0.3,
      friction : 0.5,
      density : 1.2
     } 
    
     this.body = Matter.Bodies.circle(x,y,20,options);
     World.add(world, this.body);
  
    }

  display(){
    push();
    fill("white")
    circle(this.body.position.x,this.body.position.y,40)
    pop();
  }
}