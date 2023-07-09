class SceneOne extends Scene {
    constructor() {
        super();

        this.inicializar();

        let escena3 = () => {
            world.setScene(3);
        }
        this.botones = [
            new Button(width - 100, height - 100, 128, 128, world.img_next, escena3),
        ];
    }

    inicializar() {
        this.borrarFondo = true;
        this.points = [];
        this.mult = 0.005;

        var density = 50; //la cantidad de puntos en cada fila
        var space = width / density; //la distancia entre cada punto //se usa para los loops

        for (var x = 0; x < width; x += space) {
            for (var y = 0; y < height; y += space) {
                var p = createVector(x + random(-10, 10), y + random(-10, 10));
                this.points.push(p); //le sumamos el vector al array points
            }
        }
        shuffle(this.points, true); //para randomizar las lineas mezclamos el array, asi no apareceran todas desde los mismos puntos

        this.r1 = random(255);
        this.r2 = random(255);
        this.g1 = random(255);
        this.g2 = random(255);
        this.b1 = random(255);
        this.b2 = random(255);

        this.mult = random(0.002, 0.01);
    }

    draw() {
        if (this.borrarFondo) {
            background(30);
            this.borrarFondo = false;
        }

        push();
        noiseDetail(1);
        //esta condicion es para que se vean los points de uno en uno y podemos cambiar en el for siguiente el points.length por max y descomentar este if si queremos usarla, o comentar este if y cambiar el max x points.length segun sea el caso
        if (frameCount * 5 <= this.points.length) {
            var max = frameCount * 5;
        } else {
            var max = this.points.length;
        }

        //creamos otro loop para iterar entre los points //creamos un circulo en las coordenadas x e y de cada point
        for (var i = 0; i < max; i++) {
            var r = map(this.points[i].x, 0, width, this.r1, this.r2);
            var g = map(this.points[i].y, 0, height, this.g1, this.g2);
            var b = map(this.points[i].x, 0, width, this.b1, this.b2);
            //una variable que controle el valor de transparencia
            var alpha = map(dist(width / 2, height / 2, this.points[i].x, this.points[i].y), 0, 300, 400, 0);
            //mapeamos este valor con la misma distancia del ellipse para crear un efecto de transparencia

            stroke(r, g, b, alpha);

            var angle = map(noise(this.points[i].x * this.mult, this.points[i].y * this.mult), 0, 1, 0, 720); //para darle un angulo en el cual cada punto se va a mover
            //le sumamos un vector a cada punto basados en el angulo
            this.points[i].add(createVector(cos(angle), sin(angle)))

            //hacemos que nuestro canvas sea solamente un ellipse
            if (dist(width / 2, height / 2, this.points[i].x, this.points[i].y) < 300) {
                point(this.points[i].x, this.points[i].y)
            }
        }
        pop();

        for (let b of this.botones) {
            b.draw();
        }
    }

    mouseClicked() {
        for (let b of this.botones) {
            b.clicked();
        }
    }
}