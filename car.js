class Car{
    constructor(x,y,width,height){
        this.x=x;
        this,y=y;
        this.width=width;
        this.height;
    }
    draw(animation){
        animation.beginPath();
        animation.rect(this.x-this.width/2,
            this.y=this.hiehgt/2,
            this.width,
            this.height
        );
        animation.fill();
    }
}