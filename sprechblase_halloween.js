createCanvas(600, 500);
//Mit Hilfe von p5.js.org
function back(x, y, scale) {
  background(21, 91, 140);
}

function boden(x, y, scale) {
  //Boden
  noStroke();
  fill(68, 102, 0);
  rect(x - 250 * scale, y + 20 * scale, 600 * scale, 400 * scale);
  fill(85, 128, 0);
  rect(x - 250 * scale, y + 40 * scale, 600 * scale, 400 * scale);
}

//Wolken
function cloud(x, y, scale, r, g, b) {
  noStroke();
  fill(r, g, b);
  ellipse(x + 100 * scale, y + 150 * scale, 80 * scale, 60 * scale);
}
function wolke(x, y, scale) {
  cloud(x - 0 * scale, y - 500 * scale, 2.0 * scale, 255, 255, 255);
  cloud(x + 20 * scale, y - 340 * scale, 1.0 * scale, 255, 255, 255);
  cloud(x + 60 * scale, y - 310 * scale, 1.0 * scale, 255, 255, 255);
  cloud(x + 140 * scale, y - 400 * scale, 1.4 * scale, 255, 255, 255);

  cloud(x - 290 * scale, y - 380 * scale, 1.0 * scale, 255, 255, 255);
  cloud(x - 320 * scale, y - 360 * scale, 1.0 * scale, 255, 255, 255);
  cloud(x - 290 * scale, y - 420 * scale, 1.4 * scale, 255, 255, 255);
  cloud(x - 310 * scale, y - 390 * scale, 1.3 * scale, 255, 255, 255);
}
function schatten(x, y, scale) {
  //Schatten
  noStroke();
  fill(0, 51, 26);
  ellipse(x, y + 100 * scale, 320 * scale, 75 * scale);

  fill(0, 77, 40);
  ellipse(x, y + 100 * scale, 300 * scale, 70 * scale);
}
function monster(x, y, scale) {
  //Monster
  noStroke();

  //Körper light
  fill(77, 195, 255);
  ellipse(x, y, 310 * scale, 260 * scale);
  ellipse(x, y - 20 * scale, 240 * scale, 240 * scale);
  ellipse(x, y - 30 * scale, 220 * scale, 240 * scale);
  //farbe
  fill(0, 172, 230);
  ellipse(x, y, 300 * scale, 250 * scale);
  ellipse(x, y - 20 * scale, 240 * scale, 240 * scale);
  ellipse(x, y - 30 * scale, 220 * scale, 240 * scale);

  //lichtreflexe
  fill(255, 255, 255);
  push();
  translate(x + 90 * scale, y + 80 * scale);
  rotate(70);
  ellipse(0, 0, 10 * scale, 30 * scale);
  pop();

  push();
  translate(x + 110 * scale, y + 60 * scale);
  rotate(70);
  ellipse(0, 0, 5 * scale, 10 * scale);
  pop();

  push();
  translate(x - 120 * scale, y - 65 * scale);
  rotate(70);
  ellipse(0, 0, 5 * scale, 10 * scale);
  pop();

  push();
  translate(x - 130 * scale, y - 40 * scale);
  rotate(60);
  ellipse(0, 0, 10 * scale, 30 * scale);
  pop();

  //Hut
  fill(57, 172, 115);
  ellipse(x, y - 140 * scale, 150 * scale, 90 * scale);

  fill(172, 57, 172);
  ellipse(x, y - 140 * scale, 110 * scale, 90 * scale);

  fill(57, 172, 115);
  ellipse(x, y - 140 * scale, 50 * scale, 90 * scale);

  //Zacken
  fill(255, 255, 77);
  triangle(
    x - 40 * scale,
    y - 100 * scale,
    x - 100 * scale,
    y - 100 * scale,
    x - 90 * scale,
    y - 150 * scale
  );
  triangle(
    x + 20 * scale,
    y - 100 * scale,
    x - 60 * scale,
    y - 100 * scale,
    x - 40 * scale,
    y - 160 * scale
  );
  triangle(
    x + 70 * scale,
    y - 100 * scale,
    x - 10 * scale,
    y - 100 * scale,
    x + 40 * scale,
    y - 160 * scale
  );
  triangle(
    x + 100 * scale,
    y - 100 * scale,
    x + 40 * scale,
    y - 100 * scale,
    x + 90 * scale,
    y - 150 * scale
  );
  //Kugeln
  ellipse(x - 90 * scale, y - 150 * scale, 10 * scale, 10 * scale);
  ellipse(x - 40 * scale, y - 160 * scale, 10 * scale, 10 * scale);
  ellipse(x + 40 * scale, y - 160 * scale, 10 * scale, 10 * scale);
  ellipse(x + 90 * scale, y - 150 * scale, 10 * scale, 10 * scale);

  fill(255, 255, 77);
  stroke(204, 204, 0);
  strokeWeight(2 * scale);
  push();
  translate(x + 0 * scale, y - 100 * scale);
  rotate(PI);
  arc(0, 0, 200 * scale, 50 * scale, 0 * scale, PI);
  pop();

  fill(0, 172, 230);
  push();
  translate(x + 0 * scale, y - 95 * scale);
  rotate(PI);
  arc(0, 0, 200 * scale, 40 * scale, 0, PI);
  pop();

  //Refelktion
  stroke(255, 255, 255);
  strokeWeight(3 * scale);
  fill(255, 255, 255);
  line(x - 95 * scale, y - 115 * scale, x - 90 * scale, y - 140 * scale);
  line(x - 45 * scale, y - 125 * scale, x - 40 * scale, y - 150 * scale);

  noStroke();
  fill(255, 255, 77);
  ellipse(x - 0 * scale, y - 185 * scale, 50 * scale, 15 * scale);
  fill(255, 255, 255);
  ellipse(x - 0 * scale, y - 190 * scale, 35 * scale, 15 * scale);

  fill(255, 255, 77);
  ellipse(x - 0 * scale, y - 190 * scale, 30 * scale, 15 * scale);
  ellipse(x - 0 * scale, y - 200 * scale, 5 * scale, 20 * scale);

  //Augen
  stroke(1, 1, 1);
  strokeWeight(2 * scale);
  fill(255, 255, 255);
  ellipse(x - 20 * scale, y - 70 * scale, 30 * scale, 30 * scale);
  ellipse(x + 20 * scale, y - 70 * scale, 30 * scale, 30 * scale);

  fill(1, 1, 1);
  ellipse(x + 20 * scale, y - 70 * scale, 5 * scale, 5 * scale);
  ellipse(x - 20 * scale, y - 70 * scale, 5 * scale, 5 * scale);

  //Mund
  fill(1, 1, 1);
  noStroke();
  push();
  translate(x, y);
  rotate();
  arc(0, -40 * scale, 100 * scale, 70 * scale, 0 * scale, PI);
  pop();

  stroke(1, 1, 1);
  strokeWeight(2 * scale);
  fill(255, 179, 179);
  ellipse(x, y - 19 * scale, 60 * scale, 20 * scale);

  fill(0, 172, 230);
  push();
  translate(x, y);
  rotate();
  arc(0, -40 * scale, 80 * scale, 40 * scale, 0, PI);
  pop();

  //Wangen

  fill(0, 172, 230);
  ellipse(x + 65 * scale, y - 30 * scale, 60 * scale, 60 * scale);
  ellipse(x - 65 * scale, y - 30 * scale, 60 * scale, 60 * scale);

  noStroke();
  fill(0, 172, 230);
  ellipse(x + 70 * scale, y - 35 * scale, 60 * scale, 60 * scale);
  ellipse(x - 70 * scale, y - 35 * scale, 60 * scale, 60 * scale);
  ellipse(x - 75 * scale, y - 30 * scale, 60 * scale, 60 * scale);
  ellipse(x + 75 * scale, y - 30 * scale, 60 * scale, 60 * scale);
}

