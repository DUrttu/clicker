var coin1;
var tausta;
var piste;

function setup() {
  var cnv = createCanvas(600, 600)
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  coin1 = loadImage(ence.png);
  tausta = loadImage(tausta.png);
  piste = 50;
}

function draw() {
  background(tausta);
  image(coin1, 170, 170);
  score();
  if (piste < 1 ) {
    piste = 0;
  }
  update();
}

function score() {
  fill(5, 0, 0,);
  textAlign(CENTER);
  textSize(50);
  text(piste, 300, 50);
}

function mousePressed() {
  piste -= 1;
}

function update() {
  if (piste < 1 ) {
    coin1 = loadImage(allu.png);
  }
}
