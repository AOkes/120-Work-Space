//Let it Snow!
//By Aidan Okes


let snow = [];

//Sets up the canvas for the snow
function setup() {
    createCanvas(windowWidth, 400);
    let b = new Snow(width/2, height/2, 10);
    snow.push(b);
}

//Snow class declared to make the constructor
class Snow {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x;
        this.y = this.y + 1;
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, this.r * 1.5);
    }
}

//Creates snow wherever the mouse is dragged.
function mouseDragged() {
    let r = random(10, 20);
    let b = new Snow(mouseX, mouseY, r);
    snow.push(b);
}

//Draws the snow.
function draw() {
    background(0, 255, 255);
    for (let i = 0; i < snow.length; i++) {
        snow[i].move();
        snow[i].show();
    }
}