//Grass
function grasslines(x, y, scale, r, g, b) {
  stroke(r, g, b);
  strokeWeight(5 * scale);
  line(x + 290 * scale, y + 150 * scale, x + 280 * scale, y + 80 * scale);
  line(x + 295 * scale, y + 150 * scale, x + 290 * scale, y + 90 * scale);
  line(x + 300 * scale, y + 150 * scale, x + 300 * scale, y + 80 * scale);
  line(x + 305 * scale, y + 150 * scale, x + 310 * scale, y + 90 * scale);
  line(x + 310 * scale, y + 150 * scale, x + 320 * scale, y + 80 * scale);
  line(x + 315 * scale, y + 150 * scale, x + 330 * scale, y + 70 * scale);
  line(x + 320 * scale, y + 150 * scale, x + 340 * scale, y + 80 * scale);
}
function grass(x, y, scale) {
  grasslines(x - 100 * scale, y - 100 * scale, 1.0 * scale, 51, 77, 0);
  grasslines(x - 500 * scale, y - 20 * scale, 1.0 * scale, 51, 77, 0);
  grasslines(x - 100 * scale, y + 80 * scale, 1.0 * scale, 51, 77, 0);
}

//Sprechblase
function bubble(x, y, scale) {
  fill(255, 255, 255);
  stroke(1, 1, 1);
  strokeWeight(2);
  ellipse(x + 200 * scale, y + 100 * scale, 180 * scale, 100 * scale);
  triangle(
    x + 130 * scale,
    y + 70 * scale,
    x + 170 * scale,
    y + 60 * scale,
    x + 110 * scale,
    y + 0 * scale
  );
  noStroke();
  ellipse(x + 200 * scale, y + 100 * scale, 175 * scale, 95 * scale);
  triangle(
    x + 132 * scale,
    y + 70 * scale,
    x + 168 * scale,
    y + 60 * scale,
    x + 110 * scale,
    y + 0 * scale
  );

  //Text
  fill(1, 1, 1);
  noStroke();
  textSize(20 * scale);
  text("Trick or Slime!!", x + 130 * scale, y + 110 * scale);
}
var z = 0;
var a = 250;
var b = 0;
var c = 250;
function draw() {
  clear();
  back(250, 250, 1.0);
  boden(250, 250, 1.0);
  wolke(c, 250, 1.0);
  grass(250, 250, 1.0);
  schatten(250, 300, 1.0);
  monster(250, a, 1.0);
  bubble(250, 250, 1.0);

  if (z < 15) {
    a = a + 3;
  } else if (z > 15 && a > 250) {
    a = a - 3;
  }
  if (z >= 30) {
    z = 0;
  }
  z = z + 1;
  console.log(a);

  //Wolke
  if (b < 15) {
    c = c + 2;
  } else if (b > 15 && c > 250) {
    c = c - 2;
  }
  if (b >= 30) {
    b = 0;
  }
  b = b + 1;
  console.log(a);
}
