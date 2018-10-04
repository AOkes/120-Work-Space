// Evolving Blob
let bgColor; // background-color
let centerX, centerY;
let blob = {};
blob.posx = 100;
blob.posy = 100;
blob.width = 150;
blob.height = 100;
blob.rand1 = 0;
blob.rand2 = 0;
let multMax = 0.00001;
let multDelta;
let mult;
let redFill = 255;
let alphaAmt = 40;
let alphaNoise;

// setup function for the bacground and blob
function setup() {
    bgColor = color(0, 0, 0);

    createCanvas(windowWidth, 800);
    background(bgColor);

    // Set initial position
    blob.posx = random(width);
    blob.posy = random(height);
    blob.width = blob.posx + 2;
    blob.height = blob.posy - 2;
}

//begins drawing the blob
function draw() {

    centerX = width * 0.5;
    centerY = height * 0.5;

    multDelta = noise(0.01 * frameCount + pow(2, 8));
    multDelta = map(multDelta, 0, 1, -0.0001, 0.0001);
    multMax = constrain(multMax + multDelta, 0.005, 0.2);
    mult = random(-multMax, multMax);
    blob.rand1 = abs(((width * mult) + blob.width) % width);
    mult = random(-multMax, multMax);
    blob.rand2 = abs(((height * mult) + blob.height) % height);


    mult = noise(frameCount * 0.001) * 255;
    randFill = constrain(mult, mult, mult);

    noStroke();
    // get a random noise value between (0-1)
    alphaNoise = noise(0.1 * frameCount + 1000);
    alphaNoise = map(alphaNoise, 0, 1, -2, 2);
    alphaAmt += alphaNoise;
    alphaAmt = constrain(alphaAmt, 20, 100);
    fill(randFill, 255 - randFill, 175, 30);

    ellipse(blob.posx, blob.posy, blob.width, blob.height);

    blob.posx = blob.width;
    blob.posy = blob.height;
    blob.width = blob.rand1;
    blob.height = blob.rand2;
}



/* Allows fullscreen */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(bgColor);
}

function mousePressed() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let fs = fullscreen();
        fullscreen(!fs);
    }
}
