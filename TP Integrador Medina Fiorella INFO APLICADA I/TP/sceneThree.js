class SceneThree extends Scene {
    constructor() {
        super();

        function escena3() {
            world.setScene(3);
        }

        function escena5() {
            world.setScene(5);
        }
        this.botones = [
            new Button(100, height - 100, 128, 128, world.img_prev, escena3),
            new Button(width - 100, height - 100, 128, 128, world.img_next, escena5),
        ];

        this.inicializar();
    }

    inicializar() {
        this.borrarFondo = true;
        this.particles = [];
        this.gravity = .25;
        this.colors = ['red', 'orange', 'yellow', 'lime', 'cyan', 'magenta', 'white'];
        this.endColor;
        this.houses;
        this.houseCount;
        this.houseWidth;
        this.houseWindowWidth;
        this.houseWindowHeight;
        pixelDensity(1);
        this.endColor = color(64, 0);
        this.makeHouses();
    }

    makeHouses() {
        this.houses = createGraphics(width, height);
        this.houses.strokeWeight(2);
        this.houseCount = 10;
        this.houseWidth = width / this.houseCount;
        this.houseWindowWidth = 10;
        this.houseWindowHeight = 15;
        for (let i = 0; i < this.houseCount; i++) {
            this.houseHeight = random(35, 100);
            this.houses.fill(128);
            this.houses.rect(this.houseWidth * i, height - this.houseHeight, this.houseWidth, this.houseHeight * 2);

            for (let windowY = height - this.houseHeight + 10; windowY < height - this.houseWindowHeight - 5; windowY += this.houseWindowHeight + 5) {
                this.houses.fill(random() < 0.25 ? 'magenta' : 64);
                this.houses.rect(this.houseWidth * i + 12, windowY, this.houseWindowWidth, this.houseWindowHeight);

                this.houses.fill(random() < 0.25 ? 'yellow' : 64);
                this.houses.rect(this.houseWidth * (i + 1) - 12 - this.houseWindowWidth, windowY, this.houseWindowWidth, this.houseWindowHeight);
            }
        }
    }

    mouseClicked() {
        for (let b of this.botones) {
            b.clicked();
        }

        this.particles.push(new Firework(mouseX, height));
    }

    draw() {
        background(64);

        this.particles.forEach((p) => {
            p.step();
            p.draw();
        });
        this.particles = this.particles.filter((p) => this.p.isAlive);

        image(this.houses, 0, 0);

        for (let b of this.botones) {
            b.draw();
        }

    }
}