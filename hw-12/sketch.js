// Blizzard
// Aidan Okes


// create a variable for the snow
let snow = [];
const numOfSnow = 200;

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, 800);

    // create a new snow of class type "Snow"
    let init_x = 60;
    let init_y = 60;
    for (let i = 0; i < numOfSnow; i++) {
        snow.push(new Snow(init_x, init_y));
        // moves the starting position over
        init_x += 100;
        if (init_x > width) {
            init_x = 60;
            init_y += 100;
        }
    }
}

function draw() {
    background('rgb(0, 0, 0)');

    for (let i = 0; i < snow.length; i++) {
        snow[i].snowCheck(snow, i);
        snow[i].edgeCheck();
        snow[i].move();
        snow[i].display();
    }
}






//////////////////////////////////////////////////
//      Snow Class
//////////////////////////////////////////////////
class Snow {
    constructor(x, y, size) {
        this.color = 'white';
        this.size = random(5, 30);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-10, 10);
        this.deltaY = random(-10, 10);
    }

    display() {
        push();
        noStroke();
        fill(this.color);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        // check if snow hits vertical wall
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
        }
        // check if snow hits horizontal wall
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
        }
    }


    snowCheck(otherSnow, myId) {
        for (let n = 0; n < otherSnow.length; n++) {
            if (n != myId) {
                let d = dist(this.posX, this.posY, otherSnow[n].posX, otherSnow[n].posY);
                let combinedR = this.rad + otherSnow[n].rad;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;


                }
            }
        }
    }
}
