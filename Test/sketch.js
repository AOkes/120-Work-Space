function setup() {
    // create a canvas to draw on
    createCanvas( 600, 800 );
}

function draw() {

    // background
    background( 'rgb(119, 255, 255)' );

    /* ***************************** */
    /* MAIN SANDBOX */
    /* ***************************** */
    push();

    // set the grid center( x:0, y:0 )
    // to canvas center
    translate( 300, 400 );


    /* ***************************** */
    /* ARMS */
    /* ***************************** */
    push();
    translate( 0, -55 );

    // left arm
    stroke( 0 );
    strokeWeight( 50 );
    line( -140, 0, -200, -100 );
    line( -200, -100, -200, -200 );

    // hand
    stroke( 'rgb(0, 94, 0)' );
    strokeWeight( 75 );
    point( -200, -200 );

    // right arm
    stroke( 0 );
    strokeWeight( 50 );
    line( 140, 0, 200, -100 );
    line( 200, -100, 200, -200 );

    // hand
    stroke( 'rgb(0, 94, 0)' );
    strokeWeight( 75 );
    point( 200, -200 );

    pop(); // ARMS END


    /* ***************************** */
    /* BODY */
    /* ***************************** */
    push();
    // main shirt rectangle
    fill( 'rgb(150, 0, 0)' );
    rect( -150, -100, 300, 300 );

    fill( 'rgb(0, 150, 0)' )
    triangle(-90, -100, 0, 0, 90, -100);

    pop(); // BODY END!


    /* ***************************** */
    /* LEGS */
    /* ***************************** */
    push();
    translate( 0, 200 );

    // left leg
    fill( 'rgb(0, 0, 150)' );
    triangle( -130, 0, 0, 0, -150, 500 );
    // right leg
    scale( -1, 1 );
    triangle( -130, 0, 0, 0, -150, 500 );
    pop(); // LEGS END


    /* ***************************** */
    /* HEAD */
    /* ***************************** */
    push();
    translate( 0, -175 );

    fill( 'rgb(0, 94, 0)' );
    ellipse( 0, 0, 330, 200 );

    // mouth
    fill( 0 );
    arc(0, 50, 250, 60, radians(350), radians(185), PIE);

    //left fang
    fill(255)
    triangle( -50, 75, -55, 45, -30, 47 );

    //right fang
    triangle( 50, 75, 55, 47, 30, 49 );

    // nose
    fill(0)
    triangle( 0, -20, 30, 20, -30, 20 );

    // eyes
    // left
    push();
    translate( -60, -40 );

    fill(255);
    ellipse( 0, 0, 60, 35 );
    noFill();
    fill( 'rgb(255, 0, 0)' );
    ellipse( 0, 0, 30 );
    fill( 0 );
    ellipse( 0, 0, 20 );

    fill(0);
    quad( 40, 0, 35, -20, -50, -35, -45, -15 );
    pop();

    // right
    push();
    translate( 60, -40 );

    fill(255);
    ellipse( 0, 0, 60, 35 );
    noFill();
    fill( 'rgb(255, 0, 0)' );
    ellipse( 0, 0, 30 );
    fill( 0 );
    ellipse( 0, 0, 20 );

    fill(0);
    quad( -40, 0, -35, -20, 50, -35, 45, -15 );
    pop();

    pop(); // HEAD END




    pop();
}
