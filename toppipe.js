class tPipe{
    constructor(x,y){
        var options={
         friction: 1, 
         density: 1, 
         restitution: 0.8,
         isStatic: true
     }
    
     this.image2 = loadImage("Pipes1.png"); 
     this.body = Bodies.rectangle(x,y,10, 10, options); 
     World.add(world, this.body); 
    }
    display(){
        imageMode(CENTER); 
        push(); 
        translate(this.body.position.x, this.body.position.y); 
        rotate(this.body.angle); 
        image(this.image2, this.body.position.x, this.body.position.y, 50, 200); 
        pop(); 
     }
    }