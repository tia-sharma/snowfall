class Snow{
    constructor(x,y,w,h){
        var options={
            restitution:0.4
        }
    

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width=width;
        this.height=height;
        this.image = loadImage("snow5.webp");
        World.add(world,this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image, this.body.position.x, this.body.position.y,20,20);
        //this.image.scale=0.5;
        //fill(this.color)
        pop();
    }
}