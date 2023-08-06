class SceneThree extends Scene {
    constructor() {
        super();

        this.inicializar();

        function escena3() {
            world.setScene(3);
        }

        function escena5() {
            world.setScene(5);
        }
        this.botones = [
            new Button(width / 15, height - height / 2, 128, 128, world.img_prev, escena3),
            new Button(width - width / 15, height - height / 2, 128, 128, world.img_next, escena5),
        ];
    }

    inicializar() {
        this.borrarFondo = true;

        this.particles = [];
        this.gravity = 0.25;
        this.colors = [
            color(255, 0, 110), //PINK
            color(251, 86, 7),
            color(255, 190, 11), //YELLOW
            color(131, 56, 236), //PURPLE
            color(58, 134, 255), //BLUE
            color(193, 0, 22), //RED
            color(231, 246, 248), //WHITE
        ];
        this.endColor = color(64, 0);

        this.circles = [];

        pixelDensity(1);
        this.makeHouses();
        this.stars = []; // inicializar el array de estrellas
        this.generarEstrellas(); // generar las estrellas una sola vez
    }

    makeHouses() {
        // función usada para crear edificios
        this.houses = createGraphics(width, height);
        this.houses.strokeWeight(2);
        this.houses.stroke(108, 35, 108);
        this.houseCount = 15;
        this.houseWidth = width / this.houseCount;
        this.houseWindowWidth = 15;
        this.houseWindowHeight = 15;

        for (let i = 0; i < this.houseCount; i++) {
            this.houseHeight = random(35, 300);
            this.houses.fill(39, 38, 64);
            this.houses.rect(
                this.houseWidth * i,
                height - this.houseHeight,
                this.houseWidth,
                this.houseHeight * 2
            );

            for (
                let windowY = height - this.houseHeight + 10; windowY < height - this.houseWindowHeight - 5; windowY += this.houseWindowHeight + 5
            ) {
                const randomColor = random(this.colors);
                this.houses.fill(randomColor);
                this.houses.rect(
                    this.houseWidth * i + 12,
                    windowY,
                    this.houseWindowWidth,
                    this.houseWindowHeight
                );

                this.houses.fill(randomColor);
                this.houses.rect(
                    this.houseWidth * (i + 1) - 12 - this.houseWindowWidth,
                    windowY,
                    this.houseWindowWidth,
                    this.houseWindowHeight
                );
            }
        }
    }

    generarEstrellas() {
        const numEstrellas = 50; // número de estrellas a generar

        for (let i = 0; i < numEstrellas; i++) {
            const x = random(width); // coordenada x aleatoria dentro del ancho del canvas
            const y = random(height); // coordenada y aleatoria dentro de la altura del canvas
            const size = random(1, 5); // tamaño aleatorio de la estrella

            this.stars.push({ x, y, size }); // agregar la estrella al array de estrellas
        }
    }

    checkCollision(x, y, size) {
        // si no hay colision entre un crater y otro el circulo se agrega al array circles y se dibuja
        for (let circle of this.circles) {
            const distance = dist(x, y, circle.x, circle.y);
            const minDistance = size / 2 + circle.size / 2;
            if (distance < minDistance) {
                return true; // hay colisión
            }
        }
        return false; // no hay colisión
    }

    mouseClicked() {
        // crea fuegos artificiales al hacer click en el canvas
        for (let b of this.botones) {
            b.clicked();
        }
        this.particles.push(new Firework(mouseX, height, this.colors, this.particles));
        // Reproducir el sonido cada vez que se crea un nuevo firework
        world.fireworkSound.play();
    }

    draw() {
        background(6, 15, 26);

        push();
        // Dibujar halo de luz alrededor de la luna
        blendMode(ADD);
        const haloSize = 150;
        const haloColor = color(255, 255, 255, 15);
        noStroke();
        fill(haloColor);
        ellipse(width / 3, height / 3, haloSize);

        fill(231, 246, 248);
        ellipse(width / 3, height / 3, 100); // luna
        blendMode(BLEND);

        noStroke();
        fill(196, 212, 215);
        translate(width / 3, height / 3);

        for (let i = 0; i < 6; i++) {
            // crateres lunares dentro de el ellipse luna
            if (!this.circles[i]) {
                let validPosition = false;
                let posX, posY, circleSize;

                while (!validPosition) {
                    circleSize = random(5, 30);
                    posX = random(-25, 25);
                    posY = random(-25, 25);

                    if (!this.checkCollision(posX, posY, circleSize)) {
                        validPosition = true;
                    }
                }

                this.circles[i] = { size: circleSize, x: posX, y: posY };
            }
            const { size, x, y } = this.circles[i];
            circle(x, y, size);
        }
        pop();

        for (let star of this.stars) {
            // dibujar estrellas
            fill(255);
            noStroke();
            circle(star.x, star.y, star.size);
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            // particulas para los fuegos artificiales
            const particle = this.particles[i];
            particle.step();
            particle.draw();

            if (!particle.isAlive) {
                // verifica la propiedad isAlive de cada objeto particle. Si isAlive es false, lo que indica que la partícula ha terminado su ciclo de vida, se elimina del array particles utilizando el método splice()
                this.particles.splice(i, 1);
            }
        }

        image(this.houses, 0, 0);

        for (let b of this.botones) {
            b.draw();
        }
    }
}