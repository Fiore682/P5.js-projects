class SceneNav extends Scene {
    constructor() {
        super();

        this.inicializar();

        function escena2() {
            world.setScene(2);
        }

        function escena3() {
            world.setScene(3);
        }

        function escena4() {
            world.setScene(4);
        }
        this.botones = [
            new Button(width / 3 - 100, width / 4, 430, 430, world.img_comp1, escena2, "sceneNav"),
            new Button(width / 2, width / 4, 430, 430, world.img_comp2, escena3, "sceneNav"),
            new Button(width / 2 + 445, width / 4, 430, 430, world.img_comp3, escena4, "sceneNav"),
        ];
    }

    // inicializador para el efecto de copos de nieve
    inicializar() {
        this.drops = [];

        for (let x = 0; x < width; x++) {
            this.drops[x] = random(height);
        }
        stroke(255);
    }

    draw() {
        background(30);
        textSize(32);
        text('Topografía', width / 3 - 100, width / 4 - 100);
        text('Mandalas Interactivos', width / 2, width / 4 - 100);
        text('Burbujas', width / 2 + 445, width / 4 - 100);

        for (let b of this.botones) {
            b.draw();
        }

        // efecto de copos de nieve
        for (let x = 0; x < this.drops.length; x++) {
            this.drops[x] += random(10);
            if (this.drops[x] > height) {
                this.drops[x] = 0;
            }

            let dropPosition = createVector(x, this.drops[x]);
            let isOnButton = false;

            for (let b of this.botones) {
                if (b.contains(dropPosition.x, dropPosition.y)) {
                    isOnButton = true;
                    break;
                }
            }

            if (!isOnButton) {
                point(dropPosition.x, dropPosition.y);
            }
        }
    }

    mouseClicked() {
        for (let b of this.botones) {
            b.clicked();
        }
    }
}