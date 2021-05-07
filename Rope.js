class Rope
{
    constructor(BodyA, BodyB, offsetX, offsetY)
    {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: BodyA,
            bodyB: BodyB,
            pointB: {x:this.offsetX,y:this.offsetY},
            stiffness: 0.2,
            length: 10
        }

        this.chain = Matter.Constraint.create(options)
        this.color = 'black'
        World.add(world, this.chain)
    }

    display()
    {
        push()
            strokeWeight(4)
            stroke(this.color)
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x + this.offsetX, this.chain.bodyB.position.y + this.offsetY)
        pop()
    }
}