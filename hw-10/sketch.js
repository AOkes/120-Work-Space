let slinkies = [];
let t = 0;

function setup(){
    createCanvas( windowWidth, 800 );

    // create a bunch of random, sine movement slinkies
    for (var i = 0; i < 20; i++) {

        // add new slinky objs to the array
        slinkies.push(
            {
                period: { x: random(60, 240), y: random(60, 240) },
                maxSize: random(4),
                maxDist: {
                    x: random(width/2),
                    y: random(height/2)
                },
                pos: {
                    x: random(width),
                    y: random(height)
                }
            } // <- end slinky obj
        ); // end array push
    } // end for loop
}

function draw() {
    // set the background to 'white'
    background(0, 0, 0, 10 );

    // determine the number of slinkies to draw in the array
    // based on mouse position
    // i.e. left=0 - right=all
    let numToDraw = map( mouseX, 0, width, 1, slinkies.length );
    for ( let i = 0; i < numToDraw; i++ ) {
        // draw the slinkies
        drawSlinky( slinkies[i], t );
    }

    // increment time for the sine wave functions
    t++;

}

/* Draws a Slinky */
function drawSlinky( slinkies, time ) {
    // determine the value of individual sine wave functions
    let x = sinePos( slinkies.period.x, time );
    let y = sinePos( slinkies.period.y, time );

    let pos_x = x * slinkies.maxDist.x + slinkies.pos.x;
    let pos_y = y * slinkies.maxDist.y + slinkies.pos.y;

    // draw a slinky based on object data
    slinkyPlacement(
        pos_x,
        pos_y,
        x * slinkies.maxSize,
        y * slinkies.maxSize
    );
}


/* Slinky Function */
function slinkyPlacement( pos_x, pos_y, scale_x, scale_y ) {
    push(); // <- Begin sandbox

    // 1. scale and position smiley face
    translate( pos_x, pos_y );
    scale( scale_x, scale_y );

    // 2. draw slinky
    stroke( random(255), random(255), random(255) );
    noFill();
    ellipse( 0, 0, 100 );

    pop(); // <- End sandbox
}


/* sine function */
function sinePos( timeScale, time ) {
    let val = sin( TWO_PI * time/timeScale );
    return val;
}
