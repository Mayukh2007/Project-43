var hr ;
var mn ;
var sc ;

function setup() {
  createCanvas(600,600);

}

function draw() {
  background("lightblue");  
   hr = hour();
   mn = minute();
   sc = second();
  angleMode(DEGREES);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);

  angleMode(DEGREES);
  fill("yellow");
  arc(300,300,300,300,-90,scAngle-90);
  fill("red");
  arc(300,300,250,250,-90,mnAngle-90);
  fill("blue");
  arc(300,300,190,190,-90,hrAngle-90)
  
  push();
  translate(300,300);
  rotate(scAngle);
  stroke("purple");
  strokeWeight(7);
  line(0,-150,0,0);
  pop();

  push();
  fill("red");
  stroke("black");
  strokeWeight(7);
  textSize(40);
  text(hour() + ":" + minute() + ":" + second(),200,100);  
  pop();

  push();
  translate(300,300);
  rotate(mnAngle);
  stroke("white");
  strokeWeight(7);
  line(0,-120,0,0);
  pop();

  push();
  translate(300,300);
  rotate(hrAngle);
  stroke("black");
  strokeWeight(7);
  line(0,-90,0,0);
  pop();

  
}