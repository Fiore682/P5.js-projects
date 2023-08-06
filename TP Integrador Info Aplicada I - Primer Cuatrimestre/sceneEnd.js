class SceneEnd extends Scene {
    constructor() {
        super();

        this.inicializar();

        function escena0() {
            world.setScene(0);
        }
        this.botones = [
            new Button(width / 2, height / 2, 128, 128, world.img_home, escena0)
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
    }

    draw() {
        background(this.colors[2]);

        push();
        noStroke();
        fill(30);
        rect(30, 30, width - 55, height - 55);
        textSize(36);
        fill(this.colors[1]);
        textAlign(CENTER);
        text('¡Gracias por usar el programa! Esperamos que te haya gustado.', width / 2, height / 2 - 200);
        pop();

        fill(this.colors[4]);
        line(width, height, 100, 50);

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