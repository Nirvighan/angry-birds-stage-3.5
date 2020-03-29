// create the slingshot class
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    //create the fly function
    fly()
    {
       this.sling.bodyA = null;


    }

    display(){
        //write the condition to make the constraint true if the bodyA is not equals to null
        if(this.sling.bodyA != null)
        {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}