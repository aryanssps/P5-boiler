class Bug {
    constructor(x,y,width,height){

        var options={
            restitution:1,
            
            friction:0.3,

            density:1

        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    } 
  display(){ 
      var angle=this.body.angle
      var pos=this.body.position
      push ();
      translate(pos.x,pos.y)
      rotate (angle);
      rectMode(CENTER)
      strokeWeight(4)
      stroke("green")
      fill("yellow")
      rect(0,0,this.width,this.height)
      pop ();
  }
}