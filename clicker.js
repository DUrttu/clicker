var coin1;
var taka;
var piste;
var testi;
let fontti;

function preload() {
  fontti = loadFont('Antreas.ttf');
}

function setup() {
  var cnv = createCanvas(600, 600)
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  coin1 = loadImage('ence.png');
  taka = loadImage('tausta.png');
  piste = 50;
}

function draw() {
  background(taka);
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
  textFont(fontti);
  text(piste, 300, 50);
}

function mousePressed() {
  if (piste > 0 ) {
   piste -= 1;}
}

function update() {
  if (piste < 1 ) {
    coin1 = loadImage('allu.png');
  }
}


