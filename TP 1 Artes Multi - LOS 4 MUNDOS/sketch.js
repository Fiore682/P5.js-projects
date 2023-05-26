function setup() {
    createCanvas(512, 512);
}

function draw() {
    background(100);
    console.log("x:" + mouseX + "y:" + mouseY);

    push();
    noStroke();
    fill(256);
    //El objetivo es crear 4 ellipses al estilo de las obras de Michael Noll como nuestro espacio principal de trabajo. Para eso vamos a crear dos variables que usaremos para posicionar los ellipses en sus ejes Xs e Ys, y luego 3 variables más, las cuales vamos a crear en base a ir dvidiéndo la primera variable creada por dos.
    var quarterWidth = width / 2;
    var quarterHeight = height / 2;

    var x1 = quarterWidth / 2;
    var y1 = quarterHeight / 2;
    var diameter1 = min(quarterWidth, quarterHeight) - 20; //circulo 1

    var x2 = quarterWidth + quarterWidth / 2;
    var y2 = quarterHeight / 2;
    var diameter2 = min(quarterWidth, quarterHeight) - 20; //circulo 2

    var x3 = quarterWidth / 2;
    var y3 = quarterHeight + quarterHeight / 2;
    var diameter3 = min(quarterWidth, quarterHeight) - 20; //circulo 3

    var x4 = quarterWidth + quarterWidth / 2;
    var y4 = quarterHeight + quarterHeight / 2;
    var diameter4 = min(quarterWidth, quarterHeight) - 20; //circulo 4

    // Dibuja las elipses
    push();
    noStroke();
    fill(256);
    ellipse(x1, y1, diameter1, diameter1);
    ellipse(x2, y2, diameter2, diameter2);
    ellipse(x3, y3, diameter3, diameter3);
    ellipse(x4, y4, diameter4, diameter4);
    pop();

}