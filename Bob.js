class Bob
{
    constructor(x,y,radius)
	{
		var property = 
		{
			'isStatic': true,
			'restitution': 0,
			'friction': 0,
			'density': .8

		}
		this.x = x
		this.y = y
		this.radius = radius
		this.body = Matter.Bodies.circle(this.x,this.y,this.radius/2,property)
        World.add(world,this.body)
		this.color = 'green'
		
	}

    
	display()
	{
        
		
		var Bob_Pos = this.body.position
		push()
			translate(Bob_Pos.x,Bob_Pos.y)
			fill(this.color)
			circle(0,0,this.radius)
		pop()
	}
}