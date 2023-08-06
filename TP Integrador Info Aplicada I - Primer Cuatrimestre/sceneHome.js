class SceneHome extends Scene {
    constructor() {
        super();

        this.inicializar();

        function escena1() {
            world.setScene(2);
            world.currentScene.inicializar();
        }

        function escenaNav() {
            world.setScene(1);
        }

        this.botones = [
            new Button(width / 2, height / 2, 128, 128, world.img_start, escena1),
            new Button(width / 2, (height / 2) + height / 3, 128, 128, world.img_nav, escenaNav),
        ];
    }

    inicializar() {
        this.colors = [
            color(255, 0, 110), //PINK
            color(255, 190, 11), //YELLOW
            color(131, 56, 236), //PURPLE
            color(58, 134, 255), //BLUE
            color(193, 0, 22), //RED
            color(231, 246, 248), //WHITE
        ];
        this.borrarFondo = true;
    }

    draw() {
        background(this.colors[2]);

        push();
        noStroke();
        fill(30);
        rect(30, 30, width - 55, height - 55);
        pop();

        textFont(world.myFont);
        noStroke();
        textSize(36);
        fill(this.colors[1]);
        textAlign(CENTER);
        text("Trabajo Integrador, INFORMATICA APLICADA I, Cat. Calcagno", width / 2, height / 3 - width / 10);
        text("Alumna: Medina Fiorella", width / 2, height / 3 - width / 13);
        text("Universidad Nacional de las Artes, 2023", width / 2, height / 3 - width / 19);
        text("~     HOME     ~", width / 2, height / 2 - width / 27);
        text("~ NAVEGA POR LAS OBRAS ~", width / 2, height / 2 + height / 5);

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