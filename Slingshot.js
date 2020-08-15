class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.sling1 = loadImage("sprites/stick1.png");
        this.sling2 = loadImage("sprites/stick2.png");
        this.sling3 = loadImage("sprites/stick3.png");


        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.stick);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.stick1,200,20);
        image(this.stick2,170,20);
        if(this.sling.bodyA){
            var pointA = this.stick.bodyA.position;
            var pointB = this.pointB;
            push(); 
            stroke(48,22,8);
            
            if(pointA.x < 220){
                strokeWeight(7); 
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x-30, pointB.y-3);
                image(this.stick3,pointA.x-30,pointA.y-10,15,30);   
            }
            else{
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.stick3,pointA.x+25,pointA.y-10,15,30); 
            }

            
            pop(); 
        }
    }
    
}