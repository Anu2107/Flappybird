class bPipe{
    constructor(x,y){
        var options={
         friction: 1, 
         density: 1, 
         restitution: 0.8,
         isStatic: true
     }
     this.image1 = loadImage("Pipes2.png"); 
     this.body = Bodies.rectangle(x,y,10, 10, options); 
     World.add(world, this.body); 
    }
    display(){
        imageMode(CENTER); 
        push(); 
        translate(this.body.position.x, this.body.position.y); 
        rotate(this.body.angle); 
        image(this.image1, this.body.position.x, this.body.position.y, 50, 120); 
        pop(); 
     }
    }