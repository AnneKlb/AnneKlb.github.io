//https://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser
window.addEventListener(
  "keydown",
  function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);
function hintergrund() {
  //Hintergrund
  background(4, 8, 79);
  //mond
  fill(255, 255, 255);
  ellipse(110, 70, 100, 100);
}
function sterne(lx, ly, g) {
  fill(255, 255, 255);
  ellipse(lx, ly, 2 + g, 2 + g);
}

var lx = 100;
var ly = 100;
let x = 250;
let y = 200;
let speedY = 5;
let speedX = 3;
let playervelx = 5;
let tank = 100;

let ground = {
  x: 0,
  y: 450
};
let start = false;

function rakete(x, y) {
  //körper
  fill(100, 100, 100);
  noStroke();
  rect(x, y - 100, 40, 100, 20);
  triangle(x, y - 70, x + 20, y - 120, x + 40, y - 70);
  fill(255, 0, 0);
  triangle(x + 1, y - 15, x, y - 50, x - 30, y - 10);
  triangle(x + 39, y - 15, x + 40, y - 50, x + 70, y - 10);
  //fester
  fill(76, 76, 76);
  ellipse(x + 20, y - 80, 25, 25);
  fill(96, 182, 190);
  ellipse(x + 20, y - 80, 20, 20);
  //fenster2
  fill(76, 76, 76);
  ellipse(x + 20, y - 50, 25, 25);
  fill(96, 182, 190);
  ellipse(x + 20, y - 50, 20, 20);
  //düse
  fill(100, 100, 100);
  quad(x + 0, y + 10, x + 40, y + 10, x + 30, y - 10, x + 10, y - 10);
}
function flamme(x, y) {
  fill(255, 0, 0);
  ellipse(x + 10, y - 60, 10, 40);
  ellipse(x + 30, y - 60, 10, 40);

  fill(255, 255, 0);
  ellipse(x + 10, y - 60, 5, 30);
  ellipse(x + 30, y - 60, 5, 30);
}
function knöpfe(x, y) {
  //Knöpfe
  //Start
  fill(255, 255, 255);
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(10, 470, 90, 40, 20);
  //Reset
  rect(10, 520, 90, 40, 20);
  noStroke();
  fill(1, 1, 1);
  textSize(25);
  textFont("arial");
  text("Start", 25, 500);
  text("Reset", 20, 550);
}
function boden(x, y) {
  fill(50, 50, 50);
  rect(ground.x, ground.y, 600, 150);
  fill(50, 50, 50);
  ellipse(ground.x + 300, ground.y, 800, 180);
  fill(30, 30, 30);
  ellipse(ground.x + 100, ground.y, 100, 40);
  ellipse(ground.x + 400, ground.y + 50, 110, 35);
}
function tot() {
  if (tank <= 0) {
    gravity = 0;
    speedX = 0;
    speedY = 0;

    tank = 0;
  }
}
function draw() {
  clear();
  hintergrund();

  noStroke();
  for (let lx = 0; lx < 100; lx++) {
    for (let ly = 0; ly < 100; ly++)
      sterne(10 + 70 * lx, 10 + 70 * ly, lx * -0, ly * +0);
  }
  //Boden
  boden(x, y);

  knöpfe(x, y);
  rakete(x, y - 80);

  //Tank
  fill(255, 255, 255);
  textSize(30);
  textFont("arial");
  text("Tank % " + tank, 400, 50);
  tot();
  //Knöpfe

  if (
    //knopf start
    mouseIsPressed === true &&
    mouseX >= 10 &&
    mouseX <= 100 &&
    mouseY >= 470 &&
    mouseY <= 510
  ) {
    start = true;
  }
  if (
    //knopf reset
    mouseIsPressed === true &&
    mouseX >= 10 &&
    mouseX <= 100 &&
    mouseY >= 520 &&
    mouseY <= 560
  ) {
    start = false;
    y = 200;
    speedY = 4;
    speedX = 2;
    tank = 100;
  }
  if (start === true) {
    if (keyIsDown(UP_ARROW) && y < 530) {
      tank -= 1;
      playervelx = 1;
      speedY = speedY - 0.08;
    } else if (y < 530) {
      playervelx = 5;
      speedY = 4;
    }
    y = y + speedY;
    flamme(x, y);

    if (keyIsDown(RIGHT_ARROW)) {
      tank -= 1;

      playervelx = 2;
      x = x + speedX;
    }
    if (keyIsDown(LEFT_ARROW)) {
      tank -= 1;
      playervelx = 2;
      x = x - speedX;
    }
  }
  //landung
  if (y >= 530) {
    y = 530;
    start = false;
    if (playervelx === 1) {
      fill(255, 255, 255);
      textSize(40);
      text("Sicher gelandet ☺", 150, 200);
    } else {
      text("Du bist gestorben †", 150, 200);
    }
  }
}
