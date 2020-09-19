class Dustbin {
     constructor(x,y){
    this.x =x;
    this.y =y;
    this.dustbinWidth = 200;
    this.dustbinHeight = 230;
    this.wallThickness = 20;

    this.Image=loadImage("dustbingreen.png")
    this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth,  this.dustbinHeight, this.wallThickness,{isStatic:true})
    this.leftWallBody=Bodies.rectangle(this.x-this.dustbinwidth/2, this.y-this.dustbinheight/2,  this.dustbinHeight, this.wallThickness,{isStatic:true})
    this.rightWallBody=Bodies.rectangle(this.x+this.dustbinwidth/2, this.y-this.dustbinheight/2,  this.dustbinHeight, this.wallThickness,{isStatic:true})

    World.add(world,this.bottomBody)
    World.add(world,this.leftWallBody)
    World.add(world,this.rightWallBody);
     }

    display(){

    var posBottom = this.bottomBody.position;
    var posLeft = this.leftWallBody.position;
    var posRight = this.rightWallBody.position;

    push()
    translate(posLeft.x, posLeft.y);
    rectMode(CENTER)
    angleMode(RADIUS)
    fill(255)
    rotate(this.angle)
    pop()
    
    push()
    translate(posRight.x, posRight.y);
    rectMode(CENTER)
    angleMode(RADIUS)
    fill(255)
    rotate(this.angle)
    pop()
    }
}