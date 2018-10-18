
//creates the canvas for the drawing
function setup() {
    createCanvas(windowWidth, 400);
    strokeWeight(4);
}
//begins for loops
function draw() {
    background(200);
//row 1
    for (let i = 20; i < 1200; i += 60) {
        fill( 'rgb(0, 150, 0)' );
        ellipse(i, 40, 60, 80);
        fill( 'rgb(200, 20, 0)' );
        rect(i, 40, 60, 80);
        fill( 'rgb(0, 0, 150)' );
        ellipse(i, 40, 40, 20);
    }
//row2
    for (let i = 20; i < 1200; i += 60) {
        fill( 'rgb(0, 150, 0)' );
        ellipse(i, 100, 60, 80);
        fill( 'rgb(200, 20, 0)' );
        rect(i, 100, 60, 80);
        fill( 'rgb(0, 0, 150)' );
        ellipse(i, 100, 40, 20);
    }
//row3
    for (let i = 20; i < 1200; i += 60) {
        fill( 'rgb(0, 150, 0)' );
        ellipse(i, 160, 60, 80);
        fill( 'rgb(200, 20, 0)' );
        rect(i, 160, 60, 80);
        fill( 'rgb(0, 0, 150)' );
        ellipse(i, 160, 40, 20);
    }
//row4
    for (let i = 20; i < 1200; i += 60) {
        fill( 'rgb(0, 150, 0)' );
        ellipse(i, 220, 60, 80);
        fill( 'rgb(200, 20, 0)' );
        rect(i, 220, 60, 80);
        fill( 'rgb(0, 0, 150)' );
        ellipse(i, 220, 40, 20);
    }
}
