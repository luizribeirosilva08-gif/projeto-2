//Projeto 2 - Introdução ao JavaScript
let corDofundo;

function setup() {
  createCanvas(600, 600);
  background(220);
  corDofundo= color(255,255,0);
}

function draw() {
  fill(corDofundo);
  circle(300,300,mouseX);
}