var startButton;
var player;
var enemies = [];
var dots = [];
var lives;
var score;
var enemy;
var playerLeft
var playerRight;
var heart;
var gameStarted;

function preload()
{
  // load in enemy images
  enemy = loadImage('img/enemy.png');

  // load in player images
  playerLeft = loadImage('img/playerleft.png');
  playerRight = loadImage('img/playerright.png');

  // load in heart image
  heart = loadImage('img/heart.png');
}

function setup()
{
  // set canvas size
  createCanvas(800, 400);


  player = new Player();

  // default lives and score values
  lives = 3;
  score = 0;

  // create clear button
  startButton = createButton('Start Game');
  startButton.position(375, 200);
  startButton.mousePressed(startGame);

  // set gameStarted equal to false
  gameStarted = false;

}

function draw()
{
  background(0);

  if(gameStarted = true)
  {

    // hide start button
    startButton.hide();

    // display score
    fill(200);
    noStroke();
    textSize(24);
    text("Score: " + score, 30, 50);

    // display number of lives
    switch(lives)
    {
      case 3:
        image(heart, 650, 30);
        image(heart, 690, 30);
        image(heart, 730, 30);
      break;
      case 2:
        image(heart, 690, 30);
        image(heart, 730, 30);
      break;
      case 1:
        image(heart, 730, 30);
      break;
    }

    // display player
    player.display();

    // random enemy hatching
    var enemyHatch = Math.ceil(random(30));
    if(enemyHatch == 1)
    {
      enemies.push(new Enemy());
    }

    // random dot hatching
    var dotHatch = Math.ceil(random(30));
    if(dotHatch == 1)
    {
      dots.push(new Dot());
    }

    // loop through each enemy
    for (var i=0; i<enemies.length; i++)
    {
      // display enemy
      enemies[i].display();

      // check if enemy reaches bottom of the screen
      if(enemies[i].ypos > 500)
      {
        // remove enemy
        enemies.splice(i, 1);

      } else {

        // check if player is touching enemy
        var d1 = dist(enemies[i].xpos, enemies[i].ypos, player.xpos, player.ypos);
        if(d1 < 50)
        {
          // remove enemy
          enemies.splice(i, 1);

          // decrease lives by one
          lives --;

        }
      }
    }

    // loop through each dot
    for (var j=0; j<dots.length; j++)
    {
      // display dots
      dots[j].display();

      // check if dot reaches bottom of screen
      if(dots[j].ypos > 500)
      {
        // remove dot
        dots.splice(j, 1);

      } else {

        // check if player is touching dot
        var d2 = dist(dots[j].xpos, dots[j].ypos, player.xpos, player.ypos);
        if(d2 < 25)
        {
          // remove dot
          dots.splice(j, 1);

          // increase score by one
          score++;

        }
      }
    }

    // check for game over
    if(lives <= 0)
    {
      // reset lives and score
      lives = 3;
      score = 0;

      // reset player's position
      player.xpos = 400;
      player.direction = "stopped";

      // remove enemies and dots
      enemies = [];
      dots = [];


      // set gameStarted to false
      gameStarted = false;
    }

  } else {

    // show start button
    startButton.show();

  }
}

function startGame()
{
  // change gameStarted variable
  gameStarted = true;

}

function keyPressed()
{
  // if the right arrow was pressed
  if(keyCode == RIGHT_ARROW)
  {
    // change player's direction property
    player.direction = 'right';
  }

  // if the left arrow was pressed
  if(keyCode == LEFT_ARROW)
  {
    // change player's direction property
    player.direction = 'left';
  }
}

///////////////////////////////////////////
// Player CLASS
///////////////////////////////////////////

function Player()
{
  // set default properties
  this.xpos = 400;
  this.ypos = 350;
  this.speed = 4;
  this.direction = "stopped";

  // counter will determine which player sprite to display (1, 2 or 3)
  this.counter = 1;
}

Player.prototype.display = function()
{
  // check for every fifth frame
  // is the current frameCount divisible by 5?
  if(frameCount % 5 === 0)
  {
    // if the counter is equal to 3, reset counter by setting it equal to 1
    // otherwise, increment counter
    if(this.counter == 3)
    {
      this.counter = 1;
    } else {
      this.counter++;
    }
  }

  imageMode(CENTER);

  // if player is facing right
  if(this.direction == 'right')
  {
    // display the correct sprite image based on the counter
    switch(this.counter)
    {
      case 1:
        image(playerRight, this.xpos, this.ypos);
      break;
      case 2:
        image(playerRight, this.xpos, this.ypos);
      break;
      case 3:
        image(playerRight, this.xpos, this.ypos);
      break;
    }

    // move player to the right
    this.xpos = this.xpos + this.speed;
  }

  // if player is facing left
  if(this.direction == 'left')
  {
    // display the correct sprite image based on the counter
    switch(this.counter)
    {
      case 1:
        image(playerLeft, this.xpos, this.ypos);
      break;
      case 2:
        image(playerLeft, this.xpos, this.ypos);
      break;
      case 3:
        image(playerLeft, this.xpos, this.ypos);
      break;
    }

    // move player to the left
    this.xpos = this.xpos - this.speed;
  }

  // if player is just starting out and hasn't started moving yet
  if(this.direction == 'stopped')
  {
    image(playerLeft, this.xpos, this.ypos);
  }

  // wrap player if player reaches the edge of the screen
  if(this.xpos > 800)
  {
    this.xpos = 0;
  }
  if(this.xpos < 0)
  {
    this.xpos = width;
  }
}

///////////////////////////////////////////
// ENEMY CLASS
///////////////////////////////////////////

function Enemy()
{
  // set default properties
  this.xpos = random(0, width);
  this.ypos = 0;
  this.speed = random(1, 4);
  this.type = Math.ceil(random(4));
}

Enemy.prototype.display = function()
{
  imageMode(CENTER);

  // show different color enemy based on it's random 'type' value
  switch(this.type)
  {
    case 1: image(enemy, this.xpos, this.ypos, 42, 44); break;
    case 2: image(enemy, this.xpos, this.ypos, 42, 44); break;
    case 3: image(enemy, this.xpos, this.ypos, 42, 44); break;
    case 4: image(enemy, this.xpos, this.ypos, 42, 44); break;
  }
  this.ypos = this.ypos + this.speed;
}

///////////////////////////////////////////
// DOT CLASS
///////////////////////////////////////////

function Dot()
{
  // set default properties
  this.xpos = random(0, 600);
  this.ypos = 0;
  this.speed = random(1, 4);
}

Dot.prototype.display = function()
{
  ellipseMode(CENTER);
  fill(200);
  noStroke();
  ellipse(this.xpos, this.ypos, 25, 25);
  this.ypos = this.ypos + this.speed;
}
