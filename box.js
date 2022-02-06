class Box{
    constructor(x,y,w,h) {
        this.options = {
            restitution:1,
            isStatic:false,
            density:0.2,
            friction:50
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,this.options);
        World.add(world,this.body);

    }
    
    display() {

        var recBodyposition = this.body.position;
        var recAngle = this.body.angle;

        push();
        translate(recBodyposition.x,recBodyposition.y);
        stroke("white");
        strokeWeight(1);
        rectMode(CENTER);
        rotate(recAngle);
        rect(0,0,this.w,this.h);
        pop();
        
    }
} 
