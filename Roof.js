class Roof {
    constructor(x,y,width,height) {
        var Property = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(x,y,width,height,Property)
        this.width = width
        this.height = height
        World.add(world, this.body)
        this.cclor = 'red'
    }

    display(){
        var pos =this.body.position
        push()
            rectMode(CENTER)
            fill(this.cclor)
            rect(pos.x, pos.y, this.width, this.height)
        pop()
    }
}