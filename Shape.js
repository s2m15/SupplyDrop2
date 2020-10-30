class Shape {
    constructor(x,y,w,h) {
        var shapeProperty = {
            isStatic:true
        }
        this.shapeBody = Matter.Bodies.rectangle (x,y,w,h,shapeProperty)
        Matter.World.add(world,this.shapeBody)
        this.width = w
        this.height = h
    }
    display() {
        rectMode(CENTER)
        fill("green")
        rect(this.shapeBody.position.x,this.shapeBody.position.y,this.width,this.height)
    }
}