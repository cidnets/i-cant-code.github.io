let sprite1; 
let sprite2;
let sprite3;
let sprite4;
let moveDirection;
let counter;
let isMoving;
let xvar;
let yvar;
let col;
var offset = 20;
let player;
let background_hometown;
let background_house;
let tree;
let squarenum = 10;

function preload() {
  background_hometown = loadImage('https://raw.githubusercontent.com/cidnets/i-cant-code.github.io/main/Project-4/Assets/Maps/HOMETOWN.png');
  background_house = loadImage('https://raw.githubusercontent.com/cidnets/i-cant-code.github.io/main/Project-4/Assets/Maps/PlayerHouse.png');
  player = loadImage('https://raw.githubusercontent.com/cidnets/i-cant-code.github.io/main/Project-4/Assets/PlayerSprites/Player-1.png');
  tree = loadImage('https://raw.githubusercontent.com/cidnets/i-cant-code.github.io/main/Project-4/Assets/Maps/Tree.png');
}


function setup(){
    createCanvas(600,600); 
    sprite1 = new Sprite(65,65,50,50 ,1); 
    sprite2 = new Sprite(485,65,50,50 ,1);
    sprite3 = new Sprite(65,125, 50,50 ,2);
    sprite4 = new Sprite(125,65,50,50 ,3);
  

}

function draw(){
    background(0); //black background
    background(background_hometown);
    checkboard();  //8x8 grid    
    sprite1.show();  //shows sprite1 object on canvas
    sprite2.show(); 
    sprite3.show();
    sprite4.show();
    checkCollision();
    xvar = checkBoundary();
    if(counter<=0 || counter>60 || checkBoundary===false ||col===true ){
      counter = 0;
      isMoving=false;
    } 
  
    if(isMoving===true){
      update();
    }
  

}

function checkCollision(){
  col = false;
  sprite1.testCollisions(sprite2);
  sprite1.testCollisions(sprite3);
  sprite1.testCollisions(sprite4);
}

function checkBoundary(){
  
  if(sprite1.x>=65 && sprite1.x<=485 && sprite1.y>=65 && sprite1.y<=485){
    return true;
  }
  else {
    if (sprite1.x < 65){
        sprite1.x = 65;
      }
    if (sprite1.x > 485){
        sprite1.x = 485;
      }
    if (sprite1.y < 65){
        sprite1.y = 65;
      }
    if (sprite1.y > 485){
        sprite1.y = 485;
      }
    return false;
  }
}

function Sprite(var1,var2,var3, var4, type){
    this.x = var1; // x position of object
    this.y = var2; // y position of object
    this.w = var3; // width of object
    this.h = var4; // height of object

    this.show = function(){
      //depending on type, show different sprites
      //type = 1, player
      //type = 2, tree
      //type = 3, blank space for collisions
      switch(type){
        case 1: 
          image(player,this.x, this.y, this.w, this.h);
          break;
        case 2: 
          image(tree, this.x, this.y, this.w, this.h);
          break;
        case 3:
          push();
          noStroke();
          noFill();
          rect(this.x, this.y, this.w, this.h);
          pop();
          break;
      }
      
    }
  
    this.testCollisions = function(other){
        //if the images overlap, shift slightly and mark as collision
        if (this.x < other.x+other.w && other.x < this.x+40 &&
            this.y < other.y+other.h && other.y < this.y+40) {
              print("collision");
              this.x = this.x-1;
              this.y = this.y+1;
              col = true;
        } 
    }
}

//for making the 10x10 grid
function checkboard(){
    for (var x = 0; x < width; x += width / squarenum) {
        for (var y = 0; y < height; y += height / squarenum) {
            stroke(255); //grid lines is white
            strokeWeight(1); // lines drawn are 1 units thick
            line(x, 0, x, height); // vertical lines
            line(0, y, width, y); // horizontal lines
        }
    }
}



function update(){
    //runs at the end of the draw function
  
    //change move direction based on left up right down
    switch(moveDirection){
      case 1:
        sprite1.x = sprite1.x + 1;
        counter+=1;
        break;
      case 2:
        sprite1.x = sprite1.x-1;
        counter+=1;
        break;
      case 3:
        sprite1.y = sprite1.y + 1;
        counter+=1;
        break;
      case 4:
        sprite1.y = sprite1.y-1;
        counter+=1;
        break;
    }
    if(keyIsDown(LEFT_ARROW)|| keyIsDown(RIGHT_ARROW)|| keyIsDown(DOWN_ARROW)|| keyIsDown(UP_ARROW)){
      xvar = checkBoundary();
      if(xvar===true && col===false){
        isMoving=true;
        counter = 1;
      } else {
        col = true;
        isMoving = false;
        counter = 0;
      }
    }
} 

  

function keyPressed() {
  switch(keyCode){
      
    case RIGHT_ARROW: 
      if (sprite1.x>=65 && sprite1.x<485){
        isMoving = true;
        counter = 1;
        moveDirection = 1;
        
      }
      //
      break;
      
    case LEFT_ARROW:
      if (sprite1.x>65 && sprite1.x<=485){
        isMoving = true;
        counter = 1;
        moveDirection = 2;
      }
      //
      break; 
    
    case DOWN_ARROW:
      if (sprite1.y>=65 && sprite1.y<485){
        isMoving =true;
        counter = 1;
        moveDirection = 3;
      }
      //
      break;
    
    case UP_ARROW:
      if (sprite1.y>65 && sprite1.y<=485){
        isMoving = true;
        counter = 1;
        moveDirection = 4;
      }
      //
      break;
      

    default:
      console.log("clicked");
      //
      break;
  }
}