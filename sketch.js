function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('p5.js version:', p5.VERSION);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background('#1E1E26');

  let colonne = 5;
  let righe = 4;
  let spazX = width / (colonne + 1);
  let spazY = height / (righe + 1);

  let indice = 0;
  for (let y = 1; y <= righe; y++) {
    for (let x = 1; x <= colonne; x++) {
      let variantCasual = floor(random(4));      
      
      let posX = x * spazX;
      let posY = y * spazY;
      
      let randomSize = 75 + random(-15, 15);
      let randomRotation = random(-20, 20);

      disegnaGlifo(posX, posY, randomSize, randomRotation, variantCasual);
      indice++;
    }
  }
}

function disegnaGlifo(x, y, size, rotazione, variant) {
  push();
  translate(x, y);
  rotate(rotazione);

  // Palette di colori
  let Rosa = color(235, 104, 153);
  let Verde = color(130, 160, 80);
  let Blu = color(122, 148, 175);
  let Giallo = color(240, 190, 70);
  let Arancione = color(245, 130, 45);

  noStroke();

  // Selezione casuale delle componenti tramite numeri e if/else
  let f1 = floor(random(4));
  let f2 = floor(random(4));

  // Forma base geometrica
  if (f1 === 0) {
    fill(Verde);
    rectMode(CENTER);
    rect(0, size * 0.25, size * 0.6, size * 0.35, 8);
  } 
  else if (f1 === 1) {
    fill(Giallo);
    rectMode(CENTER);
    rect(0, size * 0.3, size * 0.7, size * 0.25, 4);
  } 
  else if (f1 === 2) {
    fill(Arancione);
    rectMode(CENTER);
    rect(0, -size * 0.3, size * 0.4, size * 0.15, 6);
  } 
  else {
    fill(Verde);
    rectMode(CENTER);
    rect(0, -size * 0.2, size * 0.5, size * 0.3, 10);
  }

  // Forma geometrica secondaria (sovrapposta)
  if (f2 === 0) {
    fill(Rosa);
    ellipse(0, -size * 0.15, size * 0.65, size * 0.65);
  } 
  else if (f2 === 1) {
    fill(Blu);
    triangle(0, -size * 0.5, -size * 0.5, size * 0.1, size * 0.5, size * 0.1);
  } 
  else if (f2 === 2) {
    fill(Rosa);
    rectMode(CENTER);
    rect(0, 0, size * 0.4, size * 0.4);
  } 
  else {
    fill(Rosa);
    arc(0, size * 0.1, size * 0.7, size * 0.7, 0, 180);
  }

  // Posizionamento occhi in base alla variante
  if (variant === 0) {
    disegnaOcchi(0, 0, size);
  } 
  else if (variant === 1 || variant === 2) {
    disegnaOcchi(0, 0.05, size);
  } 
  else {
    disegnaOcchi(0, 0, size);
  }

  pop();
}

function disegnaOcchi(ox, oy, size) {
  push();
  translate(ox, oy);
  
  rectMode(CENTER);
  noStroke();

  // Dimensioni e proporzioni occhi
  let widthOcchio = size * 0.2;
  let heightOcchio = size * 0.1;
  let radius = heightOcchio / 2;

  fill(255);
  rect(-size * 0.11, 0, widthOcchio, heightOcchio, radius);
  rect(size * 0.11, 0, widthOcchio, heightOcchio, radius);

  // Dimensioni e coordinate pupille
  let sizePupilla = size * 0.1;
  
  fill(40, 50, 50); 
  ellipse(-size * 0.02, 0, sizePupilla, sizePupilla);
  ellipse(size * 0.2, 0, sizePupilla, sizePupilla);

  pop();
}