let pen_color;
let pen_size;
let clear_button;
let save_button;
let background_color;

function setup() {
  createCanvas(400, 400);
  background_color = createColorPicker(220);
  background_color.position(0, height+35);
  background_color.input(setbackground);
  
  pen_color = createColorPicker('orange');
  pen_color.position(0, height + 5);
  pen_color.input(set_options);
  
  pen_size = createSlider(1,20,3,1);
  pen_size.position(75, height + 10);
  pen_size.input(set_options);
  text(pen_size.value(), 100, 50);
  
  clear_button = createButton('Clear Canvas');
  clear_button.position(250, height + 5);
  clear_button.mousePressed(clearcanvas);
  
  save_button = createButton('Save Canvas');
  save_button.position(250, height + 30);
  save_button.mousePressed(savecanvas);
  
  background(220);
}

function draw() {
  fill("white");
  noStroke();
  rect(0,0,40);
  
  fill(pen_color.value());
  stroke(pen_color.value());
  circle(20, 20, pen_size.value()/PI);
   if (mouseIsPressed==true){
     cursor(CROSS);
     line(mouseX, mouseY, pmouseX, pmouseY);
   } else{
     cursor(ARROW);
   }
}

function keyTyped(){
  if (key === 's'){
    saveCanvas('output','png');
  }
  if (key === 'c'){
    clearcanvas();
  }
}

function savecanvas(){
  saveCanvas('output', 'png');
}

function setbackground(){
  background(background_color.color());
  draw();
}

function set_options(){
  
  strokeWeight(pen_size.value());
  stroke(pen_color.color());
  fill("black");
  
  draw();
}

function clearcanvas(){
  background(background_color.color());
  draw();
}