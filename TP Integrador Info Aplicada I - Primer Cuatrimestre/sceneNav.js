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
            new Button(width / 3 - width / 9, width / 4.5, 430, 430, world.img_comp1, escena2, "sceneNav"),
            new Button(width / 2, width / 4.5, 430, 430, world.img_comp2, escena3, "sceneNav"),
            new Button(width - width / 5, width / 4.5, 430, 430, world.img_comp3, escena4, "sceneNav"),
        ];
    }

    // inicializador para el efecto de copos de nieve
    inicializar() {
        this.borrarFondo = true;

        this.drops = [];

        for (let x = 0; x < width; x++) {
            this.drops[x] = random(height);
        }
        stroke(255);
    }

    draw() {
        background(30);

        // efecto de copos de nieve para el fondo
        for (let x = 0; x < this.drops.length; x++) {
            this.drops[x] += random(10);
            if (this.drops[x] > height) {
                this.drops[x] = 0;
            }

            let dropPosition = createVector(x, this.drops[x]);
            let pointSize = random(1, 3);

            ellipse(dropPosition.x, dropPosition.y, pointSize, pointSize);
        }

        textSize(32);

        push();
        fill(255, 190, 11);
        text('Topografia', width / 3 - width / 9, height / 2 + height / 6);
        text('Mandalas Interactivos', width / 2, height / 2 + height / 6);
        text('Fuegos Arificiales', width - width / 5, height / 2 + height / 6);
        pop();

        fill(231, 246, 248);
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