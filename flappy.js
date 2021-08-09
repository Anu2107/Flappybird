class flappy{
   constructor(x,y){
       var options={
        friction: 1, 
        density: 1, 
        restitution: 0.8,
        isStatic: true
    }
    this.image1 = loadImage("FlappyAlive.png"); 
    this.image2 = loadImage("FlappyDead.png"); 
    this.body = Bodies.rectangle(x,y,100, 100, options); 
    World.add(world, this.body); 
   }
   display(){
       imageMode(CENTER); 
       push(); 
       translate(this.body.position.x, this.body.position.y); 
       rotate(this.body.angle); 
       image(this.image1, this.body.position.x, this.body.position.y, 100, 100); 
       pop(); 
    }








}