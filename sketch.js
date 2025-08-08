var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,255);
  //sirve para otra cosa, es para la velocidad de los frame de la animación: frameRate(100);
}

function draw() {
  d = random(10,100)
  noStroke(); //quita borde a elipse
  fill(255,d); //números del 0 al 255 son las escalas de grises, 0 negro, 255 blanco, para colores seguir lógica RGB (x,x,x)
  ellipse(mouseX,mouseY,d,d); //windowWidth/2 posiciona a la mitad, windowHeight/2 también
}
