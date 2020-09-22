class Bob {
    constructor (x, y) {
        var options = {
            friction : 0.2,
            isStatic : false,
            restitution : 0.7,
            density : 0.5
        }

        this.body = Bodies.circle(x,y,30,options);
        this.radius = 30;

        World.add(world, this.body);
    }

    display() {
        push();
        fill("pink");
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius, this.radius);
        pop();
    }
}