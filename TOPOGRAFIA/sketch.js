var points = [];
var mult = 0.005;

//variables par los colores
var r1;
var r2;
var g1;
var g2;
var b1;
var b2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(30);
    angleMode(degrees);
    noiseDetail(1);

    var density = 50; //la cantidad de puntos en cada fila
    var space = width / density; //la distancia entre cada punto //se usa para los loops

    for (var x = 0; x < width; x += space) {
        for (var y = 0; y < height; y += space) {
            var p = createVector(x + random(-10, 10), y + random(-10, 10));
            points.push(p); //le sumamos el vector al array points
        }
    }

    shuffle(points, true); //para randomizar las lineas mezclamos el array, asi no apareceran todas desde los mismos puntos

    r1 = random(255);
    r2 = random(255);
    g1 = random(255);
    g2 = random(255);
    b1 = random(255);
    b2 = random(255);

    mult = random(0.002, 0.01);
}

function draw() {
    noStroke();

    //esta condicion es para que se vean los points de uno en uno y podemos cambiar en el for siguiente el points.length por max y descomentar este if si queremos usarla, o comentar este if y cambiar el max x points.length segun sea el caso
    if (frameCount * 5 <= points.length) {
        var max = frameCount * 5;
    } else {
        var max = points.length;
    }

    //creamos otro loop para iterar entre los points //creamos un circulo en las coordenadas x e y de cada point
    for (var i = 0; i < max; i++) {

        var r = map(points[i].x, 0, width, r1, r2);
        var g = map(points[i].y, 0, height, g1, g2);
        var b = map(points[i].x, 0, width, b1, b2);
        //una variable que controle el valor de transparencia
        var alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, 300, 400, 0); //mapeamos este valor con la misma distancia del ellipse para crear un efecto de transparencia 

        fill(r, g, b, alpha);

        var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720); //para darle un angulo en el cual cada punto se va a mover
        //le sumamos un vector a cada punto basados en el angulo
        points[i].add(createVector(cos(angle), sin(angle)))

        //hacemos que nuestro canvas sea solamente un ellipse
        if (dist(width / 2, height / 2, points[i].x, points[i].y) < 300) {
            ellipse(points[i].x, points[i].y, 1)
        }
    }
}

//le sumamos esta funcion para poder guardar nuestras obras al hacerles click
function mouseClicked() {
    saveCanvas("campodeOndas", "png");
}