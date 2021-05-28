

class Launcher{
  constructor(bodyA, point){
      var options = {
          bodyA: bodyA,
          pointB: point,
          stiffness: 0.04,
          length: 10
      }
      this.launcher = Constraint.create(options);
      World.add(world, this.launcher);
      this.pointB = point
  }

  display(){
      if (this.launcher.bodyA) {
          var pointA = this.launcher.bodyA.position;
          var pointB = this.pointB;
          strokeWeight(4);
          line(pointA.x, pointA.y, pointB.x, pointB.y); 
      }
   
  }

  fly() {
      this.launcher.bodyA = null
  }
  attach(body) {
    this.launcher.bodyA = body
  }
}
