var coin1;
var tausta;
var piste;

function setup() {
  var cnv = createCanvas(600, 600)
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  coin1 = loadImage('https://raw.githubusercontent.com/DUrttu/clicker/master/ence.png?token=AuprPdr5QEeHZxSkmbSppxsOFzZL1sl3ks5crNjRwA%3D%3D');
  tausta = loadImage('https://raw.githubusercontent.com/DUrttu/clicker/master/tausta.png?token=AuprPU_6txDL0V6FYHoQ8aVUzRcq8DQGks5crNjNwA%3D%3D');
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
    coin1 = loadImage('https://raw.githubusercontent.com/DUrttu/clicker/master/allu.png?token=AuprPbdVXxiO4xKbBEbxYGUJX76q9Wytks5crNiIwA%3D%3D');
  }
}
