function ball(x, y, scale) {
  noStroke();

  fill(77, 0, 38);
  ellipse(300, 430, 300, 60);

  fill(1, 1, 1);
  ellipse(300, 300, 300, 300);

  fill(40, 40, 40);
  ellipse(300, 320, 285, 260);

  fill(1, 1, 1);
  ellipse(300, 310, 290, 250);

  fill(50, 50, 50);
  ellipse(300, 185, 150, 60);

  fill(60, 60, 60);
  ellipse(300, 185, 130, 55);

  fill(70, 70, 70);
  ellipse(300, 185, 100, 45);

  fill(80, 80, 80);
  ellipse(300, 320, 150, 150);

  fill(90, 90, 90);
  ellipse(300, 320, 140, 140);

  fill(255, 255, 255);
  ellipse(300, 320, 130, 130);

  textSize(50);
  text("Magic Fact Ball", 120, 460, 500, 200);
}
var randomnumber = 0;
function draw() {
  clear();
  background(128, 0, 64);
  ball(300, 300, 1.0);
  if (mouseIsPressed == true) {
    randomnumber = Math.floor(random(0, 5));
  }
  if (randomnumber == 0) {
    fill(1, 1, 0);
    textSize(100);
    text("8", 270, 265, 100, 200);
  } else if (randomnumber == 1) {
    fill(1, 1, 0);
    textSize(14);
    text(
      "“The only mystery in life is why the kamikaze pilots wore helmets.”",
      260,
      275,
      100,
      200
    );
  } else if (randomnumber == 2) {
    fill(0, 0, 0);
    textSize(14);
    text(
      "“My opinions may have changed, but not the fact that I’m right.”",
      260,
      275,
      100,
      200
    );
  } else if (randomnumber == 3) {
    fill(0, 0, 0);
    textSize(13);
    text(
      "“A bank is a place that will lend you money if you can prove that you don’t need it.”",
      260,
      275,
      100,
      200
    );
  } else if (randomnumber == 4) {
    fill(0, 0, 0);
    textSize(14);
    text(
      "“My favorite machine at the gym is the vending machine.”",
      260,
      275,
      100,
      200
    );
  }
  console.log(randomnumber);
}
