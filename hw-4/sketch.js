function setup() {
    // creates a canvas to draw on
    createCanvas( 600, 800 );
}

function draw() {

    // background
    background( 'rgb(128, 128, 128)' );

    /* Work Space */
    push();

    // sets the grid center
    // to canvas center
    translate( 300, 400 );


    /* Arms */
    push();
    translate( 0, -55 );

    // left arm
    stroke( 'rgb(0, 94, 0)' );
    strokeWeight( 60 );
    line( -140, 0, -200, -100 );
    line( -200, -100, -200, -200 );

    // hand
    stroke( 'rgb(0, 94, 0)' );
    strokeWeight( 75 );
    point( -200, -200 );

    // right arm
    stroke( 'rgb(0, 94, 0)' );
    strokeWeight( 60 );
    line( 140, 0, 200, -100 );
    line( 200, -100, 200, -200 );

    // hand
    stroke( 'rgb(0, 94, 0)' );
    strokeWeight( 75 );
    point( 200, -200 );

    pop(); // End of arms


    /* Body section */
    push();
    // Shirt Rectangle
    fill( 'rgb(150, 0, 0)' );
    rect( -140, -100, 280, 300 );

    // Neck Triangle
    fill( 'rgb(0, 150, 0)' )
    triangle(-90, -100, 0, 0, 90, -100);

    pop(); // End of body


    /* Legs section */
    push();
    translate( 0, 200 );

    // left leg
    fill( 'rgb(0, 0, 150)' );
    triangle( -130, 0, 0, 0, -150, 700 );
    // right leg
    scale( -1, 1 );
    triangle( -130, 0, 0, 0, -150, 700 );
    pop(); // LEGS END


    /* Head Section */
    push();
    translate( 0, -175 );

    fill( 'rgb(0, 94, 0)' );
    ellipse( 0, 0, 280, 250 );

    // mouth
    fill( 0 );
    arc(0, 50, 200, 60, radians(350), radians(185), PIE);

    // left fang
    fill(255)
    triangle( -50, 75, -55, 45, -30, 47 );

    // right fang
    triangle( 50, 75, 55, 47, 30, 49 );

    // nose
    fill(0)
    triangle( 0, -20, 20, 20, -20, 20 );

    /* Eyes section */
    // left
    push();
    translate( -60, -40 );

    fill( 'rgb(255, 0, 0)' );
    ellipse( 0, 0, 60, 35 );
    // pupil
    fill( 0 );
    ellipse( 0, 0, 25, 35 );

    fill(0);
    quad( 40, 0, 35, -20, -50, -35, -45, -15 );
    pop();

    // right
    push();
    translate( 60, -40 );

    fill( 'rgb(255, 0, 0)' );
    ellipse( 0, 0, 60, 35 );
    // pupil
    fill( 0 );
    ellipse( 0, 0, 25, 35 );

    fill(0);
    quad( -40, 0, -35, -20, 50, -35, 45, -15 );
    pop();

    pop(); // End of head

    /* Portrait Name */
    push();
    // moves the text up
    translate( 0, -375 );
    textAlign(CENTER);
    textSize(40);
    textFont("Georgia");
    text("Zombie, by Aidan Okes", 0, 27);
    pop();




    pop();
}
