/*******************************************************************************
*
* Program: Pong Game
*
* Description: This simple Pong Game is built to work on Khan Academy's 
* JavaScript IDE: khanacademy.org/computer-programming/new
*
* Link: khanacademy.org/computer-programming/pong-game/6244154876805120
*
* Author: Kevin Browne 
* 
* Contact: kevin.browne3@mohawkcollege.ca
*
*******************************************************************************/

// Create initial ball state
var ball = {x: 200, y: 50, width: 35, height: 35,
            x_speed: random(2,3), y_speed : random(2,3),
            red: 250, green: 150, blue: 50};
            
// Create initial paddle state
var paddle = {x: 200, y: 370, width: 100, height: 10,
              red: 0, green: 0, blue: 0};

// Initialize score to zero
var score = 0;

// draw function is called repeatedly, used to implement "game loop"
draw = function() {
    
    // Create a "blank all-white screen" to draw on
    background(255,255,255);
    
    // Update the ball position
    ball.x += ball.x_speed;
    ball.y += ball.y_speed;
    
    // Draw the ball
    fill(ball.red, ball.green, ball.blue);
    ellipse(ball.x, ball.y, ball.width, ball.height);   
    
    // Update the paddle position based on player mouse x-coordinate
    paddle.x = mouseX;
    
    // Draw the paddle, note we adjust starting x position for half paddle
    // width to give player the feeling they are controlling the center
    // of the paddle as they move their mouse
    fill(paddle.red, paddle.green, paddle.blue);
    rect(paddle.x - (paddle.width / 2), paddle.y, paddle.width, paddle.height);
    
    // Draw score
    textSize(16);
    text("Score: " + score, 0, 16);
    
    // If the ball collides with the paddle, reverse ball's y-speed and
    // update the score with one more point
    if ( (ball.y >= (paddle.y - (ball.height / 2))) && 
         (paddle.x + (paddle.width / 2) >= ball.x - ball.width &&
          paddle.x - (paddle.width / 2) <= ball.x + ball.width ) )
    {
        ball.y_speed *= -1;
        ball.y += ball.y_speed;
        score += 1;
    }
    
    // If the ball goes past the paddle the game is over, put this text 
    // on the screen and move the ball off the screen completely + stop it
    if (ball.y > paddle.y) 
    {
        textSize(55);
        text("Game Over", 50, 200);
        ball.y = 500;
        ball.x = 500;
        ball.x_speed = 0;
        ball.y_speed = 0;
    }
    
    // If the ball hits the right screen edge, bounce it left
    if (ball.x >= (400 - (ball.width / 2))) 
    {
        ball.x_speed *= -1;
    }
     
    // If the ball hits the left screen edge, bounce it right
    if (ball.x <= (0 + (ball.width / 2))) 
    {
        ball.x_speed *= -1;
    }
    
    // If the ball hits the top screen edge, bounce it downwards
    if (ball.y <= (0 + (ball.height / 2))) 
    {
        ball.y_speed *= -1;
    }     
};