function preload() {
  Dot=loadFont("Dot.ttf");
}

let a=400;
//Position of Robot
let y=200;
let max_x=157;
let mic;
let arr_x = [];
let mic_x;
let x=0;

function setup() {
  cnv=createCanvas(a,600);
  cnv.mousePressed(userStartAudio);
  angleMode(DEGREES);
  mic=new p5.AudioIn();
  mic.start();
}

function get_mic_value(s){
  val=mic.getLevel(s)*100;
  return(val);
}

function get_x(){
  for(let i=0; i<1000; i++) {
    arr_x[i]=get_mic_value(1);
  } 
  varx=calculate_average(arr_x);
  varx=Math.ceil(varx/5)*5;
  return varx;
}

function calculate_average(array) {
    return array.reduce((a,b)=>a+b)/array.length;
}

function draw() {
 
  mic_x = get_x()
  
  if(mic_x>=5 && mic_x<=10 && x>0){
    x--
  } else if(mic_x>=15){
    x++
  }
  
  if (x<0){
    x=0
  }
  console.log(x, mic_x)
  
  
  if(x>max_x) {
    background("#4b0000");
    //Grid? 
    stroke("#a80000");
    strokeWeight(a*0.01);
    noFill();
   for(let i=0; i<=600; i=i+100){
    line(a*0,i,a,i);
  }
  for(let i=0; i<=400; i=i+100){
    line(i,a*0,i,a+200);
    }
    
    stroke(random(255),random(255),random(255));
    strokeWeight(a*0.01);
    noFill();
    line(0,125,400,125);
    
    thissux="#b69f52"; //blue
    plzwork="#247ed8"; //orange
    yellow="#242d9c";
    
  } else {
    background("#dbd5b0");
    //Grid? 
    stroke('#c0b993');
    strokeWeight(a*0.01);
    noFill();
   for(let i=0; i<=600; i=i+100){
    line(a*0,i,a,i);
  }
  for(let i=0; i<=400; i=i+100){
    line(i,a*0,i,a+200);
    }
  
  thissux="#4960ad"; //blue
  plzwork="#db8127"; //orange
  yellow="#dbd263"; //yellow
  }
    
  //Antennae
  fill(thissux);
  noStroke();
  rect(a*0.49,(a*0.28)+y-x,a*0.02,a*0.14);
  //AntennaeBall
  fill(yellow);
  noStroke();
  ellipse(a*0.5,(a*0.26)+y-x,a*0.1);
  //LeftArm
  fill(thissux);
  noStroke();
  rect(a*0.29,(a * 0.72)+y-x, a*0.1,a*0.07,a*0.02);
  //RightArm
  fill(thissux);
  noStroke();
  rect(a*0.61,(a*0.72)+y-x,a*0.1,a*0.07,a*0.02);
  //Neck
  fill(thissux);
  noStroke();
  rect(a*0.45,(a * 0.64)+y-x,a*0.1,a*0.1,a*0.02);
  //LeftLeg
  fill(thissux);
  noStroke();
  rect(a*0.39,(a*0.9)+y-x,a*0.07,(a*0.1)+x,a*0.02);
  //RightLeg
  fill(thissux);
  noStroke();
  rect(a*0.54,(a*0.9)+y-x,a*0.07,(a*0.1)+x,a*0.02);

  //Body
  fill(plzwork);
  noStroke();
  rect(a*0.39,(a*0.72)+y-x,a*0.22,a*0.18,a*0.02);
  //BodyTV
  fill(yellow);
  noStroke();
  strokeWeight(a*0.005);
  rect(a*0.42,(a*0.75)+y-x,a*0.16,a*0.12,a*0.02);
  
  //Head
  fill(plzwork);
  noStroke();
  rect(a*0.3,(a*0.35)+y-x,a*0.4,a*0.35,a*0.04);
  //Face?
  fill(yellow);
  rect(a*0.34,(a*0.45)+y-x,a*0.32,a*0.2,a*0.04);
  
  arc(a*0.42,(a*0.53)+y-x,a*0.08,a*0.12,0,180,PI);
  arc(a*0.58,(a*0.53)+y-x,a*0.08,a*0.12,0,180,PI);
  
  //IAmTall Text
  if (x>max_x){
    r=random(255);
    g=random(255);
    b=random(255);
  
  //Mouth
  stroke("BLACK");
  strokeWeight(a*0.01);
  noFill(0);
  line(a*0.5,(a*0.61)+y-x,a*0.47,(a*0.57)+y-x);
  line(a*0.5,(a*0.61)+y-x,a*0.53,(a*0.57)+y-x);
  
  //Pupils
  stroke("BLACK");
  strokeWeight(a*0.01);
  fill(r,g,b);
  arc(a*0.42,(a*0.53)+y-x,a*0.08,a*0.12,0,180,PI);
  arc(a*0.58,(a*0.53)+y-x,a*0.08,a*0.12,0,180,PI);
    
  //IAmTallBelly
  fill(r,g,b);
  stroke(r,g,b);
  strokeWeight(a * 0.002);
  textSize(15);
  textAlign(CENTER);
  textFont(Dot);
  text("I am tall",a*0.43,(a * 0.76)+y-x,a*0.15,a*0.11);
  //IAmTallTop
  fill(r,g,b);
  stroke(r,g,b);
  strokeWeight(a * 0.002);
  textSize(30);
  textAlign(CENTER);
  textFont(Dot);
  text("I am tall",a*0,a*0.02,a,a*0.5);
  } else {
  //Pupils
  stroke("BLACK");
  strokeWeight(a*0.01);
  fill("white");
  arc(a*0.42,(a*0.53)+y-x,a*0.08,a*0.12,0,180,PI);
  arc(a*0.58,(a*0.53)+y-x,a*0.08,a*0.12,0,180,PI);
    
  //Mouth
  stroke("BLACK");
  strokeWeight(a*0.01);
  noFill(0);
  line(a*0.5,(a*0.57)+y-x,a*0.47,(a*0.61)+y-x);
  line(a*0.5,(a*0.57)+y-x,a*0.53,(a*0.61)+y-x);
  }

  //Eyeline thingies
  stroke("BLACK");
  strokeWeight(a*0.014);
  noFill(0);
  arc(a*0.42,(a*0.53)+y-x,a*0.11,a*0.004,180,0,PI);
  arc(a*0.58,(a*0.53)+y-x,a*0.11,a*0.004,180,0,PI);
  
  
}